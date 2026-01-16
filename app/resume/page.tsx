'use client'

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <header className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
                이규한
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Frontend Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                더 빠르고, 더 나은 사용자 경험을 만드는 프론트엔드 개발자입니다.<br />
                Vue.js와 React를 기반으로, 성능 최적화부터 배포 인프라까지 프론트엔드 개발의 전 과정을 경험했습니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href="mailto:weaklion@naver.com" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                weaklion@naver.com
              </a>
              <a 
                href="https://github.com/weaklion" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.notion.so/weaklion/portfolio-38d619442e974c03abd1094d05b6e30c" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                </svg>
                Portfolio
              </a>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary-500">💻</span>
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Vue.js', level: '95%' },
              { name: 'React', level: '90%' },
              { name: 'TypeScript', level: '90%' },
              { name: 'JavaScript', level: '95%' },
              { name: 'HTML/CSS', level: '95%' },
              { name: 'Node.js', level: '75%' },
              { name: 'AWS', level: '80%' },
              { name: 'Git', level: '90%' }
            ].map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 group-hover:scale-105"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary-500">🚀</span>
            Career
          </h2>
          
          <div className="space-y-8">
            {/* 그립랩스 */}
            <div className="relative pl-8 border-l-2 border-primary-500">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">그립랩스</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer · 2022.04 ~ 2025.09 (3년 6개월)</p>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">뉴밍 2.0 & 3.0 - AI 기반 뉴스 앱 플랫폼</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>Vue 2.0 → Vue 3.0 + TypeScript 마이그레이션으로 코드 추적성 향상</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>Atomic Design 패턴 적용 후 FSD 아키텍처로 전환하여 개발 속도 30% 향상</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>tanstack virtual + Intersection Observer 적용으로 유저 이탈율 30% 감소</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>메모리 사용량 90% → 40%로 최적화 (tanstack virtual scroll)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>GitHub Actions CI/CD 구축으로 배포 자동화 및 버전 관리 체계화</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>Sentry 도입으로 CS 건의 40% 감소</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Vue 3.0', 'TypeScript', 'Pinia', 'Vite', 'AWS', 'GitHub Actions', 'Sentry'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">뉴밍 어드민 & 쇼츠 어드민</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>사용자/키워드/이벤트 관리용 어드민 시스템 개발</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>Cloudflare Pages 배포로 비용 최소화 (free tier 유지)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">▸</span>
                      <span>React 기반 쇼츠 생성 플랫폼 어드민 제작 (drag & drop 기능)</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Nuxt', 'React', 'shadcn', 'Zustand', 'DaisyUI', 'Cloudflare'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 씨이랩 */}
            <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">씨이랩</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer · 2021.04 ~ 2021.10 (7개월)</p>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">X-GEN & Monitoring Solution</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">▸</span>
                      <span>딥러닝 데이터셋 생성 플랫폼 개발</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">▸</span>
                      <span>GPU 사용량 모니터링 솔루션 개발 (Plotly.js 데이터 시각화)</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['React', 'Context API', 'TanStack Query', 'Plotly.js', 'Docker'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 소프트웨어인라이프 */}
            <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">소프트웨어인라이프</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer · 2019.07 ~ 2020.09 (1년 3개월)</p>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Docswave - Google Workspace 협업 솔루션</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">▸</span>
                      <span>Vue.js 기반 SaaS 제품 개발 및 리팩터링</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">▸</span>
                      <span>Microsoft Teams 플러그인 프로토타입 개발</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">▸</span>
                      <span>Lerna 기반 Monorepo 구성</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['Vue.js', 'Vuex', 'Nuxt', 'Docker', 'GCP', 'MS Azure'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary-500">🏆</span>
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">30%+</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">유저 이탈율 감소</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">페이지네이션 & 가상 스크롤 도입</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">55%</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">메모리 사용량 감소</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">90% → 40% 최적화</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%+</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">CS 건의 감소</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sentry 에러 추적 도입</p>
            </div>
          </div>
        </section>

        {/* Education & Certification */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary-500">🎓</span>
            Education & Certification
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏫</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">동의대학교</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">컴퓨터공학과 · 2012.03 ~ 2018.08</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">학점: 3.4/4.0</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📜</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">정보처리기사</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">한국산업인력공단 · 2018.05</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
