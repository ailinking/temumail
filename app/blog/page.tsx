import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - TemuMail',
  description: 'Latest news, tips, and guides about online privacy, security, and disposable email.',
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            TemuMail
          </Link>
          <nav>
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">TemuMail Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} TemuMail. All rights reserved.     
        </div>
      </footer>
    </div>
  );
}
