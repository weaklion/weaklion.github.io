'use client'

import { useEffect, useRef, useState } from 'react'

interface CommentsProps {
  repo: string // 'username/repo' 형식
}

export function Comments({ repo }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  // 클라이언트 사이드에서만 렌더링
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Utterances 초기 로드 (한 번만)
  useEffect(() => {
    if (!mounted || !commentsRef.current) return
    
    const currentRef = commentsRef.current
    
    // 이미 로드되어 있다면 건너뛰기
    if (currentRef.querySelector('.utterances')) {
      return
    }
    
    // Utterances 스크립트 생성
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', repo)
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', '💬 댓글')
    script.setAttribute('theme', 'preferred-color-scheme') // 시스템 테마 자동 감지
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true
    
    // 안전하게 추가
    try {
      currentRef.appendChild(script)
    } catch (error) {
      console.error('Utterances script loading error:', error)
    }
  }, [repo, mounted]) // resolvedTheme 제거 - preferred-color-scheme으로 자동 처리
  
  if (!mounted) {
    return (
      <section className="comments-section mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              💬 댓글
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              GitHub 계정으로 로그인하여 댓글을 남길 수 있습니다.
            </p>
          </div>
          <div className="utterances-wrapper">
            <div className="loading-placeholder">
              댓글을 불러오는 중...
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="comments-section mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* 댓글 헤더 */}
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            💬 댓글
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            GitHub 계정으로 로그인하여 댓글을 남길 수 있습니다.
          </p>
        </div>
        
        {/* Utterances 댓글 영역 */}
        <div 
          ref={commentsRef}
          className="utterances-wrapper animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {/* Utterances가 여기에 렌더링됩니다 */}
        </div>
      </div>
      
      <style jsx>{`
        .comments-section {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(249, 250, 251, 0.5) 100%
          );
        }
        
        :global(.dark) .comments-section {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(17, 24, 39, 0.5) 100%
          );
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Utterances 스타일 커스터마이징 */
        :global(.utterances) {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: box-shadow 0.3s ease;
        }
        
        :global(.utterances:hover) {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                      0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        :global(.dark .utterances) {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 
                      0 2px 4px -1px rgba(0, 0, 0, 0.2);
        }
        
        :global(.dark .utterances:hover) {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 
                      0 4px 6px -2px rgba(0, 0, 0, 0.3);
        }
        
        /* 로딩 상태 애니메이션 */
        .utterances-wrapper:empty::after {
          content: '댓글을 불러오는 중...';
          display: block;
          padding: 2rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .loading-placeholder {
          padding: 2rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}
