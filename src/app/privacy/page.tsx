
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Studizilla collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: July 17, 2024</p>
          
          <p>
            Welcome to Studizilla ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
          </p>
          
          <h2 id="information-we-collect">Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
          
          <h3>Personal Data</h3>
          <p>
            Personally identifiable information, such as your name, username, and email address, that you voluntarily give to us when you register with the Application. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Application.
          </p>

          <h3>User-Generated Content</h3>
          <p>
            We collect the data you provide when you use our services. This includes content you create, such as flashcard decks, notes, custom themes, calendar events, daily goals, and other study materials. This data is stored securely and is used to provide you with the core functionality of Studizilla.
          </p>

          <h3>Usage and Technical Data</h3>
          <p>
            Information our servers automatically collect when you access the Application, such as your IP address, browser type, operating system, and access times. We use Google Analytics to collect aggregated, anonymized data about which pages you visit and which features you use. This helps us understand usage patterns and improve our services.
          </p>
          
          <h3>Third-Party Data</h3>
          <p>
            We use Firebase for authentication and database services. When you sign up or log in using an email/password or a third-party provider like Google, Firebase handles the authentication process. We receive basic profile information (like your name and email) from these services as permitted by you and the provider's policies.
          </p>

          <h2 id="how-we-use-your-information">How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Personalize your user experience, such as saving your theme and accessibility preferences across devices.</li>
            <li>Operate and maintain our AI-powered tools, like the Notes-to-Flashcards generator and the "Deep Dive" smart grader.</li>
            <li>Track your progress in courses and study activities.</li>
            <li>Display personalized advertisements to keep our core services free.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
            <li>Respond to your support requests and resolve disputes.</li>
            <li>Ensure the security and operational functionality of our services.</li>
          </ul>

          <h2 id="disclosure-of-your-information">Disclosure of Your Information</h2>
          <p>We do not sell, trade, or rent your personally identifiable information to others. We may share information we have collected about you in certain situations:</p>
          <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We use Firebase (a Google service) for backend infrastructure, including database storage, authentication, and hosting. Your data is stored on Firebase's servers and is subject to their privacy policies.</li>
              <li><strong>Advertising:</strong> We may share aggregated and anonymized usage data with third-party advertising partners to serve personalized ads. This data does not include personally identifiable information.</li>
          </ul>

          <h2 id="data-security">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2 id="your-rights">Your Rights and Data Control</h2>
          <p>You have the right to access, update, or delete your personal information. You can manage your account information directly within the application's Account Settings page. You can also request a full export of your data or the complete deletion of your account from the same page.</p>

          <h2 id="childrens-privacy">Children's Privacy</h2>
          <p>
            Our service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our files as soon as possible. Please see our <Link href="/coppa">COPPA Notice</Link> for more information.
          </p>
          
          <h2 id="changes-to-this-policy">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 id="contact-us">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please <Link href="/support">contact our support team</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}

    