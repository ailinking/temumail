import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - TemuMail',
  description: 'Latest news, tips, and guides about online privacy, security, and disposable email.',
};

export default function BlogIndex() {
  return (
    <div className="pb-20">
      <div className="container py-20 md:py-32 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">       
          The <span className="text-gradient-brand">Privacy Blog</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">      
          Expert insights on digital hygiene, spam prevention, and anonymous communication.
        </p>
      </div>

      <div className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col h-full bento-card overflow-hidden">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs font-medium text-muted-foreground mb-4 space-x-4 uppercase tracking-wider">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1"> 
                  {post.excerpt}
                </p>

                <div className="pt-4 mt-auto">       
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                    Read Post <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
