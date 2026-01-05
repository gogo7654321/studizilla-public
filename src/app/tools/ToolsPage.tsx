
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, BookCheck, TestTube, Languages, ArrowRight, Map } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AceMascot } from "@/components/AceMascot";

const tools = [
  {
    title: "Notes-to-Flashcards Generator",
    description: "Turn your lecture notes or textbook chapters into a ready-to-study flashcard deck in seconds.",
    icon: BrainCircuit,
    href: "/resources?tab=flashcards",
    status: "active",
  },
  {
    title: "AI Essay Grader",
    description: "Get instant, detailed feedback on your practice essays, aligned with AP® rubrics.",
    icon: BookCheck,
    href: "/tools/essay-grader",
    status: "soon",
  },
  {
    title: "Practice Test Generator",
    description: "Create custom quizzes and full-length practice tests from your flashcard decks or specific topics.",
    icon: TestTube,
    href: "/tools/practice-test",
    status: "active",
  },
   {
    title: "Explain This!",
    description: "Get simple explanations for complex topics and concepts from Ace, your AI study assistant.",
    icon: AceMascot,
    href: "/tools/explain-this",
    status: "active",
  },
];

export default function ToolsHubPage() {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
      {tools.map((tool) => (
        <Card key={tool.title} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
                <tool.icon className="h-10 w-10 text-primary" />
                <CardTitle>{tool.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{tool.description}</CardDescription>
          </CardContent>
          <CardContent>
            <Button asChild disabled={tool.status === 'soon'} className="w-full">
                <Link href={tool.href}>
                    {tool.status === 'soon' ? 'Coming Soon' : 'Launch Tool'}
                    {tool.status !== 'soon' && <ArrowRight className="ml-2 h-4 w-4" />}
                </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
