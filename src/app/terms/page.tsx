
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for Studizilla.',
};

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: July 17, 2024</p>
          
          <h2 id="agreement">1. Agreement to Terms</h2>
          <p>
            By accessing or using our application, Studizilla (the "Service"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>
          
          <h2 id="accounts">2. Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
          </p>

          <h2 id="user-content">3. User-Generated Content</h2>
          <p>
            Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). This includes, but is not limited to, flashcard decks, notes, and profile information. You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness. By posting Content, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit.
          </p>
          
          <h2 id="prohibited">4. Prohibited Activities</h2>
          <p>
            You agree not to use the Service to: (i) upload, post, or transmit any Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable; (ii) impersonate any person or entity; (iii) engage in any automated use of the system, such as using scripts to add friends or send comments or messages; (iv) interfere with, disrupt, or create an undue burden on the Service or the networks or services connected to the Service.
          </p>
          
          <h2 id="ip">5. Intellectual Property</h2>
          <p>
            The Service and all its original content (excluding Content provided by users), features, and functionality, including but not limited to the names "Studizilla", "Flashcards", the logo, and all related software and technology, are and will remain the exclusive property of Studizilla and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Studizilla.
          </p>

          <h2 id="ads">6. Advertisements</h2>
          <p>
            As part of our commitment to providing a free service, we may display advertisements from third parties on the Service. These advertisements may be targeted to the content or information on the Service, queries made through the Service, or other information. The types and extent of advertising by Studizilla on the Service are subject to change. In consideration for Studizilla granting you access to and use of the Service, you agree that Studizilla and its third-party providers and partners may place such advertising on the Service.
          </p>
          
          <h2 id="termination">7. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so through the account settings page.
          </p>
          
          <h2 id="disclaimer">8. Disclaimer of Warranties</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS IS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
          
          <h2 id="liability">9. Limitation of Liability</h2>
          <p>
            In no event shall Studizilla, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 id="governing-law">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2 id="contact">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please <Link href="/support">contact our support team</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}
