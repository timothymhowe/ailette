import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export const metadata = {
  title: 'Blog | Timothy M. Howe',
  description: 'Thoughts on software, AI, and building products.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white flex justify-center p-6 pt-12">
      <main className="w-full max-w-xl">
        <header className="mb-4 pb-4 border-b border-neutral-200">
          <Link href="/" className="text-neutral-400 hover:text-neutral-900 text-sm transition-colors">
            ← Home
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900 mt-2">Blog</h1>
        </header>

        <div className="divide-y divide-neutral-100">
          {posts.length === 0 ? (
            <p className="text-neutral-500 py-4">No posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-3 group"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <h2 className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                {post.description && (
                  <p className="text-sm text-neutral-500 leading-snug">
                    {post.description}
                  </p>
                )}
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
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
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
