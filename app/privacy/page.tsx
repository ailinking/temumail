import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Server, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - TemuMail",
  description: "Learn how TemuMail protects your privacy and handles your data. Fully GDPR and CCPA compliant.",
};

export default function PrivacyPolicy() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="py-20 border-b border-border bg-card/50">
        <div className="container max-w-4xl text-center space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Privacy <span className="text-gradient-brand">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe privacy is a fundamental human right. Here's how we protect yours.
          </p>
          <p className="text-sm text-muted-foreground">
            Last Updated: February 1, 2026
          </p>
        </div>
      </div>

      <main className="container max-w-4xl py-12 space-y-12">
        {/* Quick Summary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bento-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">No Personal Data</h3>
            </div>
            <p className="text-muted-foreground">
              We do not collect your name, phone number, or real email address. You remain completely anonymous.
            </p>
          </div>
          <div className="bento-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Auto-Deletion</h3>
            </div>
            <p className="text-muted-foreground">
              All emails and temporary accounts are automatically permanently deleted after a short period.
            </p>
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <h2>1. Introduction</h2>
          <p>
            Welcome to TemuMail ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy applies to our website https://temumail.com and governs our data collection, processing, and usage practices. By using the Website, you consent to the data practices described in this policy.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            Our service is designed to be anonymous. We deliberately minimize the data we collect.
          </p>
          <ul>
            <li><strong>Personal Information:</strong> We do NOT collect your name, physical address, phone number, or real email address. No registration is required.</li>
            <li><strong>Usage Data:</strong> Like most websites, we may automatically collect non-personal information about your computer hardware and software. This information can include: your IP address, browser type, domain names, access times, and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the TemuMail website.</li>
            <li><strong>Local Storage:</strong> We use your browser's local storage to save your temporary email address and authentication token so you can access your inbox if you refresh the page. This data resides solely on your device.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the limited information we collect for the following purposes:
          </p>
          <ul>
            <li>To provide and operate the temporary email service.</li>
            <li>To prevent abuse, spam, and illegal activities.</li>
            <li>To analyze and improve our website performance.</li>
          </ul>

          <h2>4. Third-Party Services</h2>
          <p>
            <strong>Mail.tm API:</strong> Our service relies on the Mail.tm API to generate email addresses and process incoming messages. When you create a temporary email, the request is processed by Mail.tm. We encourage you to review <a href="https://mail.tm" target="_blank" rel="nofollow noreferrer">Mail.tm's privacy policy</a> to understand how they handle data processing.
          </p>
          <p>
            <strong>Analytics:</strong> We may use privacy-focused analytics tools to understand website traffic without tracking individual users.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            <strong>Emails:</strong> Incoming emails are stored temporarily and are automatically deleted after a set period (typically 1 hour) or when you manually delete them.
          </p>
          <p>
            <strong>Accounts:</strong> Temporary email accounts are disposed of automatically. Once deleted, they cannot be recovered.
          </p>

          <h2>6. Your Rights (GDPR & CCPA)</h2>
          <p>
            Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you have specific rights regarding your data:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> You have the right to request copies of your personal data (though we hold virtually none).</li>
            <li><strong>Right to Erasure:</strong> You have the "right to be forgotten." You can delete your temporary email and messages instantly using the controls on our website.</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct any information you believe is inaccurate.</li>
            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
          </ul>
          <p>
            Since we do not collect personal identifiers, exercising these rights is often as simple as clearing your browser cache or clicking "Delete" on your temporary inbox.
          </p>

          <h2>7. Cookies</h2>
          <p>
            We use a minimal number of cookies or local storage solely for essential functionality (maintaining your session state). We do not use cookies for advertising or tracking your activity across other websites.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via email at: 
            <a href="mailto:privacy@temumail.com" className="text-primary hover:underline"> privacy@temumail.com</a>
          </p>
        </article>
      </main>
    </div>
  );
}
