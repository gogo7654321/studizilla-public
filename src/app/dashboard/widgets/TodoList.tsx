'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle, Trash2, ListTodo } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy } from 'firebase/firestore';
import { cn } from '@/lib/utils';

type Task = {
  id: string;
  text: string;
  completed: boolean;
  course: string;
  priority: 'High' | 'Medium' | 'Low';
};

const priorityColors = {
  High: 'text-red-500 border-red-500/20 bg-red-500/10',
  Medium: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10',
  Low: 'text-green-500 border-green-500/20 bg-green-500/10',
};

export function TodoList() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!user) return;

    const tasksRef = collection(db, 'users', user.uid, 'tasks');
    const q = query(tasksRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedTasks: Task[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedTasks.push({
          id: doc.id,
          text: data.text,
          completed: data.completed || false,
          course: data.course || 'General',
          priority: data.priority || 'Medium',
        });
      });
      setTasks(loadedTasks);
    });

    return () => unsubscribe();
  }, [user]);

  const addTask = async () => {
    if (!user || !newTask.trim()) return;

    const tasksRef = collection(db, 'users', user.uid, 'tasks');
    await addDoc(tasksRef, {
      text: newTask.trim(),
      completed: false,
      course: 'General',
      priority: 'Medium',
      createdAt: serverTimestamp(),
    });

    setNewTask('');
  };

  const toggleTask = async (taskId: string, completed: boolean) => {
    if (!user) return;
    const taskRef = doc(db, 'users', user.uid, 'tasks', taskId);
    await updateDoc(taskRef, { completed: !completed });
  };

  const deleteTask = async (taskId: string) => {
    if (!user) return;
    const taskRef = doc(db, 'users', user.uid, 'tasks', taskId);
    await deleteDoc(taskRef);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return task.priority === filter;
  });

  if (!user) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Todo List</CardTitle>
          <CardDescription>Preview Mode</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <ListTodo className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="font-semibold text-lg text-muted-foreground">Sign in to track tasks</p>
          <p className="text-sm text-muted-foreground mt-1">Create and manage your study tasks and assignments.</p>
          <Button asChild variant="default" className="mt-4">
            <Link href="/auth">Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">Todo List</CardTitle>
        <CardDescription>Track your tasks and assignments</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            className="flex-1"
          />
          <Button onClick={addTask} size="icon">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>

        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tasks</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="High">High Priority</SelectItem>
            <SelectItem value="Medium">Medium Priority</SelectItem>
            <SelectItem value="Low">Low Priority</SelectItem>
          </SelectContent>
        </Select>

        {filteredTasks.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <ListTodo className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">No tasks yet!</p>
          </div>
        ) : (
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-2">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    'flex items-start gap-3 p-3 rounded-lg border transition-all',
                    task.completed && 'opacity-50'
                  )}
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id, task.completed)}
                    className="mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={cn('text-sm font-medium', task.completed && 'line-through')}>
                      {task.text}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={cn('text-xs px-2 py-0.5 rounded border', priorityColors[task.priority])}>
                        {task.priority}
                      </span>
                      {task.course !== 'General' && (
                        <span className="text-xs text-muted-foreground">{task.course}</span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task.id)}
                    className="shrink-0 h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
