
'use client';

import React, { useState, useRef, useEffect, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Sparkles, User, Wand2, XCircle, Send } from 'lucide-react';
import { explainItFlow } from './actions';
import { useToast } from '@/hooks/use-toast';
import { marked } from 'marked';
import { MathRenderer } from '@/components/MathRenderer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { AceMascot } from '@/components/AceMascot';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ExplainThisPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isGenerating, startGeneration] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isGenerating]);


  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    
    startGeneration(async () => {
      try {
        const response = await explainItFlow(newMessages);
        const aiMessage: Message = { role: 'assistant', content: response };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error: any) {
        console.error("AI explanation error:", error);
        toast({
            variant: "destructive",
            title: "Explanation Failed",
            description: error.message || "An error occurred while generating the explanation."
        });
        setMessages(messages); // Revert to previous state on error
      }
    });
  };

  const handleClearChat = () => {
    setMessages([]);
    setInput('');
  }

  return (
    <div className="p-4 md:p-8 flex items-center justify-center h-full">
        <Card className="w-full max-w-3xl mx-auto flex flex-col h-[calc(100vh-10rem)]">
            <CardHeader className="text-center">
                <AceMascot className="mx-auto h-12 w-12" />
                <CardTitle className="font-headline text-3xl">Chat with Ace</CardTitle>
                <p className="text-muted-foreground">Your personal AI study assistant. Ask me anything!</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col min-h-0">
               <ScrollArea className="flex-1 pr-4 -mr-4" viewportRef={scrollAreaRef}>
                    <div className="space-y-6">
                        <AnimatePresence>
                        {messages.map((message, index) => (
                            <motion.div 
                                key={index} 
                                className={cn(
                                    "flex items-start gap-3",
                                    message.role === 'user' && 'justify-end'
                                )}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {message.role === 'assistant' && (
                                    <Avatar className="h-8 w-8">
                                        <AceMascot />
                                    </Avatar>
                                )}
                                 <div className={cn(
                                    "rounded-xl p-3 max-w-lg", 
                                    message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                                 )}>
                                    {message.role === 'assistant' && <p className="font-bold text-sm mb-1">Ace</p>}
                                    <div className="prose dark:prose-invert prose-sm max-w-none text-current">
                                        <MathRenderer content={marked.parse(message.content) as string} />
                                    </div>
                                </div>
                                {message.role === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user?.photoURL || undefined} />
                                        <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                                    </Avatar>
                                )}
                            </motion.div>
                        ))}
                        </AnimatePresence>
                         {isGenerating && (
                            <motion.div 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Avatar className="h-8 w-8">
                                    <AceMascot />
                                </Avatar>
                                <div className="rounded-lg p-3 bg-secondary">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>
            <div className="p-4 border-t">
               <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="relative">
                        <Textarea
                            value={input}
                            onChange={handleInputChange}
                            placeholder={messages.length === 0 ? "Paste your problem here, e.g., 'What is the integral of x^2?'" : "Ask a follow-up question..."}
                            rows={1}
                            className="pr-24 resize-none min-h-[48px]"
                            disabled={isGenerating}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e as any);
                                }
                            }}
                        />
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                            <Button type="submit" size="sm" disabled={!input.trim() || isGenerating} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                               <Send className="mr-2 h-4 w-4" /> Send
                            </Button>
                        </div>
                    </div>
                     {messages.length > 0 && (
                        <div className="text-center">
                            <Button type="button" size="sm" variant="destructive" onClick={handleClearChat} disabled={isGenerating}>
                                <XCircle className="mr-2 h-4 w-4" /> Clear Chat
                            </Button>
                        </div>
                    )}
                </form>
            </div>
        </Card>
    </div>
  );
}
