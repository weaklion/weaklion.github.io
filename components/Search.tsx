'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  content: string
}

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Post[]>([])
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // 검색 인덱스 로드
  useEffect(() => {
    const loadSearchIndex = async () => {
      try {
        const response = await fetch('/search-index.json')
        const data = await response.json()
        setAllPosts(data)
      } catch (error) {
        console.error('Failed to load search index:', error)
      }
    }
    loadSearchIndex()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      const lowercaseQuery = value.toLowerCase()
      
      const filtered = allPosts.filter(post => {
        const searchableText = `
          ${post.title} 
          ${post.description} 
          ${post.category} 
          ${post.tags.join(' ')} 
          ${post.content}
        `.toLowerCase()
        
        return searchableText.includes(lowercaseQuery)
      })
      
      setResults(filtered.slice(0, 5))
    } else {
      setResults([])
    }
  }

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">검색</span>
        <kbd className="hidden sm:inline px-2 py-0.5 text-xs bg-gray-200 dark:bg-gray-700 rounded">⌘K</kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50">
          <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-2xl animate-fade-in-up">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="게시글 검색..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-lg"
                  autoFocus
                />
              </div>
            </div>

            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto p-2">
                {results.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h3 className="font-semibold mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                검색 결과가 없습니다.
              </div>
            )}

            {!query && (
              <div className="p-8 text-center text-gray-500 text-sm">
                게시글 제목, 내용, 카테고리, 태그로 검색할 수 있습니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
