
import Image from 'next/image';
import { Metadata } from 'next';
import { Heart, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission and the team behind Studizilla, a platform built by students, for students.',
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-secondary/50">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 py-20 md:py-32 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            For students, by students.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We were tired of juggling 5 diffrent apps, hitting paywalls just to access basic study tools, and feeling like the resources available weren't truly designed for our generation. So, we built the app we always wished we always had: a single, powerful, and genuinely free platform to help students everywhere succeed.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline mb-12">Meet the Team</h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="https://picsum.photos/seed/neil/400/400"
                alt="Neil Mendpara"
                width={150}
                height={150}
                className="rounded-full mb-4"
                data-ai-hint="man portrait"
              />
              <h3 className="text-xl font-bold">Neil Mendpara</h3>
              <p className="text-primary font-semibold">Lead Programmer</p>
            </div>
          </div>
        </div>
      </section>

      {/* From Epik Math Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <Image
            src="/images/epik.jpg"
            alt="Epik Math Logo"
            width={100}
            height={100}
            className="mx-auto mb-6 rounded-2xl"
          />
          <h2 className="text-3xl font-bold font-headline">In coordination with the creators of Epik Math</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Studizilla is glad to be working with the amazing help from the creators behind Epik Math. We believe in quality over quantity and are committed to providing the same supportive, local service you've come to expect.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline">For Students, By Students</h3>
              <p className="mt-2 text-muted-foreground">
                We understand the pressure. Every feature is designed from a REAL student's perspective to be innovative, effective, and supportive.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline">Education First</h3>
              <p className="mt-2 text-muted-foreground">
                Our mission is to provide high-quality educational tools to everyone, everywhere, completly free without paywalls. Your success is our mission.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline">Community Driven</h3>
              <p className="mt-2 text-muted-foreground">
                Studizilla is built with feedback from our users so we constantly drop updates to meet the real-world needs of not our users, but our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
