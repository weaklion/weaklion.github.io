# Next.js Export 모드와 보안 헤더 설정

## ⚠️ 경고 해결

`output: 'export'` 모드에서는 `headers()` 함수가 작동하지 않습니다. 
이 경고를 해결하기 위해 `next.config.js`에서 `headers()` 함수를 제거했습니다.

## 📝 왜 제거해야 하나요?

### `output: 'export'` 모드란?
- GitHub Pages 같은 **정적 호스팅**을 위한 모드
- 완전한 정적 HTML/CSS/JS 파일만 생성
- 서버가 없기 때문에 동적 기능 사용 불가

### 사용 불가능한 기능들
```javascript
// ❌ 정적 사이트에서 작동하지 않는 기능들
- headers()        // 커스텀 HTTP 헤더
- redirects()      // 서버 사이드 리다이렉트
- rewrites()       // URL 재작성
- API Routes       // /api/* 엔드포인트
- ISR              // Incremental Static Regeneration
- Middleware       // 미들웨어
```

## 🔒 보안 헤더 대안 방법

제거한 보안 헤더들:
```javascript
X-DNS-Prefetch-Control: on
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
```

### 방법 1: GitHub Pages에서 직접 설정 (❌ 불가능)
GitHub Pages는 커스텀 HTTP 헤더를 지원하지 않습니다.

### 방법 2: Cloudflare Pages 사용 (✅ 추천)
GitHub Pages 대신 Cloudflare Pages로 호스팅하면 헤더 설정 가능:

**`_headers` 파일 생성** (`public/_headers`):
```
/*
  X-DNS-Prefetch-Control: on
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: origin-when-cross-origin
  X-XSS-Protection: 1; mode=block
  Permissions-Policy: interest-cohort=()
```

### 방법 3: Vercel 사용 (✅ 추천)
Vercel에서 호스팅하면 `next.config.js`의 `headers()` 자동 적용됨.

단, `output: 'export'`를 제거해야 합니다:
```javascript
// next.config.js
const nextConfig = {
  // output: 'export', // ← 이 줄 제거
  async headers() {
    return [/* 헤더 설정 */]
  }
}
```

### 방법 4: Meta 태그로 일부 설정 (⚠️ 제한적)
HTML `<meta>` 태그로 일부 보안 설정 가능 (이미 적용됨):

```tsx
// app/layout.tsx
<head>
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="referrer" content="origin-when-cross-origin" />
  {/* 기타 meta 태그들 */}
</head>
```

**한계점:**
- HTTP 헤더만큼 강력하지 않음
- 일부 보안 헤더는 meta 태그로 설정 불가
- 브라우저 호환성 문제 가능

## 🚀 권장 호스팅 플랫폼 비교

| 플랫폼 | 보안 헤더 | 정적 사이트 | 무료 | 추천도 |
|--------|-----------|-------------|------|--------|
| **GitHub Pages** | ❌ | ✅ | ✅ | ⭐⭐⭐ |
| **Cloudflare Pages** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **Vercel** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | ✅ | ✅ | ✅ | ⭐⭐⭐⭐ |

## 💡 현재 상태

### ✅ 작동하는 것들
- 정적 사이트 생성
- MDX 블로그 포스트
- 클라이언트 사이드 라우팅
- 이미지 최적화 (unoptimized mode)
- Utterances 댓글
- 다크모드

### ❌ 작동하지 않는 것들
- 커스텀 HTTP 헤더
- 서버 사이드 리다이렉트
- API Routes
- ISR (Incremental Static Regeneration)

## 🔧 만약 보안 헤더가 꼭 필요하다면?

### 옵션 A: Cloudflare Pages로 마이그레이션

1. **GitHub 연동은 그대로 유지**
2. **배포만 Cloudflare Pages로 변경**
3. **`public/_headers` 파일 추가**

```bash
# 1. public/_headers 파일 생성
touch public/_headers

# 2. Cloudflare Pages에 리포지토리 연결
# https://pages.cloudflare.com/

# 3. 빌드 설정
# Build command: npm run build
# Build output: out
```

### 옵션 B: Vercel로 마이그레이션

1. **GitHub 연동은 그대로 유지**
2. **배포만 Vercel로 변경**
3. **`next.config.js` 수정** (`output: 'export'` 제거)

```javascript
// next.config.js
const nextConfig = {
  // output: 'export', // ← 제거
  images: {
    // unoptimized: true, // ← 제거 (Vercel은 이미지 최적화 지원)
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ]
  },
}
```

## 📊 결론

### GitHub Pages를 계속 사용한다면
- ✅ 보안 헤더 없이도 충분히 안전함
- ✅ HTTPS는 기본 제공됨
- ✅ 대부분의 블로그에는 문제없음
- ⚠️ 추가 보안이 필요하면 다른 플랫폼 고려

### 보안 헤더가 필요하다면
- **가장 쉬움**: Cloudflare Pages (`_headers` 파일만 추가)
- **가장 강력함**: Vercel (Next.js 완벽 지원)

---

**현재 설정으로도 문제없습니다!** 🎉  
GitHub Pages + HTTPS + 정적 사이트면 충분히 안전합니다.
