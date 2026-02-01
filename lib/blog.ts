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
    excerpt: 'Learn how disposable email addresses can protect your privacy, reduce spam, and keep your primary inbox clean.',
    date: '2026-02-01',
    author: 'TemuMail Team',
    content: \
      <h2>What is Disposable Email?</h2>
      <p>A disposable email address (DEA) is a temporary email address that allows you to receive email without revealing your real identity. These addresses are often used to sign up for services, download content, or verify accounts without the risk of spam.</p>
      <h2>Why Use It?</h2>
      <ul>
        <li><strong>Privacy Protection:</strong> Keep your personal email private.</li>
        <li><strong>Spam Reduction:</strong> Avoid marketing emails and newsletters.</li>
        <li><strong>Security:</strong> Protect your identity in case of data breaches.</li>
      </ul>
      <h2>How TemuMail Works</h2>
      <p>TemuMail provides you with a free, instant email address. You can use it immediately to receive emails. Messages are kept for a limited time before being automatically deleted.</p>
    \
  },
  {
    slug: 'top-ways-protect-privacy-online',
    title: 'Top 5 Ways to Protect Your Privacy Online in 2026',
    excerpt: 'In an age of increasing digital surveillance, taking steps to secure your online presence is crucial. Here are the top strategies.',
    date: '2026-02-05',
    author: 'TemuMail Team',
    content: \
      <h2>1. Use a VPN</h2>
      <p>A Virtual Private Network (VPN) encrypts your internet connection, hiding your IP address and browsing activity from ISPs and trackers.</p>
      <h2>2. Use Temporary Emails</h2>
      <p>Services like <strong>TemuMail</strong> allow you to sign up for websites without exposing your primary email address to potential spam and data leaks.</p>
      <h2>3. Enable Two-Factor Authentication (2FA)</h2>
      <p>Adding an extra layer of security to your accounts prevents unauthorized access even if your password is compromised.</p>
      <h2>4. Use Strong, Unique Passwords</h2>
      <p>Use a password manager to generate and store complex passwords for every site you visit.</p>
      <h2>5. Review App Permissions</h2>
      <p>Regularly check which apps have access to your location, camera, and microphone.</p>
    \
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
