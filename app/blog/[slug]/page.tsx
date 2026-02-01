import Link from 'next/link';
import { getPostBySlug, blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> { 
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - TemuMail Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Article Header */}
      <div className="py-20 border-b border-border">        
        <div className="container max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm font-medium text-muted-foreground uppercase tracking-wide">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
          </div>
        </div>
      </div>

      <main className="container max-w-3xl py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="bento-card p-12 text-center bg-card">        
            <h3 className="text-3xl font-bold mb-4">Protect Your Inbox Today</h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
              Stop spam before it starts. Generate a free, secure disposable email address instantly.
            </p>
            <Link href="/" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Get Started for Free
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
