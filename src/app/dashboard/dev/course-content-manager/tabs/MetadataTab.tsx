'use client';

import React, { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Save, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { CourseContent } from '@/lib/course-content-schema';
import { updateCourseMetadata } from '../actions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface MetadataTabProps {
  courseId: string;
  content: CourseContent;
  onUpdate: (courseId: string) => void;
}

export function MetadataTab({ courseId, content, onUpdate }: MetadataTabProps) {
  const { toast } = useToast();
  const [isSaving, startSaveTransition] = useTransition();
  
  const [name, setName] = useState(content.metadata.name);
  const [description, setDescription] = useState(content.metadata.description);
  const [examDate, setExamDate] = useState(content.metadata.examDate || '');
  const [examBreakdown, setExamBreakdown] = useState(content.metadata.examBreakdown || []);

  const handleSave = () => {
    startSaveTransition(async () => {
      try {
        await updateCourseMetadata(courseId, {
          ...content.metadata,
          name,
          description,
          examDate,
          examBreakdown,
          updatedAt: new Date().toISOString()
        });
        toast({ title: "Saved!", description: "Course metadata updated successfully." });
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const addExamSection = () => {
    setExamBreakdown([...examBreakdown, { section: '', questions: '', time: '', weight: '' }]);
  };

  const updateExamSection = (index: number, field: string, value: string) => {
    const updated = [...examBreakdown];
    updated[index] = { ...updated[index], [field]: value };
    setExamBreakdown(updated);
  };

  const removeExamSection = (index: number) => {
    setExamBreakdown(examBreakdown.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Update course name, description, and exam details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., AP U.S. History"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course-description">Description</Label>
            <Textarea
              id="course-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief overview of the course..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exam-date">Exam Date</Label>
            <Input
              id="exam-date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              placeholder="e.g., May 15, 2026"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Exam Breakdown</CardTitle>
            <CardDescription>Define the structure of the AP/standardized exam</CardDescription>
          </div>
          <Button onClick={addExamSection} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Section
          </Button>
        </CardHeader>
        <CardContent>
          {examBreakdown.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>No exam sections added yet.</p>
              <p className="text-sm">Click "Add Section" to define the exam structure.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {examBreakdown.map((section, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        value={section.section}
                        onChange={(e) => updateExamSection(index, 'section', e.target.value)}
                        placeholder="e.g., Multiple Choice"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={section.questions}
                        onChange={(e) => updateExamSection(index, 'questions', e.target.value)}
                        placeholder="e.g., 55"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={section.time}
                        onChange={(e) => updateExamSection(index, 'time', e.target.value)}
                        placeholder="e.g., 55 minutes"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={section.weight}
                        onChange={(e) => updateExamSection(index, 'weight', e.target.value)}
                        placeholder="e.g., 40%"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeExamSection(index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={isSaving} size="lg">
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
