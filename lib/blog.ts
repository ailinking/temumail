export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-disposable-email',
    title: 'What is a Disposable Email Address and Why You Need One?',
    excerpt: 'Tired of spam? Learn how disposable email addresses work, why they are safe, and how they can protect your primary inbox from clutter and data breaches.',
    date: '2026-02-01',
    author: 'TemuMail Team',
    content: `
      <h2>The Inbox Problem</h2>
      <p>We've all been there. You want to read a single article, download a whitepaper, or get a 10% discount code. But there's a catch: you have to hand over your email address. Fast forward a week, and your inbox is flooded with newsletters you never asked for and <a href="/blog/how-to-avoid-spam-guide" class="text-blue-600 hover:underline">marketing spam</a> that just won't quit.</p>        

      <p>This is where a <strong>disposable email address (DEA)</strong> comes in. Think of it as a burner phone for the internet.</p>

      <h2>What Exactly is a Disposable Email?</h2>
      <p>A disposable email is a temporary, short-lived email address that you can generate instantly. It allows you to receive emailsverification codes, download links, sign-up confirmationswithout revealing your actual identity or your permanent email address.</p>

      <p>Unlike your Gmail or Outlook account, which you might keep for decades, a disposable address is designed to be discarded. Once you're done with it, you walk away. No unsubscribing, no filtering, no stress.</p>

      <h2>3 Key Reasons to Start Using One Today</h2>

      <h3>1. Ironclad Privacy Protection</h3>
      <p>Every time you share your real email, you're leaving a digital footprint. Data brokers aggregate this info to build a profile on you. By using a <a href="/blog/top-ways-protect-privacy-online" class="text-blue-600 hover:underline">temporary email</a>, you break that link. You get the service you need without trading your privacy for it.</p>

      <h3>2. The Ultimate Spam Shield</h3>
      <p>If a temporary email address gets sold to a spam list (which happens more often than you think), who cares? That inbox will self-destruct anyway. Your real inbox remains a sanctuary for important personal and work communication.</p>

      <h3>3. Security Against Data Breaches</h3>
      <p>Major websites get breached all the time. If you use a unique temporary email for a one-off sign-up and that site gets hacked, your primary email isn't compromised. It's a simple yet effective layer of security.</p>

      <h2>When Should You Use It?</h2>
      <ul>
        <li><strong>Testing new apps:</strong> Don't want to commit? Use a temp mail.</li>
        <li><strong>Public Wi-Fi sign-ups:</strong> Airports and cafes often demand an email.</li>
        <li><strong>Online purchases:</strong> For one-time buys from stores you might not visit again.</li>
        <li><strong>Downloading resources:</strong> eBooks, PDFs, and trial software.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Your email address is your digital ID card. Stop handing it out to strangers. With tools like <strong><a href="/" class="text-blue-600 hover:underline">TemuMail</a></strong>, you can reclaim control over your inbox and your privacy. Its free, instant, and requires zero commitment. Give it a try for your next sign-up!</p>
    `
  },
  {
    slug: 'top-ways-protect-privacy-online',
    title: 'Top 5 Ways to Protect Your Privacy Online in 2026',
    excerpt: 'Digital surveillance is at an all-time high. From VPNs to temporary emails, here are the 5 most effective strategies to secure your online presence this year.',
    date: '2026-02-05',
    author: 'TemuMail Team',
    content: `
      <p>Privacy isn't about having something to hide; it's about having the right to control your own information. In 2026, with AI-driven tracking and aggressive data mining, staying private requires a proactive approach. Here are the five essential tools and habits you need.</p>

      <h2>1. Use a Reputable VPN (and turn it on!)</h2>
      <p>A Virtual Private Network (VPN) creates an encrypted tunnel for your internet traffic. It masks your IP address, making it much harder for ISPs, advertisers, and hackers to track your location or browsing habits. <em>Pro tip: Avoid "free" VPNs that often sell your data to cover costs.</em></p>

      <h2>2. Stop Using Your Real Email for Everything</h2>
      <p>We cannot stress this enough: your email is the skeleton key to your digital life. Using a service like <strong><a href="/" class="text-blue-600 hover:underline">TemuMail</a></strong> for non-essential sign-ups is one of the easiest ways to reduce your digital footprint. It compartmentalizes your online activity and keeps your main identity safe.</p>

      <h2>3. Embrace Two-Factor Authentication (2FA)</h2>
      <p>Passwords are easily stolen. 2FA adds a second checkusually a code from an app or a hardware key. Even if a hacker gets your password, they can't get in without that second factor. Enable it everywhere: email, banking, and social media.</p>

      <h2>4. Audit Your App Permissions</h2>
      <p>Does that flashlight app really need access to your contacts and location? Probably not. Regularly check the privacy settings on your phone. Revoke access for apps that ask for more data than they need to function.</p>

      <h2>5. Switch to Privacy-Focused Browsers</h2>
      <p>Chrome is popular, but it's built by an advertising company. Consider switching to browsers like Firefox, Brave or DuckDuckGo, which block third-party trackers by default. Combined with a <a href="/blog/what-is-disposable-email" class="text-blue-600 hover:underline">privacy-focused email strategy</a>, this makes a massive difference in how much data is collected about you daily.</p>

      <h2>The Bottom Line</h2>
      <p>Perfect privacy is impossible, but <em>better</em> privacy is easy. You don't need to go off the grid. Just by implementing these five steps, you'll be ahead of 99% of internet users in protecting your digital self.</p>
    `
  },
  {
    slug: 'how-to-avoid-spam-guide',
    title: 'How to Avoid Spam: The Ultimate Guide to a Clean Inbox',
    excerpt: 'Drowning in junk mail? Reclaim your inbox with these proven strategies for blocking, unsubscribing, and preventing spam before it starts.',     
    date: '2026-02-12',
    author: 'TemuMail Team',
    content: `
      <p>Spam isn't just annoying; it's a productivity killer and a security risk. Phishing scams often hide in the clutter of "special offers." If you're spending more time deleting emails than reading them, it's time for an intervention.</p>

      <h2>The Golden Rule: Prevention is Better than Cure</h2>
      <p>The best way to delete spam is to never receive it in the first place. Once your email is on a "list," it's sold and resold. The floodgates open. Here is how to keep them closed.</p>

      <h3>Strategy 1: The "Plus" Trick</h3>
      <p>If you use Gmail, you can add a plus sign and a tag to your address (e.g., <code>yourname+shopping@gmail.com</code>). This allows you to filter incoming mail and see exactly which company sold your data. If you start getting spam at that specific address, you know who to blameand you can block it easily.</p>

      <h3>Strategy 2: Use Temporary Email Services</h3>
      <p>For one-time downloads, forum registrations, or Wi-Fi access, never use your real address. Use <strong><a href="/" class="text-blue-600 hover:underline">TemuMail</a></strong>. It takes seconds to generate an address that works perfectly for verification and then disappears. No spam can follow you home.</p>

      <h3>Strategy 3: Be Careful with "Unsubscribe"</h3>
      <p>This sounds counter-intuitive, but be careful. For legitimate companies (Amazon, Netflix), the unsubscribe link works. But for shady spammers, clicking "unsubscribe" just confirms that your email is active and monitored. This often leads to <em>more</em> spam. If the sender looks suspicious, just mark it as Spam/Junk and block the sender.</p>

      <h3>Strategy 4: Disable Image Loading</h3>
      <p>Many spam emails contain tiny, invisible tracking pixels. When your email client loads the images, it pings the spammer's server, telling them "Hey, this person opened the email!" Go to your email settings and turn off "Always load external images."</p>

      <h2>Cleaning Up the Mess</h2>
      <p>If your inbox is already a disaster zone:</p>
      <ul>
        <li><strong>Mass Unsubscribe:</strong> Use tools (or just dedicate an hour) to unsubscribe from legitimate newsletters you no longer read.</li>       
        <li><strong>Create Filters:</strong> Set up rules to automatically move emails containing words like "buy now," "viagra," or "winner" directly to the trash.</li>
        <li><strong>The Nuclear Option:</strong> If it's truly hopeless, start fresh. Create a new email for personal contacts only, and keep the old one as a "junk" drawer.</li>
      </ul>
      
      <p>Want to learn more about the mechanics of disposable emails? Check out our guide on <a href="/blog/what-is-disposable-email" class="text-blue-600 hover:underline">what disposable emails are</a>.</p>
    `
  },
  {
    slug: 'temp-email-for-developers',
    title: 'Temporary Email for Developers: Testing Auth Flows Like a Pro',    
    excerpt: 'QA testing for sign-up flows can be a pain. Discover why developers prefer temporary email APIs for testing user registration, password resets, and email notifications.',
    date: '2026-02-19',
    author: 'TemuMail Team',
    content: `
      <p>As a developer, you know the struggle. You're building a new user authentication flow. You need to test the sign-up process, the "verify your email" link, the "forgot password" reset, and the transactional welcome email.</p>    

      <p>You quickly run out of personal email aliases. You start mashing the keyboard: <code>test1@test.com</code>, <code>test2@test.com</code>. But you need to actually <em>receive</em> the emails to check the links. What do you do?</p>

      <h2>The Wrong Way: Manual Aliases</h2>
      <p>Creating manual aliases (like <code>dev+1@company.com</code>) works for a while, but it clutters your work inbox. Plus, it's slow. If you are running automated integration tests (with Selenium, Cypress, or Playwright), you can't rely on manual inbox checking.</p>

      <h2>The Right Way: Disposable Email APIs</h2>
      <p>This is the secret weapon of efficient QA teams. Using a temporary email service allows you to:</p>

      <ul>
        <li><strong>Generate unique users instantly:</strong> Spin up a fresh email for every single test case.</li>
        <li><strong>Verify delivery:</strong> Check that the email actually arrived.</li>
        <li><strong>Parse content:</strong> Automate the extraction of OTP codes or verification URLs from the email body.</li>
        <li><strong>Clean slate:</strong> No cleanup required. The emails vanish after the test.</li>
      </ul>

      <h2>Testing Scenarios</h2>
      <h3>1. The "Happy Path" Sign Up</h3>
      <p>Generate a temp mail, register, wait for the webhook/email, click the link. Success.</p>

      <h3>2. Duplicate Account Handling</h3>
      <p>Use the same temp email twice. Does your app correctly flag the user as "already exists"?</p>

      <h3>3. Invalid Formats</h3>
      <p>While temp mails are valid, you can use them to test edge cases in your input validation logic.</p>

      <h2>Why TemuMail?</h2>
      <p>While we are currently a frontend tool for users, the underlying technology (Mail.tm) offers a robust API that developers love. It allows for programmatic access to temporary inboxes, making it a perfect candidate for your CI/CD pipeline.</p>

      <p>Stop cluttering your database with fake users linked to your real email. Start <a href="/blog/temp-email-for-developers" class="text-blue-600 hover:underline">testing smarter</a> with <a href="/" class="text-blue-600 hover:underline">TemuMail</a>.</p>
    `
  },
  {
    slug: 'temporary-email-vs-spam-filters',
    title: 'Temporary Email vs. Spam Filters: How They Work',
    excerpt: 'Ever wonder why some emails land in your inbox and others in spam? Learn the mechanics of spam filters and how temporary emails navigate this complex landscape.',
    date: '2026-02-26',
    author: 'TemuMail Team',
    content: `
      <p>You hit "send," and... silence. Your important email is lost in the void of the recipient's Spam folder. It's frustrating. But when you sign up for a service using a temporary email, the verification code usually arrives instantly. Why is that?</p>

      <h2>The Anatomy of a Spam Filter</h2>
      <p>Spam filters are the bouncers of the email world. They analyze incoming messages based on thousands of factors:</p>
      <ul>
        <li><strong>Sender Reputation:</strong> Is the IP address blacklisted?</li>
        <li><strong>Content Analysis:</strong> Does the email contain suspicious words like "FREE," "WINNER," or "URGENT"?</li>
        <li><strong>Authentication:</strong> Does the email have valid SPF, DKIM, and DMARC records?</li>
      </ul>

      <h2>Why Temp Mails Often "Beat" the System</h2>
      <p>It's not magic; it's hygiene. Services like <strong><a href="/" class="text-blue-600 hover:underline">TemuMail</a></strong> (powered by Mail.tm) maintain high-quality receiving servers.</p>

      <p>Because these inboxes are strictly for <em>receiving</em>, they don't get flagged for sending spam. When you use a temp mail to sign up for a newsletter or an app, you are essentially providing a clean, valid destination. The sender's email server sees a valid MX record and delivers the mail.</p>

      <h2>The "Grey-listing" Challenge</h2>
      <p>Some advanced filters use "grey-listing." They temporarily reject an email from an unknown sender, asking them to try again in 5 minutes. Legitimate servers (like Gmail or Outlook) will retry. Spam bots usually give up.</p>
      <p>Good temporary email services are configured to handle these retries seamlessly, ensuring you still get your OTP code, even if it takes an extra minute.</p>

      <h2>Key Takeaway</h2>
      <p>Understanding how email delivery works helps you appreciate the engineering behind a simple disposable inbox. It's a constant game of cat and mouse, but for now, tools like TemuMail provide a reliable way to ensure the emails you <em>want</em> (like verification codes) actually reach you.</p>
      <p>Want to dive deeper into protecting your primary inbox? Read our guide on <a href="/blog/how-to-avoid-spam-guide" class="text-blue-600 hover:underline">avoiding spam</a>.</p>
    `
  },
  {
    slug: '10-minute-mail-alternatives',
    title: '10 Minute Mail Alternatives: Why TemuMail is Better',
    excerpt: 'Looking for a 10 Minute Mail alternative? Compare features, speed, and UI to see why TemuMail is the modern choice for disposable email addresses.',
    date: '2026-03-05',
    author: 'TemuMail Team',
    content: `
      <p>"10 Minute Mail" is a classic term in the disposable email world. It's the Kleenex of temp mail. But the internet has evolved, and so have the tools we use. If you're still using clunky, ad-filled sites from 2010, it's time for an upgrade.</p>

      <h2>The Problem with Old-School Temp Mails</h2>
      <p>Many legacy disposable email sites suffer from:</p>
      <ul>
        <li><strong>Aggressive Ads:</strong> Pop-ups that cover the entire screen.</li>
        <li><strong>Slow Refresh Rates:</strong> Waiting 30+ seconds for a code to appear.</li>
        <li><strong>Non-Mobile Friendly:</strong> Trying to copy an email address on a phone is a nightmare.</li>
      </ul>

      <h2>Enter TemuMail: The Modern Alternative</h2>
      <p>We built <strong><a href="/" class="text-blue-600 hover:underline">TemuMail</a></strong> to solve these exact frustrations. Here is how we stack up:</p>

      <h3>1. Clean, Ad-Free Experience</h3>
      <p>We believe in a user-first approach. No flashing banners, no malware risks. Just a clean interface that gives you an email address instantly.</p>

      <h3>2. Instant WebSocket Updates</h3>
      <p>We don't make you click "Refresh." Our technology pushes the email to your screen the millisecond it hits our server. It feels like magic.</p>

      <h3>3. Persistent (Until You Delete)</h3>
      <p>Unlike "10 Minute Mail" which strictly enforces a timer, TemuMail keeps your session alive as long as you have the tab open. Need more time to verify? No problem. We won't delete the address while you're still using it.</p>

      <h2>Conclusion</h2>
      <p>Nostalgia is great for music, but not for software. Switch to a modern, fast, and secure disposable email service. Try <a href="/" class="text-blue-600 hover:underline">TemuMail</a> today and feel the difference.</p>
    `
  },
  {
    slug: 'can-disposable-emails-be-traced',
    title: 'Can Disposable Emails Be Traced? The Truth About Anonymity',
    excerpt: 'Are temporary emails truly anonymous? We break down IP tracking, browser fingerprinting, and what you need to know to stay truly private online.',
    date: '2026-03-12',
    author: 'TemuMail Team',
    content: `
      <p>You use a disposable email to stay anonymous. But how "anonymous" are you, really? It's a common question with a nuanced answer. Let's separate the Hollywood myths from the technical reality.</p>

      <h2>The Email Address Itself: Untraceable</h2>
      <p>If you generate an email like <code>x7z9@temumail.com</code>, that address has no link to your real identity. It requires no phone number, no backup email, and no credit card. In isolation, it is completely anonymous.</p>

      <h2>The Weak Link: Your Connection</h2>
      <p>However, the <em>website</em> you are visiting (and even the disposable email provider itself) can see your <strong>IP Address</strong>. If you are sitting at home without a VPN, your ISP knows you are visiting TemuMail, and the site you sign up for knows your approximate location.</p>

      <h2>How to Achieve True Anonymity</h2>
      <p>To be virtually untraceable, you need to layer your defenses:</p>
      <ol>
        <li><strong>Use a VPN:</strong> As we discussed in our <a href="/blog/top-ways-protect-privacy-online" class="text-blue-600 hover:underline">privacy guide</a>, a VPN masks your IP address.</li>
        <li><strong>Use a Privacy Browser:</strong> Tor or Brave helps prevent "browser fingerprinting" (tracking you based on your screen resolution and installed fonts).</li>
        <li><strong>Use TemuMail:</strong> Finally, use a disposable email to decouple your online activity from your permanent digital identity.</li>
      </ol>

      <h2>The Verdict</h2>
      <p>A disposable email is a shield, not an invisibility cloak. It protects you from spam and data breaches perfectly. But for total anonymity, it must be part of a broader security strategy.</p>
    `
  },
  {
    slug: 'student-discounts-without-spam',
    title: 'How to Get Student Discounts Without Spamming Your School Email',
    excerpt: 'Want that Amazon Prime Student trial or 50% off Spotify? Here is how to sign up for student deals without flooding your .edu inbox with marketing junk.',
    date: '2026-03-19',
    author: 'TemuMail Team',
    content: `
      <p>Being a student is expensive. Student discounts are a lifesaver. From Amazon Prime to Spotify and Adobe Creative Cloud, that <code>.edu</code> email address is like a golden ticket.</p>

      <p>But there's a downside: once you hand over your school email to these companies, they never stop emailing you. Suddenly, your important class notifications are buried under "Back to School Sale" blasts.</p>

      <h2>The Hybrid Strategy</h2>
      <p>Most student verifications work in two ways:</p>
      <ol>
        <li><strong>Direct .edu verification:</strong> You must click a link sent to your school email.</li>
        <li><strong>Third-party verification (SheerID/UNiDAYS):</strong> You upload a schedule or ID card.</li>
      </ol>

      <h2>When to Use TemuMail</h2>
      <p>For the <strong>account creation</strong> itself, use a <a href="/" class="text-blue-600 hover:underline">TemuMail address</a>. This becomes your login and the destination for all marketing emails.</p>
      <p>Only provide your <code>.edu</code> email when specifically asked for <em>verification of status</em>. Often, services allow you to have a different "primary" email for communication than the one used for eligibility checking.</p>

      <h2>Steps to Keep Your Inbox Clean</h2>
      <ul>
        <li><strong>Step 1:</strong> Go to the service (e.g., Spotify Student).</li>
        <li><strong>Step 2:</strong> When asked to "Create an Account," use a generated address from TemuMail.</li>
        <li><strong>Step 3:</strong> When asked to "Verify Student Status," enter your school details or upload your ID.</li>
        <li><strong>Step 4:</strong> Enjoy the discount without the clutter!</li>
      </ul>

      <p>Your school email is for homework and networking, not for coupon codes. Keep it professional.</p>
    `
  },
  {
    slug: 'why-free-email-is-not-free',
    title: 'Why "Free" Email Services Are Costing You More Than You Think',
    excerpt: 'You are not paying with money, so what are you paying with? We explore the hidden data economy behind free email providers and why privacy is worth the switch.',
    date: '2026-03-26',
    author: 'TemuMail Team',
    content: `
      <p>There is an old saying in the tech world: "If you are not paying for the product, you are the product." Nowhere is this more true than with free email services.</p>

      <h2>The Data Mining Business Model</h2>
      <p>Major email providers offer gigabytes of storage for free. How? Because that storage is a honey pot for data. Algorithms scan your receipts, your travel confirmations, and your subscriptions to build a comprehensive profile of your spending habits.</p>

      <h2>Targeted Advertising</h2>
      <p>Have you ever emailed a friend about hiking boots, only to see ads for hiking boots on Instagram an hour later? That is not a coincidence. Your email data is part of a massive ad-tech ecosystem.</p>

      <h2>The Alternative: Privacy-First Email</h2>
      <p>While you might need a permanent address for banking, you do not need to feed the data machine for every little sign-up. Using <a href="/" class="text-blue-600 hover:underline">TemuMail</a> for newsletters, potential purchases, and inquiries keeps that data out of your main profile. It is a simple way to opt-out of the surveillance economy.</p>
    `
  },
  {
    slug: 'manage-online-subscriptions',
    title: 'The Ultimate Guide to Managing Online Subscriptions Without Spam',
    excerpt: 'Free trials are great until you forget to cancel. Learn how to use disposable emails to manage subscriptions and avoid surprise charges.',
    date: '2026-04-02',
    author: 'TemuMail Team',
    content: `
      <p>We all love a free trial. 7 days of premium streaming? Yes, please. But we all hate the aftermath: the impossible cancellation process and the endless "We miss you" emails.</p>

      <h2>The "Burner" Strategy</h2>
      <p>Next time you sign up for a trial, use a <a href="/" class="text-blue-600 hover:underline">temporary email address</a>. This serves two purposes:</p>
      <ol>
        <li><strong>Inbox Hygiene:</strong> When the trial ends, the marketing spam hits a dead end.</li>
        <li><strong>Account Separation:</strong> It forces you to make a conscious decision to upgrade. You can't just "let it roll over" if you lose access to the email associated with the account (though be carefulmake sure you cancel the payment method!).</li>
      </ol>

      <h2>Organizing Your Digital Life</h2>
      <p>Treat your primary email like a vault. Only trusted entities get in. Everything elsetrials, one-time tools, questionable forumsgets a disposable key. This simple habit keeps your digital life organized and stress-free.</p>
    `
  },
  {
    slug: 'spot-phishing-emails',
    title: 'How to Spot Phishing Emails Before You Click',
    excerpt: 'Phishing attacks are getting smarter. AI-generated emails can fool even the experts. Here are the red flags you need to watch out for in 2026.',
    date: '2026-04-09',
    author: 'TemuMail Team',
    content: `
      <p>Phishing isn't just about Nigerian princes anymore. Modern attacks look like legitimate emails from Netflix, your bank, or your boss. In 2026, AI tools allow scammers to write perfect, personalized copy.</p>

      <h2>Red Flag 1: The "Urgency" Trap</h2>
      <p>Scammers want you to panic. "Your account will be suspended in 24 hours!" "Unauthorized login detected!" If an email tries to rush you, pause. Take a breath. Verify independently.</p>

      <h2>Red Flag 2: The "Almost" URL</h2>
      <p>Hover over the link (don't click!). Does it say <code>netflix.com</code> or <code>netflix-support-verify.com</code>? Scammers use look-alike domains to trick you. When in doubt, type the address manually into your browser.</p>

      <h2>Red Flag 3: Generic Greetings</h2>
      <p>While AI is getting better, many mass attacks still use "Dear Customer." A real service usually knows your name.</p>

      <h2>How Disposable Email Helps</h2>
      <p>If you use a unique <a href="/" class="text-blue-600 hover:underline">TemuMail address</a> for a specific service and start getting "bank alerts" at that address, you know instantly it's a scam. Your bank doesn't know that temporary address exists!</p>
    `
  },
  {
    slug: 'digital-minimalism-guide',
    title: 'Digital Minimalism: How to Declutter Your Online Life',
    excerpt: 'Feel overwhelmed by notifications and unread badges? It is time for a digital detox. Learn how to clean up your accounts and regain your focus.',
    date: '2026-04-16',
    author: 'TemuMail Team',
    content: `
      <p>Our physical spaces affect our mood. A messy room creates anxiety. The same is true for our digital spaces. A cluttered inbox, hundreds of unused accounts, and constant pings destroy our focus.</p>

      <h2>Step 1: The Great Unsubscribe</h2>
      <p>Spend 20 minutes today searching your inbox for "unsubscribe." Be ruthless. If you haven't opened it in a month, you don't need it.</p>

      <h2>Step 2: Delete Zombie Accounts</h2>
      <p>That fitness app you downloaded in 2023? That forum you posted on once? Delete them. Every unused account is a potential security vulnerability waiting to be breached.</p>

      <h2>Step 3: Gatekeep Your Inbox</h2>
      <p>Moving forward, practice "defensive clicking." Don't give your email to just anyone. Use a <a href="/blog/what-is-disposable-email" class="text-blue-600 hover:underline">disposable email</a> for anything that isn't a long-term relationship. Keep your primary inbox pristine.</p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

