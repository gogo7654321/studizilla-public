
'use client';

import React, { useState, useEffect, useRef, useCallback, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  doc,
  deleteDoc,
  getDocs,
  where,
  limit,
} from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User as UserIcon, Archive, Trash2, UserCog, Download, Loader2, RotateCcw, MessageCircle, MoreVertical, Globe, MessageSquarePlus, Paperclip } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import { 
    closeChatAction, 
    deleteChatAndMessagesAction, 
    reopenChatAction, 
    requestUserDataAction,
    postAgentReplyAction,
    uploadSupportAttachmentAction,
} from './actions';
import { Separator } from '@/components/ui/separator';
import { isDev } from '@/lib/authUtils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Textarea } from '@/components/ui/textarea';
import { getAllUsers, type SearchedUser as FullSearchedUser } from '@/app/dashboard/dev/user-search/actions';

type ChatStatus = 'open' | 'unread' | 'resolved';
type Priority = 'low' | 'medium' | 'high' | 'suggestion';
type Category = 'account' | 'technical' | 'feedback' | 'content-error' | 'other';

type ChatThread = {
    id: string; // User UID
    lastMessage: string;
    lastMessageTimestamp: Timestamp | null;
    userEmail: string;
    userName: string;
    userPhotoURL?: string;
    hasUnreadUserMessages?: boolean;
    status: ChatStatus;
    userOnline?: boolean;
    priority: Priority;
    category: Category;
    description: string;
    agentTyping?: string | false;
    ipAddress?: string;
    location?: string;
};

type ChatMessage = {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorPhotoURL?: string | null;
  timestamp: Timestamp | null;
  isAttachment?: boolean;
};

type SearchedUser = {
  uid: string;
  displayName: string | null;
  username: string;
  email: string | null;
  photoURL: string | null;
};

const statusVariantMap: Record<ChatStatus, 'default' | 'destructive' | 'secondary'> = {
    open: 'default',
    unread: 'destructive',
    resolved: 'secondary',
};

const priorityStyles: Record<Priority, string> = {
    high: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
    medium: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white',
    low: 'bg-gradient-to-r from-blue-400 to-cyan-400 text-white',
    suggestion: 'bg-gradient-to-r from-gray-400 to-gray-500 text-white',
};

const categoryStyles: Record<Category, string> = {
    account: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    feedback: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
    'content-error': 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
};


function ChatThreadCard({ thread }: { thread: ChatThread }) {
    const { user: agentUser } = useAuth();
    const { toast } = useToast();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const [newMessage, setNewMessage] = useState('');
    const [isReplying, startReplyTransition] = React.useTransition();
    const alertActionRef = useRef<() => void>(() => {});
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState({ title: '', description: '' });
    const [isDownloading, setIsDownloading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!agentUser) return;
        setIsLoadingMessages(true);
        const chatDocRef = doc(db, 'supportChats', thread.id);
        const messagesQuery = query(collection(chatDocRef, 'messages'), orderBy('timestamp', 'asc'));
        
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
            const fetchedMessages: ChatMessage[] = [];
            snapshot.forEach(doc => fetchedMessages.push({ id: doc.id, ...doc.data() } as ChatMessage));
            setMessages(fetchedMessages);
            setIsLoadingMessages(false);
        });
        
        return () => unsubscribe();
    }, [thread.id, agentUser]);
    
    const confirmAction = (title: string, description: string, onConfirm: () => void) => {
        setAlertContent({ title, description });
        alertActionRef.current = onConfirm;
        setIsAlertOpen(true);
    };

    const handleAction = useCallback(async (action: () => Promise<void>, successMessage: string) => {
        if (!isDev(agentUser)) {
            toast({ variant: 'destructive', title: 'Permission Denied' });
            return;
        }
        try {
            await action();
            toast({ title: successMessage });
        } catch (error: any) {
            console.error("Dev Portal Action Error:", error);
            toast({ variant: 'destructive', title: 'Error', description: error.message || 'Could not perform action.' });
        }
    }, [agentUser, toast]);
    
    const handlePostReply = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !agentUser || !isDev(agentUser)) return;
        
        const messageToSend = newMessage;
        setNewMessage('');
        
        const cleanAgent = {
            uid: agentUser.uid,
            displayName: agentUser.displayName,
            photoURL: agentUser.photoURL
        };

        startReplyTransition(async () => {
            await postAgentReplyAction(cleanAgent, thread.id, messageToSend);
        });
    }, [newMessage, agentUser, thread.id]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0 || !agentUser) {
            return;
        }

        const file = event.target.files[0];
        if (file.size > 10 * 1024 * 1024) {
            toast({ variant: 'destructive', title: 'File too large', description: 'Please upload files under 10MB.' });
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('authorId', agentUser.uid);
        formData.append('authorName', agentUser.displayName || 'Support');
        formData.append('chatId', thread.id);
        formData.append('authorPhotoURL', agentUser.photoURL || '');

        try {
            const result = await uploadSupportAttachmentAction(formData);
            if (result.success) {
                toast({ title: 'Attachment Sent!', description: `${file.name} has been uploaded.` });
            }
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Upload Failed', description: error.message || 'Could not upload your file.' });
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };
    
    const handleRequestData = useCallback(async () => {
        if (!isDev(agentUser)) {
             toast({ variant: 'destructive', title: 'Permission Denied' });
             return;
        }
        setIsDownloading(true);
        try {
            const userData = await requestUserDataAction(thread.id);
            const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(userData, null, 2))}`;
            const link = document.createElement('a');
            link.href = jsonString;
            link.download = `ap_ace_data_${thread.id}.json`;
            link.click();
            toast({ title: 'Data Prepared', description: 'Your download has started.' });
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Error', description: error.message || 'Could not prepare user data for download.' });
        } finally {
            setIsDownloading(false);
        }
    }, [agentUser, thread.id, toast]);

    const handleReopenChat = useCallback(() => {
        handleAction(() => reopenChatAction(thread.id), "Chat re-opened");
    }, [thread.id, handleAction]);

    const handleCloseChat = useCallback(() => {
        handleAction(() => closeChatAction(thread.id), "Chat closed");
    }, [thread.id, handleAction]);

    const handleDeleteChat = useCallback(() => {
        handleAction(() => deleteChatAndMessagesAction(thread.id), "Chat history deleted.");
    }, [thread.id, handleAction]);

    const confirmDeleteChat = useCallback(() => {
        confirmAction('Delete Chat History?', 'This is irreversible.', handleDeleteChat);
    }, [handleDeleteChat]);

    return (
        <Card className="flex flex-col h-full rounded-2xl">
            <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{alertContent.title}</AlertDialogTitle>
                        <AlertDialogDescription>{alertContent.description}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                            onClick={() => { 
                                alertActionRef.current();
                                setIsAlertOpen(false); 
                            }} 
                            className={buttonVariants({ variant: "destructive" })}
                        >
                            Confirm
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <CardHeader className="border-b">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                         <Avatar className="h-10 w-10">
                            <AvatarImage src={thread.userPhotoURL || undefined} alt={thread.userName}/>
                            <AvatarFallback><UserIcon/></AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">{thread.userName}</CardTitle>
                            <CardDescription>{thread.userEmail}</CardDescription>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                             <DropdownMenuLabel>Agent Tools</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {thread.status === 'resolved' ? (
                                <DropdownMenuItem onSelect={handleReopenChat}>
                                    <RotateCcw className="mr-2 h-4 w-4" /> Re-open Chat
                                </DropdownMenuItem>
                            ) : (
                                <DropdownMenuItem onSelect={handleCloseChat}>
                                    <Archive className="mr-2 h-4 w-4" /> Close Chat
                                </DropdownMenuItem>
                            )}
                            <DropdownMenuItem onSelect={handleRequestData} disabled={isDownloading}>
                                {isDownloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                                Request Data
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                className="text-destructive focus:text-destructive" 
                                onSelect={confirmDeleteChat}
                            >
                                <Trash2 className="mr-2 h-4 w-4" /> Delete Chat History
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                 <div className="text-xs text-muted-foreground pt-2 flex items-center justify-between">
                    <span>
                        Request from {thread.lastMessageTimestamp ? format(thread.lastMessageTimestamp.toDate(), 'PPp') : '...'}
                    </span>
                     {thread.location && (
                        <span className="flex items-center gap-1.5">
                            <Globe className="h-3 w-3" />
                            {thread.location} ({thread.ipAddress})
                        </span>
                     )}
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                    {isLoadingMessages ? (
                        <div className="flex justify-center items-center h-full"><Loader2 className="h-6 w-6 animate-spin"/></div>
                    ) : (
                        <div className="space-y-4">
                            {messages.map((msg) => {
                                const isAgentMessage = msg.authorId === agentUser?.uid;
                                const isSystemMessage = msg.authorId === 'system';
                                return (
                                <div key={msg.id} className={cn("flex items-start gap-2", isAgentMessage && "justify-end")}>
                                    {!isAgentMessage && !isSystemMessage && <Avatar className="h-6 w-6"><AvatarImage src={msg.authorPhotoURL || undefined} /><AvatarFallback><UserIcon /></AvatarFallback></Avatar>}
                                    <div 
                                        className={cn(
                                            "rounded-lg p-2 max-w-md text-sm",
                                            isAgentMessage && 'bg-primary text-primary-foreground',
                                            !isAgentMessage && !isSystemMessage && 'bg-secondary text-secondary-foreground',
                                            isSystemMessage && 'bg-transparent text-foreground border border-dashed w-full text-center'
                                        )}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                                    </div>
                                    {isAgentMessage && <Avatar className="h-6 w-6"><AvatarImage src={msg.authorPhotoURL || undefined} /><AvatarFallback>A</AvatarFallback></Avatar>}
                                </div>
                            );
                           })}
                        </div>
                    )}
                </ScrollArea>
            </CardContent>
            <CardFooter className="border-t p-2">
                 <form onSubmit={handlePostReply} className="w-full flex items-center gap-2">
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                    <Button type="button" variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
                        {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Paperclip className="h-4 w-4" />}
                    </Button>
                    <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your reply..." autoComplete="off" disabled={isReplying} />
                    <Button type="submit" size="icon" disabled={!newMessage.trim() || isReplying}>
                        {isReplying ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}

function NewMessageDialog({ agentUser }: { agentUser: any }) {
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [allUsers, setAllUsers] = useState<FullSearchedUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<FullSearchedUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<SearchedUser | null>(null);
    const [message, setMessage] = useState('');
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [isSending, startSendTransition] = useTransition();

    const loadAllUsers = useCallback(async () => {
        setIsLoadingUsers(true);
        try {
            const users = await getAllUsers();
            setAllUsers(users);
        } catch (error) {
            console.error("Failed to load users:", error);
            toast({ variant: 'destructive', title: 'Could not load users' });
        } finally {
            setIsLoadingUsers(false);
        }
    }, [toast]);
    
    useEffect(() => {
        if(isOpen) {
            loadAllUsers();
        }
    }, [isOpen, loadAllUsers]);
    
    useEffect(() => {
        if (!searchTerm) {
            setFilteredUsers([]);
            return;
        }
        const lowercasedTerm = searchTerm.toLowerCase();
        const results = allUsers.filter(user => 
            user.uid !== agentUser?.uid && (
                user.displayName?.toLowerCase().includes(lowercasedTerm) ||
                user.username.toLowerCase().includes(lowercasedTerm) ||
                user.email?.toLowerCase().includes(lowercasedTerm)
            )
        ).slice(0, 5);
        setFilteredUsers(results);
    }, [searchTerm, allUsers, agentUser]);

    const handleSendMessage = async () => {
        if (!selectedUser || !message.trim() || !agentUser || !isDev(agentUser)) return;

        const cleanAgent = {
            uid: agentUser.uid,
            displayName: agentUser.displayName,
            photoURL: agentUser.photoURL
        };

        startSendTransition(async () => {
            try {
                await postAgentReplyAction(cleanAgent, selectedUser.uid, message);
                toast({ title: 'Message Sent!', description: `Your chat with @${selectedUser.username} has been started.` });
                setIsOpen(false);
                setSelectedUser(null);
                setSearchTerm('');
                setMessage('');
            } catch (error: any) {
                toast({ variant: 'destructive', title: 'Error', description: error.message });
            }
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline"><MessageSquarePlus className="mr-2 h-4 w-4" />New Message</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Initiate a New Support Chat</DialogTitle>
                </DialogHeader>
                {!selectedUser ? (
                    <Command shouldFilter={false} className="mt-2">
                        <CommandInput
                            value={searchTerm}
                            onValueChange={setSearchTerm}
                            placeholder="Search by username, name, or email..."
                            disabled={isLoadingUsers}
                        />
                        <CommandList>
                             {isLoadingUsers && <div className="p-4 text-center text-sm"><Loader2 className="h-5 w-5 animate-spin mx-auto" /></div>}
                            <CommandEmpty>{!isLoadingUsers && "No users found."}</CommandEmpty>
                            <CommandGroup>
                                {filteredUsers.map((user) => (
                                    <CommandItem key={user.uid} onSelect={() => setSelectedUser(user)}>
                                        <Avatar className="mr-2 h-6 w-6"><AvatarImage src={user.photoURL || undefined} /><AvatarFallback><UserIcon /></AvatarFallback></Avatar>
                                        <span>{user.displayName}</span>
                                        <span className="text-muted-foreground ml-2">@{user.username}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                ) : (
                    <div className="space-y-4 py-4">
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
                           <Avatar><AvatarImage src={selectedUser.photoURL || undefined} /><AvatarFallback><UserIcon /></AvatarFallback></Avatar>
                           <div>
                               <p className="font-semibold">{selectedUser.displayName}</p>
                               <p className="text-sm text-muted-foreground">@{selectedUser.username}</p>
                           </div>
                        </div>
                        <Textarea 
                            placeholder={`Your first message to ${selectedUser.displayName}...`}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                        />
                    </div>
                )}
                 <DialogFooter>
                    {selectedUser && <Button variant="ghost" onClick={() => setSelectedUser(null)}>Back to Search</Button>}
                    <Button onClick={handleSendMessage} disabled={!selectedUser || !message.trim() || isSending}>
                        {isSending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                        Send Initial Message
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default function SupportChatPage() {
    const { user } = useAuth();
    const [chatThreads, setChatThreads] = useState<ChatThread[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);

    useEffect(() => {
        const threadsQuery = query(collection(db, 'supportChats'), orderBy('lastMessageTimestamp', 'desc'));
        const unsubscribe = onSnapshot(threadsQuery, (snapshot) => {
            const threads: ChatThread[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                threads.push({
                    id: doc.id,
                    ...data,
                    status: data.status || (data.hasUnreadUserMessages ? 'unread' : 'open'),
                } as ChatThread);
            });
            setChatThreads(threads);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const selectedThread = chatThreads.find(t => t.id === selectedThreadId);

    return (
        <div className="flex flex-col h-screen">
            <header className="p-8 flex-shrink-0 flex justify-between items-center">
                 <div>
                    <h1 className="font-headline text-4xl font-bold">Live Support Feed</h1>
                    <p className="text-muted-foreground mt-2 text-lg">Respond to and manage all user support requests from one place.</p>
                </div>
                <NewMessageDialog agentUser={user} />
            </header>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 px-8 pb-8 min-h-0">
                <Card className="md:col-span-1 xl:col-span-1 flex flex-col rounded-2xl">
                    <CardHeader>
                        <CardTitle>Conversations</CardTitle>
                        <CardDescription>Select a chat to view</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 p-2 overflow-auto">
                        <ScrollArea className="h-full">
                            {isLoading ? (
                                <div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin" /></div>
                            ) : chatThreads.length > 0 ? (
                                <div className="space-y-2">
                                    {chatThreads.map(thread => (
                                        <button
                                            key={thread.id}
                                            onClick={() => setSelectedThreadId(thread.id)}
                                            className={cn(
                                                "w-full text-left p-3 rounded-xl border transition-colors",
                                                selectedThreadId === thread.id
                                                    ? "bg-secondary border-primary"
                                                    : "hover:bg-secondary/50"
                                            )}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={thread.userPhotoURL || undefined} />
                                                        <AvatarFallback><UserIcon /></AvatarFallback>
                                                    </Avatar>
                                                    <div className="truncate">
                                                        <p className="font-semibold text-sm truncate">{thread.userName}</p>
                                                        <p className="text-xs text-muted-foreground truncate">{thread.lastMessage}</p>
                                                    </div>
                                                </div>
                                                {thread.hasUnreadUserMessages && (
                                                    <div className="h-2.5 w-2.5 rounded-full bg-destructive flex-shrink-0" />
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-1 flex-wrap">
                                                    <Badge variant={statusVariantMap[thread.status]} className="capitalize text-xs">{thread.status}</Badge>
                                                    <Badge className={cn("capitalize text-xs", priorityStyles[thread.priority])}>{thread.priority}</Badge>
                                                    <Badge variant="outline" className={cn("capitalize text-xs", categoryStyles[thread.category || 'other'])}>{(thread.category || 'other').replace('-', ' ')}</Badge>
                                                </div>
                                                <p className="text-xs text-muted-foreground flex-shrink-0">
                                                    {thread.lastMessageTimestamp ? formatDistanceToNow(thread.lastMessageTimestamp.toDate(), { addSuffix: true }) : '...'}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center p-4 h-full text-muted-foreground">
                                    <MessageCircle className="h-10 w-10" />
                                    <p className="mt-2 font-semibold">Inbox Zero!</p>
                                    <p className="text-sm">No active support requests.</p>
                                </div>
                            )}
                        </ScrollArea>
                    </CardContent>
                </Card>

                <div className="md:col-span-2 xl:col-span-3 h-full">
                    {selectedThread ? (
                        <ChatThreadCard thread={selectedThread} />
                    ) : (
                        <Card className="h-full flex flex-col items-center justify-center text-center text-muted-foreground rounded-2xl">
                            <MessageCircle className="h-16 w-16" />
                            <h2 className="mt-4 text-xl font-semibold">Select a Conversation</h2>
                            <p>Choose a chat from the list to view messages and reply.</p>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    );
}
