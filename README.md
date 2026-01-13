# WeakLion 기술 블로그 📚

Next.js 14와 TypeScript와 Claude AI로 만든 현대적인 개발 기술 블로그입니다.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ 주요 기능

- 🎨 **깔끔한 디자인**: 모던하고 미니멀한 UI/UX
- 🌗 **다크모드**: 눈이 편한 테마 지원
- 📝 **MDX 지원**: 마크다운에 React 컴포넌트 사용 가능
- 🔍 **실시간 검색**: 빠른 검색 기능 (⌘K / Ctrl+K)
- 🏷️ **카테고리 & 태그**: 체계적인 콘텐츠 분류
- 📱 **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- ⚡ **빠른 성능**: Next.js App Router로 최적화된 성능
- 🎯 **SEO 최적화**: 검색 엔진 친화적인 구조
- 📊 **읽기 시간 표시**: 각 글의 예상 읽기 시간 제공

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치

1. 저장소 클론

```bash
git clone https://github.com/weaklion/weaklion.github.io.git
cd weaklion.github.io
```

2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저에서 열기

```
http://localhost:3000
```

## 📝 글 작성하기

### 새 글 작성

`posts` 폴더에 `.mdx` 파일을 생성하세요:

```mdx
---
title: "글 제목"
date: "2024-01-15"
description: "글 설명"
category: "카테고리명"
tags: ["태그1", "태그2", "태그3"]
author: "작성자명"
---

# 글 내용을 여기에 작성하세요

마크다운 문법을 사용할 수 있습니다.

\`\`\`javascript
// 코드 블록도 사용 가능
const greeting = "Hello, World!"
console.log(greeting)
\`\`\`
```

### Front Matter 필드

- **title** (필수): 글 제목
- **date** (필수): 작성일 (YYYY-MM-DD 형식)
- **description** (필수): 글 요약
- **category** (필수): 카테고리
- **tags** (필수): 태그 배열
- **author** (선택): 작성자 (기본값: WeakLion)
- **coverImage** (선택): 커버 이미지 경로

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.ts` 파일에서 색상을 변경할 수 있습니다:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... 원하는 색상으로 변경
  },
}
```

### 폰트 변경

`app/globals.css` 파일에서 폰트를 변경할 수 있습니다:

```css
:root {
  --font-pretendard: "Your Font", system-ui, sans-serif;
}
```

## 📦 빌드 및 배포

### 로컬 빌드

```bash
npm run build
# 또는
yarn build
```

### GitHub Pages 배포

1. GitHub 저장소 설정에서 Pages를 활성화합니다
2. Source를 "GitHub Actions"로 설정합니다
3. 다음 명령어로 빌드 및 배포:

```bash
npm run deploy
# 또는
yarn deploy
```

빌드된 파일은 `out` 폴더에 생성되며, GitHub Pages에 자동으로 배포됩니다.

### GitHub Actions 설정

`.github/workflows/deploy.yml` 파일을 생성하여 자동 배포를 설정할 수 있습니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🛠️ 기술 스택

- **프레임워크**: [Next.js 14](https://nextjs.org/) (App Router)
- **언어**: [TypeScript](https://www.typescriptlang.org/)
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/)
- **콘텐츠**: [MDX](https://mdxjs.com/)
- **배포**: [GitHub Pages](https://pages.github.com/)

## 📂 프로젝트 구조

```
weaklion.github.io/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   ├── posts/             # 게시글 페이지
│   ├── category/          # 카테고리 페이지
│   └── tag/               # 태그 페이지
├── components/            # React 컴포넌트
│   ├── Header.tsx        # 헤더
│   ├── Footer.tsx        # 푸터
│   ├── Search.tsx        # 검색
│   ├── PostCard.tsx      # 게시글 카드
│   └── MDXContent.tsx    # MDX 렌더러
├── lib/                   # 유틸리티 함수
│   └── mdx.ts            # MDX 처리
├── posts/                 # MDX 게시글
│   ├── welcome.mdx
│   └── ...
├── public/                # 정적 파일
├── styles/                # 스타일 파일
└── next.config.js        # Next.js 설정
```

## 🔍 주요 기능 사용법

### 검색 기능

- **단축키**: `⌘K` (Mac) 또는 `Ctrl+K` (Windows/Linux)
- **검색 범위**: 제목, 내용, 카테고리, 태그

### 다크모드

- 헤더의 테마 전환 버튼 클릭
- 사용자의 시스템 설정 자동 감지
- 선택한 테마는 로컬 스토리지에 저장

### 카테고리 & 태그

- 메인 페이지에서 카테고리 섹션 확인
- 각 게시글의 카테고리/태그 클릭하여 관련 글 보기

## 🤝 기여하기

기여는 언제나 환영합니다! 다음 단계를 따라주세요:

1. 이 저장소를 Fork 합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📧 연락처

- 블로그: [https://weaklion.github.io](https://weaklion.github.io)
- GitHub: [@weaklion](https://github.com/weaklion)
- Email: weaklion@naver.com

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들의 도움을 받아 만들어졌습니다:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

---

⭐ 이 프로젝트가 유용했다면 Star를 눌러주세요!
