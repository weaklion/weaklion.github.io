import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://weaklion.github.io'),
  title: {
    default: 'WeakLion 기술 블로그 - React, Next.js, TypeScript 개발 이야기',
    template: '%s | WeakLion 기술 블로그',
  },
  description: '프론트엔드 개발, React, Next.js, TypeScript, 웹 성능 최적화 등 실무 경험과 기술 인사이트를 공유하는 개발 블로그입니다.',
  keywords: [
    '개발 블로그',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    '프론트엔드',
    '웹 개발',
    '성능 최적화',
    'Hooks',
    'WeakLion',
    '기술 블로그',
    '개발자',
    'Web Development',
    'Frontend',
    'Programming'
  ],
  authors: [
    { 
      name: 'WeakLion',
      url: 'https://weaklion.github.io'
    }
  ],
  creator: 'WeakLion',
  publisher: 'WeakLion',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://weaklion.github.io',
    siteName: 'WeakLion 기술 블로그',
    title: 'WeakLion 기술 블로그 - React, Next.js, TypeScript 개발 이야기',
    description: '프론트엔드 개발, React, Next.js, TypeScript, 웹 성능 최적화 등 실무 경험과 기술 인사이트를 공유하는 개발 블로그입니다.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WeakLion 기술 블로그',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'WeakLion 기술 블로그',
    description: '프론트엔드 개발, React, Next.js, TypeScript 등 실무 경험과 기술 인사이트를 공유합니다.',
    creator: '@weaklion',
    images: ['/images/og-image.png'],
  },
  
  // 로봇 설정
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
  
  // 추가 메타데이터
  alternates: {
    canonical: 'https://weaklion.github.io',
  },
  
  // 검증 태그 (필요시 추가)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // 카테고리
  category: 'technology',
  
  // 기타
  other: {
    'google-site-verification': '', // Google Search Console 인증 시 추가
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 추가 메타 태그 */}
        <meta name="theme-color" content="#667eea" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://weaklion.github.io" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD 구조화된 데이터 - 웹사이트 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'WeakLion 기술 블로그',
              description: '프론트엔드 개발, React, Next.js, TypeScript 등 실무 경험과 기술 인사이트를 공유하는 개발 블로그',
              url: 'https://weaklion.github.io',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://weaklion.github.io/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              author: {
                '@type': 'Person',
                name: 'WeakLion',
                url: 'https://weaklion.github.io',
              },
            }),
          }}
        />
        
        {/* JSON-LD 구조화된 데이터 - 조직/개인 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'WeakLion',
              url: 'https://weaklion.github.io',
              sameAs: [
                'https://github.com/weaklion',
              ],
              jobTitle: 'Frontend Developer',
              description: 'React, Next.js, TypeScript를 다루는 프론트엔드 개발자',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
