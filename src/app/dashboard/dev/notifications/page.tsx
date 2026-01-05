
'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Send, Info, Bell, Link as LinkIcon, Edit2, Eye, Trash2, Edit } from 'lucide-react';
import { sendGlobalNotificationAction, editGlobalNotificationAction, deleteGlobalNotificationAction } from './actions';
import { marked } from 'marked';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function GlobalNotificationsPage() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [existingNotifications, setExistingNotifications] = useState<any[]>([]);
    const [editingNotif, setEditingNotif] = useState<any>(null);

    // Form State
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'info' | 'update' | 'warning'>('info');
    const [link, setLink] = useState('');

    // Load existing global notifications
    useEffect(() => {
        const notificationsRef = collection(db, 'notifications');
        const q = query(
            notificationsRef,
            where('isGlobal', '==', true),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const notifs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setExistingNotifications(notifs);
        });

        return () => unsubscribe();
    }, []);

    const handleSendNotification = async () => {
        if (!title.trim() || !message.trim()) {
            toast({ variant: 'destructive', title: 'Missing fields', description: 'Title and message are required.' });
            return;
        }

        setIsSubmitting(true);
        try {
            if (editingNotif) {
                await editGlobalNotificationAction(editingNotif.id, {
                    title,
                    message,
                    type,
                    link,
                    sentBy: user?.displayName || 'Dev Team'
                });
                toast({ title: 'Notification Updated!', description: `Successfully updated the notification for all users.` });
                setEditingNotif(null);
            } else {
                await sendGlobalNotificationAction({
                    title,
                    message,
                    type,
                    link,
                    sentBy: user?.displayName || 'Dev Team'
                });
                toast({ title: 'Notifications Sent!', description: `Successfully sent a global notification.` });
            }
            // Reset form
            setTitle('');
            setMessage('');
            setLink('');
            setType('info');
        } catch (error: any) {
            console.error("Failed to send notification:", error);
            toast({ variant: 'destructive', title: 'Error', description: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEditNotification = (notif: any) => {
        setEditingNotif(notif);
        setTitle(notif.title);
        // Strip HTML from message to get back markdown
        setMessage(notif.message.replace(/<[^>]*>/g, ''));
        setType(notif.type);
        setLink(notif.link || '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteNotification = async (notifId: string) => {
        if (!confirm('Are you sure you want to delete this notification for all users?')) return;

        try {
            await deleteGlobalNotificationAction(notifId);
            toast({ title: 'Deleted!', description: 'Notification removed for all users.' });
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Error', description: error.message });
        }
    };

    const handleCancelEdit = () => {
        setEditingNotif(null);
        setTitle('');
        setMessage('');
        setLink('');
        setType('info');
    };
    
    const messageHtml = marked.parse(message);

    return (
        <div className="p-8 space-y-8">
            <header>
                <h1 className="font-headline text-4xl font-bold flex items-center gap-3"><Send /> Global Notifications</h1>
                <p className="text-muted-foreground mt-2 text-lg">Send an announcement or update to all registered users on the platform.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card>
                    <CardHeader>
                        <CardTitle>{editingNotif ? 'Edit Notification' : 'Compose Notification'}</CardTitle>
                        <CardDescription>Craft your message below. You can use markdown for formatting.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {editingNotif && (
                            <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <span className="text-sm font-medium">Editing existing notification</span>
                                <Button variant="ghost" size="sm" onClick={handleCancelEdit}>Cancel Edit</Button>
                            </div>
                        )}
                        <div className="space-y-1.5">
                            <Label htmlFor="notification-title">Title</Label>
                            <Input id="notification-title" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g., New Feature Alert!" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="notification-message">Message (supports Markdown)</Label>
                            <Textarea 
                                id="notification-message"
                                value={message} 
                                onChange={e => setMessage(e.target.value)}
                                placeholder={"e.g., ## ✨ Check out the new Deep Dive study mode! \n\nWe've just launched a new way to test your knowledge. Let us know what you think!"}
                                rows={10} 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="notification-type">Type</Label>
                                <Select value={type} onValueChange={(v) => setType(v as any)}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="info"><Info className="mr-2 h-4 w-4 inline-block" />Informational</SelectItem>
                                        <SelectItem value="update"><Edit2 className="mr-2 h-4 w-4 inline-block" />Update</SelectItem>
                                        <SelectItem value="warning"><Bell className="mr-2 h-4 w-4 inline-block" />Warning</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="notification-link">Optional Link</Label>
                                <Input id="notification-link" value={link} onChange={e => setLink(e.target.value)} placeholder="e.g., /dashboard/ace-os" />
                            </div>
                        </div>
                        <div className="text-right pt-2">
                             <Button size="lg" onClick={handleSendNotification} disabled={isSubmitting}>
                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : editingNotif ? <Edit className="mr-2 h-4 w-4" /> : <Send className="mr-2 h-4 w-4" />}
                                {editingNotif ? 'Update Notification' : 'Send to All Users'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Live Preview</CardTitle>
                        <CardDescription>This is how the notification will appear to users.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-xl p-4 space-y-2 bg-secondary/30">
                           <div className="flex items-start gap-3">
                                <div className="p-2 bg-background rounded-full border">
                                    {type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
                                    {type === 'update' && <Edit2 className="h-5 w-5 text-green-500" />}
                                    {type === 'warning' && <Bell className="h-5 w-5 text-orange-500" />}
                                </div>
                                <div>
                                    <h4 className="font-bold">{title || "Your Title Here"}</h4>
                                    <div className="text-sm prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: messageHtml || "<p>Your message will appear here. Try using <strong>markdown</strong>!</p>" }} />
                                </div>
                           </div>
                           {link && (
                                <div className="pt-2 text-right">
                                    <Button size="sm" variant="outline" asChild>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <LinkIcon className="mr-2 h-4 w-4" />
                                            Learn More
                                        </a>
                                    </Button>
                                </div>
                           )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Existing Notifications */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Global Notifications</CardTitle>
                    <CardDescription>Manage previously sent notifications. Changes will affect all users.</CardDescription>
                </CardHeader>
                <CardContent>
                    {existingNotifications.length > 0 ? (
                        <div className="space-y-3">
                            {existingNotifications.map((notif) => (
                                <div key={notif.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                                    <div className="shrink-0 mt-1">
                                        {notif.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
                                        {notif.type === 'update' && <Edit2 className="h-5 w-5 text-green-500" />}
                                        {notif.type === 'warning' && <Bell className="h-5 w-5 text-orange-500" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-base">{notif.title}</h4>
                                                <div 
                                                    className="text-sm text-muted-foreground mt-1 line-clamp-2 prose dark:prose-invert max-w-none" 
                                                    dangerouslySetInnerHTML={{ __html: notif.message }}
                                                />
                                            </div>
                                            <Badge variant="secondary" className="shrink-0">
                                                {notif.type}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                                            <span>By {notif.sentBy}</span>
                                            <span>•</span>
                                            <span>{notif.createdAt ? new Date(notif.createdAt.seconds * 1000).toLocaleString() : 'Unknown'}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEditNotification(notif)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDeleteNotification(notif.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            No global notifications sent yet.
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
