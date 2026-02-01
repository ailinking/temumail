import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - TemuMail",
  description: "Read the Terms of Service for using TemuMail's temporary email platform.",
};

export default function TermsOfService() {
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
            Terms of <span className="text-gradient-brand">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
          <p className="text-sm text-muted-foreground">
            Last Updated: February 1, 2026
          </p>
        </div>
      </div>

      <main className="container max-w-4xl py-12 space-y-12">
        {/* Quick Summary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bento-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">Acceptance</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              By using TemuMail, you agree to these terms. If you don't agree, please do not use the service.
            </p>
          </div>
          <div className="bento-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">No Abuse</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Do not use this service for illegal activities, spamming, or harassment.
            </p>
          </div>
          <div className="bento-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold">As-Is Service</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We provide this service "as is" without warranties. Emails may be deleted at any time.
            </p>
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using TemuMail (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Service, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            TemuMail provides users with temporary, disposable email addresses for the purpose of protecting privacy and avoiding spam. You understand and agree that the Service is temporary in nature, and that emails and accounts may be deleted at any time without prior notice. We assume no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
          </p>

          <h2>3. Acceptable Use Policy</h2>
          <p>
            You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the services of others, or the general public.
          </p>
          <p>Specifically, you are prohibited from using the Service to:</p>
          <ul>
            <li>Send spam, unsolicited bulk email, or other forms of unwanted solicitations.</li>
            <li>Engage in illegal activities, including fraud, identity theft, or distribution of malware.</li>
            <li>Harass, threaten, or abuse others.</li>
            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
            <li>Register for accounts on other services in violation of their terms of service.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of TemuMail and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. TemuMail makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content, materials, or products included on this website. You expressly agree that your use of this website is at your sole risk.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall TemuMail, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless TemuMail and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
          </p>

          <h2>8. Modifications to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which TemuMail operates, without regard to its conflict of law provisions.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: 
            <a href="mailto:legal@temumail.com" className="text-primary hover:underline"> legal@temumail.com</a>
          </p>
        </article>
      </main>
    </div>
  );
}
