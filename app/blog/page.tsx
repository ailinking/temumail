import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - TemuMail',
  description: 'Latest news, tips, and guides about online privacy, security, and disposable email.',
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen pb-20">
      <div className="relative py-20 bg-secondary/30 border-b border-border/50">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The <span className="text-gradient">Privacy Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights on digital hygiene, spam prevention, and anonymous communication.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col h-full bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 mt-auto border-t border-border/30">
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
