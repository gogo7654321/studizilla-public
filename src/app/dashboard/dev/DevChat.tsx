
'use client';

import { useState, useEffect, useRef, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User as UserIcon, Trash2, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { clearDevChatAction } from './actions';


type ChatMessage = {
  id: string;
  text: string;
  authorName: string;
  authorId: string;
  authorPhotoURL?: string | null;
  timestamp: Timestamp | null; // Allow null for messages being sent
};

export function DevChat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const pathname = usePathname();
  const { toast } = useToast();
  const [isClearing, startClearTransition] = useTransition();

  useEffect(() => {
    const q = query(collection(db, 'dev_chat'), orderBy('timestamp', 'asc'));

    // Listen for real-time updates, including metadata changes to get local writes immediately.
    const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
      const fetchedMessages: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedMessages.push({
            id: doc.id,
            text: data.text,
            authorName: data.authorName,
            authorId: data.authorId,
            authorPhotoURL: data.authorPhotoURL,
            // The timestamp will be null for local pending writes
            timestamp: data.timestamp,
        });
      });
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !user) return;

    const textToSend = newMessage;
    setNewMessage(''); // Clear input immediately for better UX

    try {
      // Send message to dev chat
      await addDoc(collection(db, 'dev_chat'), {
        text: textToSend,
        authorName: user.displayName || 'Dev User',
        authorId: user.uid,
        authorPhotoURL: user.photoURL,
        timestamp: serverTimestamp(),
      });

      // Log activity for dev portal metrics
      await addDoc(collection(db, 'activityLogs'), {
        userId: user.uid,
        userEmail: user.email || 'Unknown',
        action: 'dev_chat_message',
        timestamp: serverTimestamp(),
        metadata: {
          messageLength: textToSend.length,
        },
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setNewMessage(textToSend); // Restore message on error
    }
  };

  const handleClearChat = async () => {
    startClearTransition(async () => {
        try {
            const result = await clearDevChatAction();
            toast({
                title: 'Success',
                description: result.message,
            });
        } catch(error: any) {
            console.error("Failed to clear dev chat:", error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error.message || 'Could not clear chat.',
            });
        }
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
    }
  }

  return (
    <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle className="font-mono flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  DEVELOPER CHAT
                </CardTitle>
                <CardDescription className="font-mono text-xs">Real-time team communications</CardDescription>
            </div>
             <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm" disabled={messages.length === 0} className="font-mono text-xs">
                        <Trash2 className="mr-2 h-3 w-3" /> CLEAR
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the entire chat history for everyone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleClearChat} className={buttonVariants({ variant: "destructive" })}>
                            {isClearing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Yes, Clear Chat
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 w-full rounded-xl border border-green-500/20 bg-background/50 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.authorId === user?.uid ? 'justify-end' : ''}`}
              >
                {msg.authorId !== user?.uid && (
                   <Avatar className="h-8 w-8 border-2 border-cyan-500/30">
                     <AvatarImage src={msg.authorPhotoURL || undefined} />
                     <AvatarFallback className="bg-cyan-500/20 text-cyan-400 font-mono">{msg.authorName.charAt(0)}</AvatarFallback>
                   </Avatar>
                )}
                <div
                  className={`flex flex-col ${msg.authorId === user?.uid ? 'items-end' : 'items-start'}`}
                >
                  {msg.authorId !== user?.uid && (
                    <p className="text-xs font-medium text-cyan-400 mb-1 font-mono">
                      {msg.authorName}
                    </p>
                  )}
                  <div
                    className={`rounded-xl p-3 max-w-xs sm:max-w-sm break-words ${
                      msg.authorId === user?.uid 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                        : 'bg-secondary/50 border border-green-500/20'
                    }`}
                  >
                    <p className="text-sm font-mono">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                     <p className="text-xs text-muted-foreground font-mono">
                        {msg.timestamp ? formatDistanceToNow(msg.timestamp.toDate(), { addSuffix: true }) : 'sending...'}
                     </p>
                  </div>
                </div>
                 {msg.authorId === user?.uid && (
                   <Avatar className="h-8 w-8">
                     <AvatarImage src={msg.authorPhotoURL || undefined} />
                     <AvatarFallback><UserIcon /></AvatarFallback>
                   </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t border-green-500/20">
        <form onSubmit={handleFormSubmit} className="w-full flex items-center gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            autoComplete="off"
            className="font-mono text-sm border-cyan-500/30 focus:border-cyan-500/60"
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send Message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
