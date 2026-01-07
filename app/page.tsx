import Link from 'next/link'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/mdx'
import { PostCard } from '@/components/PostCard'

export default function Home() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
          WeakLion의 기술 블로그
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          개발과 기술에 대한 생각을 공유하는 공간입니다.
          <br />
          새로운 것을 배우고, 경험을 나누며 함께 성장합니다.
        </p>
      </section>

      {/* Latest Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">최근 게시글</h2>
          {posts.length > 6 && (
            <Link
              href="/posts"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              전체보기 →
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            아직 게시글이 없습니다. 첫 게시글을 작성해보세요!
          </div>
        )}
      </section>

      {/* Categories */}
      <section id="categories" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">카테고리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const categoryPosts = posts.filter(post => post.category === category)
            return (
              <Link
                key={category}
                href={`/category/${encodeURIComponent(category)}`}
                className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 card-hover bg-white dark:bg-gray-900 text-center"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {category}
                </h3>
                <p className="text-sm text-gray-500">
                  {categoryPosts.length}개의 글
                </p>
              </Link>
            )
          })}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            카테고리가 없습니다.
          </div>
        )}
      </section>

      {/* Tags */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">태그</h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => {
            const tagPosts = posts.filter(post => post.tags.includes(tag))
            return (
              <Link
                key={tag}
                href={`/tag/${encodeURIComponent(tag)}`}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full transition-colors"
              >
                #{tag} ({tagPosts.length})
              </Link>
            )
          })}
        </div>

        {tags.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            태그가 없습니다.
          </div>
        )}
      </section>
    </div>
  )
}
