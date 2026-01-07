import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WeakLion 기술 블로그',
    template: '%s | WeakLion',
  },
  description: '개발과 기술에 대한 생각을 공유하는 공간입니다.',
  keywords: ['개발', '프로그래밍', '기술', '블로그', 'WeakLion'],
  authors: [{ name: 'WeakLion' }],
  creator: 'WeakLion',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://weaklion.github.io',
    siteName: 'WeakLion 기술 블로그',
    title: 'WeakLion 기술 블로그',
    description: '개발과 기술에 대한 생각을 공유하는 공간입니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeakLion 기술 블로그',
    description: '개발과 기술에 대한 생각을 공유하는 공간입니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
