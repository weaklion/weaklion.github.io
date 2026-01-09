import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXContent } from '@/components/MDXContent'
import { Comments } from '@/components/Comments'
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

  const keywords = [
    ...post.tags,
    post.category,
    '개발 블로그',
    'WeakLion',
  ];

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author || 'WeakLion' }],
    keywords: keywords,
    
    // Open Graph
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'WeakLion'],
      tags: post.tags,
      url: `https://weaklion.github.io/posts/${params.slug}/`,
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/og-image.png'],
    },
    
    // 추가 메타데이터
    alternates: {
      canonical: `https://weaklion.github.io/posts/${params.slug}/`,
    },
    
    // 로봇
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // JSON-LD 구조화된 데이터
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: 'https://weaklion.github.io/images/og-image.png',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'WeakLion',
      url: 'https://weaklion.github.io',
    },
    publisher: {
      '@type': 'Person',
      name: 'WeakLion',
      url: 'https://weaklion.github.io',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://weaklion.github.io/posts/${params.slug}/`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'ko-KR',
    wordCount: post.content.split(/\s+/).length,
    timeRequired: post.readingTime,
  };

  // BreadcrumbList 구조화된 데이터
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://weaklion.github.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.category,
        item: `https://weaklion.github.io/category/${encodeURIComponent(post.category)}/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://weaklion.github.io/posts/${params.slug}/`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          {/* Breadcrumb 네비게이션 */}
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">
                  홈
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link 
                  href={`/category/${encodeURIComponent(post.category)}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {post.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-gray-100" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

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
            <time dateTime={post.date}>
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
          <MDXContent content={post.content} />
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

        {/* Comments Section */}
        <Comments repo="weaklion/weaklion.github.io" />
      </article>
    </>
  )
}
