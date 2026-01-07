import { notFound } from 'next/navigation'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXContent } from '@/components/MDXContent'
import type { Metadata } from 'next'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'WeakLion'],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const mdxSource = await serialize(post.content)

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <header className="mb-12 animate-fade-in-up">
        <div className="mb-6">
          <Link
            href={`/category/${encodeURIComponent(post.category)}`}
            className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
          >
            {post.category}
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {post.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <time>
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose dark:prose-invert prose-lg max-w-none mb-12">
        <MDXContent source={mdxSource} />
      </div>

      {/* Footer Navigation */}
      <footer className="pt-12 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            ← 홈으로 돌아가기
          </Link>
          
          <Link
            href={`/category/${encodeURIComponent(post.category)}`}
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            {post.category} 더보기 →
          </Link>
        </div>
      </footer>
    </article>
  )
}
