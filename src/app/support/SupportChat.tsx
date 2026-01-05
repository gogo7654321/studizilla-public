
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  Timestamp,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User as UserIcon, Paperclip, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { uploadSupportAttachmentAction } from '../dashboard/dev/support-chat/actions';

type ChatMessage = {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorPhotoURL?: string | null;
  timestamp: Timestamp | null;
  isAttachment?: boolean;
};

const TypingIndicator = ({ agentName }: { agentName: string }) => (
    <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8"><AvatarFallback>A</AvatarFallback></Avatar>
        <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-medium text-muted-foreground">{agentName}</p>
                <span className="agent-tag-gradient text-xs font-bold">Support Agent</span>
            </div>
            <div className="flex items-center gap-1.5 p-3 rounded-lg bg-secondary">
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse-dot [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse-dot [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse-dot"></div>
            </div>
        </div>
    </div>
);

export function SupportChat() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [agentStatus, setAgentStatus] = useState<'online' | 'offline'>('offline');
  const [agentTypingName, setAgentTypingName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!user) return;

    const chatDocRef = doc(db, 'supportChats', user.uid);
    
    // Listen for agent status and typing
    const unsubscribeChatInfo = onSnapshot(chatDocRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            setAgentStatus(data.agentOnline ? 'online' : 'offline');
            setAgentTypingName(data.agentTyping || null);
        }
    });

    const messagesQuery = query(collection(chatDocRef, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribeMessages = onSnapshot(messagesQuery, (querySnapshot) => {
      const fetchedMessages: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() } as ChatMessage);
      });
      setMessages(fetchedMessages);
    });

    return () => {
        unsubscribeChatInfo();
        unsubscribeMessages();
    };
  }, [user]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user) return;

    const textToSend = newMessage;
    setNewMessage('');

    const chatDocRef = doc(db, 'supportChats', user.uid);
    const messagesCollection = collection(chatDocRef, 'messages');

    try {
        await setDoc(chatDocRef, { 
            lastMessage: textToSend,
            lastMessageTimestamp: serverTimestamp(),
            userEmail: user.email,
            userName: user.displayName,
            userPhotoURL: user.photoURL,
            hasUnreadUserMessages: true,
            status: 'open', // Re-open chat on new message
        }, { merge: true });

        await addDoc(messagesCollection, {
            text: textToSend,
            authorId: user.uid,
            authorName: user.displayName || 'User',
            authorPhotoURL: user.photoURL,
            timestamp: serverTimestamp(),
            isAttachment: false,
        });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not send message.' });
      setNewMessage(textToSend); // Restore message on error
    }
  };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0 || !user) {
            return;
        }

        const file = event.target.files[0];
        // 10MB limit
        if (file.size > 10 * 1024 * 1024) {
            toast({ variant: 'destructive', title: 'File too large', description: 'Please upload files under 10MB.' });
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('authorId', user.uid);
        formData.append('authorName', user.displayName || 'User');
        formData.append('chatId', user.uid);
        formData.append('authorPhotoURL', user.photoURL || '');

        try {
            const result = await uploadSupportAttachmentAction(formData);
            if (result.success) {
                toast({ title: 'Attachment Sent!', description: `${file.name} has been uploaded.` });
            }
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Upload Failed', description: error.message || 'Could not upload your file.' });
        } finally {
            setIsUploading(false);
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

  if (!user) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Live Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">You need to be logged in to use the live chat.</p>
                <Button asChild>
                    <Link href="/auth">Log In / Sign Up</Link>
                </Button>
            </CardContent>
        </Card>
    )
  }

  return (
    <Card className="flex flex-col h-[600px]">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle>Live Support Chat</CardTitle>
            <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${agentStatus === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <p className="text-sm text-muted-foreground">{agentStatus === 'online' ? 'Online' : 'Offline'}</p>
            </div>
        </div>
        <CardDescription>Average response time is within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {messages.map((msg) => {
              const isUserMessage = msg.authorId === user?.uid;
              const isSystemMessage = msg.authorId === 'system';
              
              return (
                <div
                  key={msg.id}
                  className={cn("flex items-start gap-3", isUserMessage && "justify-end")}
                >
                  {!isUserMessage && !isSystemMessage && (
                     <Avatar className="h-8 w-8">
                       <AvatarImage src={msg.authorPhotoURL || undefined} />
                       <AvatarFallback>{msg.authorName.charAt(0)}</AvatarFallback>
                     </Avatar>
                  )}
                  <div
                    className={cn("flex flex-col", isUserMessage ? "items-end" : "items-start")}
                  >
                     {!isUserMessage && !isSystemMessage && (
                      <div className="flex items-center gap-2 mb-1">
                         <p className="text-xs font-medium text-muted-foreground">{msg.authorName}</p>
                         <span className="agent-tag-gradient text-xs font-bold">Support Agent</span>
                      </div>
                     )}
                    <div
                      className={cn(
                        "rounded-lg p-3 max-w-xs sm:max-w-sm break-words",
                        isUserMessage ? 'bg-primary text-primary-foreground' : 'bg-secondary',
                        isSystemMessage && 'bg-transparent text-foreground border border-dashed w-full'
                      )}
                    >
                      <div className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text }} />
                    </div>
                     <p className="text-xs text-muted-foreground mt-1">
                        {msg.timestamp ? formatDistanceToNow(msg.timestamp.toDate(), { addSuffix: true }) : 'sending...'}
                     </p>
                  </div>
                   {isUserMessage && (
                     <Avatar className="h-8 w-8">
                       <AvatarImage src={user.photoURL || undefined} />
                       <AvatarFallback><UserIcon /></AvatarFallback>
                     </Avatar>
                  )}
                </div>
              );
            })}
            {agentTypingName && (
                <TypingIndicator agentName={agentTypingName} />
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="w-full flex items-center gap-2">
           <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
           <Button type="button" variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
              {isUploading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Paperclip className="h-5 w-5" />}
           </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
