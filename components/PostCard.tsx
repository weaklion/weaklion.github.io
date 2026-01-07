import Link from 'next/link'
import type { PostMetadata } from '@/lib/mdx'

interface PostCardProps {
  post: PostMetadata
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 card-hover bg-white dark:bg-gray-900">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.readingTime}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {post.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          
          {post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
