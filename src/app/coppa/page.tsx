
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'COPPA Notice',
  description: 'Learn about how Studizilla protects the privacy of children under 13 in accordance with COPPA.',
};

export default function CoppaPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Children's Online Privacy Protection Act (COPPA) Notice</h1>
          <p className="text-muted-foreground">Last updated: June 25, 2024</p>
          
          <p>
            Studizilla is committed to protecting the privacy of young users. This notice is in accordance with the U.S. Children's Online Privacy Protection Act ("COPPA") and outlines our practices with respect to personal information collected from children under the age of 13.
          </p>
          
          <h2 id="collection-of-information">Collection of Information from Children</h2>
          <p>
            Studizilla is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. All users are required to be at least 13 years old to create an account. If we learn that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information as quickly as possible.
          </p>

          <h2 id="parental-rights">Parental Rights</h2>
          <p>
            If you are a parent or guardian and believe that your child under 13 has provided us with personal information without your consent, you may contact us to request that we delete your child's information from our systems. You have the right to:
          </p>
          <ul>
            <li>Review the information your child has provided to us.</li>
            <li>Request the deletion of your child's personal information.</li>
            <li>Refuse to permit further collection or use of your child's information.</li>
          </ul>

          <h2 id="contact-us">How to Contact Us</h2>
          <p>
            To exercise your parental rights or if you have any questions regarding our COPPA compliance, please <Link href="/support">contact our support team</Link>.
          </p>
          <p>
            When you contact us, please be sure to provide your relationship to the child and a way for us to verify your identity. We will respond to your request in a timely manner.
          </p>
        </article>
      </div>
    </div>
  );
}

    