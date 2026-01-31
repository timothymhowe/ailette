import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Timothy M. Howe`,
      description: post.description,
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const html = marked(post.content);

  return (
    <div className="min-h-screen bg-white flex justify-center p-6 pt-12">
      <main className="w-full max-w-xl">
        <header className="mb-4 pb-4 border-b border-neutral-200">
          <Link href="/blog" className="text-neutral-400 hover:text-neutral-900 text-sm transition-colors">
            ← Blog
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900 mt-2">{post.title}</h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-neutral-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <article
          className="prose prose-neutral prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <footer className="mt-6 pt-4 border-t border-neutral-200">
          <Link href="/blog" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors">
            ← Back to blog
          </Link>
        </footer>
      </main>
    </div>
  );
}
