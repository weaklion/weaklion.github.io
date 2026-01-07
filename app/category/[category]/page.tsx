import Link from 'next/link'
import { getAllCategories, getPostsByCategory } from '@/lib/mdx'
import { PostCard } from '@/components/PostCard'
import type { Metadata } from 'next'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category)
  
  return {
    title: `${category} 카테고리`,
    description: `${category} 카테고리의 모든 게시글`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category)
  const posts = getPostsByCategory(category)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 animate-fade-in-up">
        <Link
          href="/"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6"
        >
          ← 홈으로 돌아가기
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">{category}</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length}개의 게시글
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          이 카테고리에는 아직 게시글이 없습니다.
        </div>
      )}
    </div>
  )
}
