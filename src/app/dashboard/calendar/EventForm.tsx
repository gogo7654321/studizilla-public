'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { format as formatDate } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

const eventFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.date({ required_error: 'Date is required' }),
  isAllDay: z.boolean().default(false),
  hour: z.string().optional(),
  minute: z.string().optional(),
  period: z.enum(['AM', 'PM']).optional(),
  color: z.enum(['blue', 'green', 'red', 'purple', 'orange']),
  location: z.string().optional(),
  notes: z.string().optional(),
  recurrenceType: z.enum(['none', 'daily', 'weekly', 'monthly', 'yearly', 'custom']),
  recurrenceInterval: z.string().optional(),
  recurrenceDays: z.array(z.number()).optional(),
}).refine(data => {
    if (!data.isAllDay && (!data.hour || !data.minute || !data.period)) {
        return false;
    }
    return true;
}, {
    message: "Time is required (or select All Day)",
    path: ['hour'],
}).refine(data => {
    if (data.recurrenceType === 'custom' && (!data.recurrenceInterval || parseInt(data.recurrenceInterval, 10) < 1)) {
        return false;
    }
    return true;
}, {
    message: "Interval must be at least 1",
    path: ['recurrenceInterval'],
}).refine(data => {
    if (data.recurrenceType === 'custom' && (!data.recurrenceDays || data.recurrenceDays.length === 0)) {
        return false;
    }
    return true;
}, {
    message: 'Please select at least one day to repeat',
    path: ['recurrenceDays'],
});

export type EventFormData = z.infer<typeof eventFormSchema>;

type RecurrenceRule = {
    type: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';
    interval?: number;
    days?: number[];
};

type CalendarEvent = {
  id: string;
  title: string;
  date: Date;
  time: string;
  color: 'blue' | 'green' | 'red' | 'purple' | 'orange';
  location?: string;
  notes?: string;
  recurrenceRule?: RecurrenceRule;
  exceptions?: Timestamp[];
  googleEventId?: string;
};

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));
const periods = ['AM', 'PM'];

const colorMap = {
  blue: { bg: 'bg-blue-500', name: 'Due Date' },
  green: { bg: 'bg-green-500', name: 'Extracurricular' },
  red: { bg: 'bg-red-500', name: 'Exam' },
  purple: { bg: 'bg-purple-500', name: 'Meeting' },
  orange: { bg: 'bg-orange-500', name: 'Personal' },
};
const colorOptions = Object.entries(colorMap).map(([key, {name}]) => ({ value: key as keyof typeof colorMap, label: name}));

const RecurrenceFields = ({ form }: { form: any }) => {
    const recurrenceType = form.watch('recurrenceType');
    
    if (recurrenceType !== 'custom') return null;

    const WeekdayButton = ({ day, index }: { day: string; index: number }) => {
        const days = form.watch('recurrenceDays') || [];
        const isSelected = days.includes(index);
        
        const toggleDay = () => {
            const currentDays = [...days];
            if (isSelected) {
                form.setValue('recurrenceDays', currentDays.filter((d: number) => d !== index));
            } else {
                form.setValue('recurrenceDays', [...currentDays, index]);
            }
        };
        
        return (
            <Button
                type="button"
                variant={isSelected ? 'default' : 'outline'}
                onClick={toggleDay}
                className="h-8 w-8 p-0 rounded-full"
            >
                {day}
            </Button>
        );
    };

    return (
        <div className="p-4 border rounded-lg bg-secondary/50 space-y-4">
            <div className="flex items-center gap-2">
                <Label>Repeat every</Label>
                <FormField
                    control={form.control}
                    name="recurrenceInterval"
                    render={({ field }) => (
                        <Input {...field} type="number" min="1" className="w-20" />
                    )}
                />
                <Label>week(s) on:</Label>
            </div>
             <FormField
                control={form.control}
                name="recurrenceDays"
                render={() => (
                    <FormItem>
                         <div className="flex justify-around">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                                <WeekdayButton key={index} day={day} index={index} />
                            ))}
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

interface EventFormBodyProps {
  form: any;
}

export function EventFormBody({ form }: EventFormBodyProps) {
  return (
    <div className="space-y-4">
        <div>
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" {...form.register('title')} />
            {form.formState.errors.title && <p className="text-red-500 text-sm mt-1">{form.formState.errors.title.message}</p>}
        </div>
        <div>
            <Label>Date</Label>
            <Controller name="date" control={form.control} render={({ field }) => (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                            {field.value ? formatDate(field.value, 'PPP') : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start"><CalendarIcon mode="single" selected={field.value} onSelect={field.onChange} initialFocus /></PopoverContent>
                </Popover>
            )} />
            {form.formState.errors.date && <p className="text-red-500 text-sm mt-1">{form.formState.errors.date.message}</p>}
        </div>
        <div>
            <div className="flex items-center justify-between mb-2">
                <Label>Time</Label>
                <Controller name="isAllDay" control={form.control} render={({ field }) => (
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300"
                        />
                        <span className="text-sm">All Day</span>
                    </label>
                )} />
            </div>
            {!form.watch('isAllDay') && (
                <div className="grid grid-cols-3 gap-2">
                    <Controller name="hour" control={form.control} render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ''}>
                            <SelectTrigger><SelectValue placeholder="Hr" /></SelectTrigger>
                            <SelectContent>{hours.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}</SelectContent>
                        </Select>
                    )} />
                    <Controller name="minute" control={form.control} render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ''}>
                            <SelectTrigger><SelectValue placeholder="Min" /></SelectTrigger>
                            <SelectContent>{minutes.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}</SelectContent>
                        </Select>
                    )} />
                    <Controller name="period" control={form.control} render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ''}>
                            <SelectTrigger><SelectValue placeholder="AM/PM" /></SelectTrigger>
                            <SelectContent>{periods.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                        </Select>
                    )} />
                </div>
            )}
            {form.formState.errors.hour && <p className="text-red-500 text-sm mt-1">{form.formState.errors.hour.message}</p>}
        </div>
        <div>
            <Label>Recurring</Label>
             <FormField
                control={form.control}
                name="recurrenceType"
                render={({ field }) => (
                    <FormItem>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                            <SelectContent>
                                <SelectItem value="none">Does not repeat</SelectItem>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="yearly">Yearly</SelectItem>
                                <SelectItem value="custom">Custom...</SelectItem>
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />
        </div>
        <RecurrenceFields form={form} />
        <div>
            <Label htmlFor="color">Type</Label>
            <Controller name="color" control={form.control} render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger>
                    <SelectContent>
                        {colorOptions.map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>
                                <div className="flex items-center gap-2">
                                    <span className={`h-2 w-2 rounded-full ${colorMap[opt.value].bg}`}></span>
                                    <span>{opt.label}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )} />
        </div>
        <div>
            <Label htmlFor="location">Location (Optional)</Label>
            <Input id="location" {...form.register('location')} placeholder="e.g. Library, Room 201" />
        </div>
        <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea id="notes" {...form.register('notes')} placeholder="e.g. Bring textbook" />
        </div>
    </div>
  );
}

export { eventFormSchema };
export type { CalendarEvent, RecurrenceRule };
