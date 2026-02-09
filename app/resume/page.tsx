"use client";

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
                안녕하세요. 현재 6년 차 프론트엔드 개발자로 Vue.js와 React를
                기반으로,
                <br /> 기초부터 배포 인프라까지 프론트엔드 개발의 전 과정을
                경험했습니다.
                <br />
                성능 최적화, 코드의 퀄리티에 관심을 가지고 있으며 빠르게
                변화하는 환경 속에서 팀과 협력하여 문제를 해결하고, 사용성과
                개발 효율을 동시에 추구하는 개발자입니다
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:weaklion@naver.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                weaklion@naver.com
              </a>
              <a
                href="https://github.com/weaklion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://velog.io/@weaklion/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Blog
              </a>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-primary-500">💻</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Vue.js",
              "React",
              "TypeScript",
              "JavaScript",
              "HTML/CSS",
              "Node.js",
              "Next.js",
              "Nuxt",
              "Sentry",
              "Docker",
              "AWS",
              "Git",
              "Tailwind CSS",
              "TanStack Query",
              "Pinia",
              "Zustand",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary-500">🛠️</span>
            Projects
          </h2>

          <div className="space-y-12">
            {/* 1. 뉴밍 3.0 */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  뉴밍 3.0
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  그립랩스 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2024.05 ~ 2025.09 (4명: 프론트 2, 백엔드 2)
                </p>

                <div className="flex gap-3 mt-2 text-sm">
                  <a
                    href="https://play.google.com/store/apps/details?id=co.griplabs.newming.app&hl=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Android
                  </a>
                  <a
                    href="https://apps.apple.com/kr/app/%EB%89%B4%EB%B0%8D-ai-%EB%89%B4%EC%8A%A4-%ED%94%8C%EB%9E%AB%ED%8F%BC/id6448780212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    iOS
                  </a>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "Vue 3.0",
                  "Sentry",
                  "Vite",
                  "Day.js",
                  "AWS",
                  "GitHub Actions",
                  "TanStack Virtual",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  명확한 도메인 분리를 위한 FSD(Feature-Sliced Design) 도입
                </li>
                <li>
                  WebView 기반 네이티브 통신 브릿지 개발
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ iOS, Android에서 동일한 동작을 위한 메소드 추가
                  </span>
                </li>
                <li>
                  대용량 데이터 로드 시 메모리 사용량 문제 해결을 위해 TanStack
                  Virtual Scroll 도입
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ 기존 대용량 데이터 리스트를 로드할 시 80% 이상 차지하던
                    메모리를 최대 40%로 고정
                  </span>
                </li>
                <li>
                  특정 시간에 에러 발생률이 3배 이상 증가하는 문제 추적을 위해
                  Sentry 도입
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ 이후 CS 건의 40% 이상 감소
                  </span>
                </li>
                <li>
                  자동 배포를 위한 GitHub Actions 도입. 릴리즈 추가로 버전
                  히스토리 관리 및 되돌리기 기능 추가
                </li>
                <li>
                  Husky를 이용해 commit 시 ESLint 및 Prettier 실행하도록 개발
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ Commit 단계에서 일어나는 실수 미연에 방지
                  </span>
                </li>
                <li>
                  이슈를 라벨별로 분류
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ 추후 다른 팀에서도 같은 방식으로 이슈 관리
                  </span>
                </li>
              </ul>
            </div>

            {/* 2. 뉴밍 쇼츠 어드민 */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  뉴밍 쇼츠 어드민
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  그립랩스 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2025.02 ~ 2025.07
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Vite", "React", "shadcn/ui", "Zustand", "Draggable.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  SNS에 뉴밍의 콘텐츠를 보여주기 위한 쇼츠 생성 플랫폼의 어드민
                  제작
                </li>
                <li>
                  추후 다른 솔루션과의 통합 및 마이그레이션을 위해 React 도입
                </li>
                <li>
                  Vite를 이용하여 스캐폴딩. 디자인 및 기획이 없어 shadcn/ui를
                  통한 UI 제작
                </li>
                <li>
                  Draggable.js를 이용해 Drag & Drop 제작. Zustand를 이용한 서버
                  상태값 저장
                </li>
              </ul>
            </div>

            {/* 3. 뉴밍 2.0 */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  뉴밍 2.0
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  그립랩스 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2023.02 ~ 2024.10 (4명: 프론트 2, 백엔드 2)
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "Vue 3.0",
                  "Pinia",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vite",
                  "Day.js",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>API 반복 호출을 막기 위한 데이터 캐싱 작업 경험</li>
                <li>AWS S3, CloudFront, Route 53 기반 배포 인프라 구축 경험</li>
                <li>
                  Vue 2.0 JavaScript로 이루어진 기존 코드를 Vue 3.0 TypeScript
                  코드로 마이그레이션
                </li>
                <li>
                  코드의 명확한 구분을 위해 Atomic Design 적용 및 컴포넌트
                  재설계로 개발 속도 상승
                </li>
                <li>
                  대용량 데이터 처리를 위해 IntersectionObserver를 통한
                  페이지네이션 및 무한스크롤 도입
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ 초반 로딩 속도 50% 이상 향상, 유저 이탈율 30% 이상 감소
                  </span>
                </li>
              </ul>
            </div>

            {/* 4. 뉴밍 어드민 */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  뉴밍 어드민
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  그립랩스 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2023.08 ~ 2023.10 (2명: 프론트 1, 백엔드 1)
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "Vue 3.0",
                  "Nuxt",
                  "Pinia",
                  "TypeScript",
                  "Tailwind CSS",
                  "DaisyUI",
                  "Cloudflare Pages",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  뉴밍에서 사용될 사용자, 키워드, 이벤트 관리용 어드민 화면 개발
                </li>
                <li>디자인과 기획이 없어 DaisyUI를 통한 UI 개발</li>
                <li>
                  데이터를 리스트로 보여주기 위해 오프셋 페이지네이션 도입
                </li>
                <li>
                  비용 최소화를 위해 AWS가 아닌 Cloudflare Pages를 통한 배포
                  <br />
                  <span className="text-gray-500 text-xs">
                    └ 사용량이 작아 free tier 유지 중
                  </span>
                </li>
              </ul>
            </div>

            {/* 5. X-GEN */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  X-GEN
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  씨이랩 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2021.04 ~ 2021.10 (2명)
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {["React", "Axios", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>딥러닝 정확도 향상을 위한 데이터셋 생성 플랫폼 개발</li>
                <li>데이터 정렬 및 로딩 최적화 로직 설계</li>
                <li>react-create-app을 이용한 스캐폴딩</li>
                <li>context를 이용한 상태값 관리</li>
              </ul>
            </div>

            {/* 6. Monitoring Solution */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Monitoring Solution
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  씨이랩 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2021.04 ~ 2021.10 (2명)
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {["React", "Axios", "Docker", "Plotly.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  NVIDIA 파트너인 자사의 GPU의 메모리, 디스크 용량 등을 좀 더
                  쉽게 보기 위하여 기획된 솔루션
                </li>
                <li>Plotly.js를 이용하여 GPU의 사용량 및 사양 확인</li>
                <li>
                  사용량이 과도하게 많을 시 Slack 같은 SNS에 메시지를 보내 경고
                </li>
              </ul>
            </div>

            {/* 7. Docswave */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Docswave
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                  소프트웨어인라이프 · Frontend Developer
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2019.07 ~ 2020.09 (약 14개월, 5명)
                </p>
                <div className="flex gap-3 mt-2 text-sm">
                  <a
                    href="https://docswave.com/ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    닥스웨이브
                  </a>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {["Vue.js", "SCSS", "Axios", "Nuxt", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  Vue.js 기반의 SaaS 제품 'Docswave'의 기능 개발 및 리팩터링
                  주도
                </li>
                <li>
                  Microsoft Teams 프로토타입 개발로 plugin 개발 가능하도록 설계
                </li>
                <li>Lerna를 통한 홈페이지와 애플리케이션 monorepo 구성</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Side Projects Section */}
        <section
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary-500">🚀</span>
            Side Projects
          </h2>

          <div className="space-y-12">
            {/* 1. Collaborative Whiteboard */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-800" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  Collaborative Whiteboard
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 font-medium">
                    Personal
                  </span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Full Stack Developer · 2024.11 ~ (진행 중)
                </p>
                <div className="flex gap-3 mt-2 text-sm">
                  <a
                    href="https://github.com/weaklion/whiteboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "React 19",
                  "TypeScript",
                  "Socket.IO",
                  "Konva",
                  "Zustand",
                  "Node.js",
                  "Express",
                  "Monorepo",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-outside ml-4">
                <li>
                  실시간 협업이 가능한 웹 기반 화이트보드 애플리케이션 개발
                </li>
                <li>
                  Socket.IO를 활용한 실시간 드로잉 데이터 동기화 및 다중 사용자
                  커서 공유
                </li>
                <li>
                  Konva (HTML5 Canvas) 라이브러리를 사용해 고성능 드로잉 엔진
                  구현 (선, 도형, 텍스트 등)
                </li>
                <li>
                  pnpm workspace를 활용한 Client/Server 모노레포 구조 설계
                </li>
                <li>
                  Zustand를 이용한 클라이언트 상태 관리 및 Draft Store 패턴으로
                  렌더링 최적화
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certification */}
        <section
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
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
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  동의대학교
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  컴퓨터공학과 · 2012.03 ~ 2018.08
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  학점: 3.4/4.0
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📜</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  정보처리기사
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  한국산업인력공단 · 2018.05
                </p>
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
  );
}
