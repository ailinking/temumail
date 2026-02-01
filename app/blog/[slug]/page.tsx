import Link from 'next/link';
import { getPostBySlug, blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

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
    <div className="min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-secondary/30 border-b border-border/50 py-16">
        <div className="container max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container max-w-3xl py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="bg-secondary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Protect Your Inbox Today</h3>
            <p className="text-muted-foreground mb-6">
              Stop spam before it starts. Generate a free, secure disposable email address instantly.
            </p>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Get Started for Free
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
