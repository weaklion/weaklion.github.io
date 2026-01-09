# Utterances 댓글 시스템 설정 가이드

블로그에 Utterances 댓글 시스템이 추가되었습니다! 🎉

## 📋 사전 요구사항

Utterances는 GitHub Issues를 댓글 백엔드로 사용합니다. 다음 요구사항을 확인하세요:

1. ✅ Public GitHub 리포지토리
2. ✅ utterances app 설치
3. ✅ 리포지토리에 Issues 기능 활성화

## 🚀 설정 방법

### 1단계: Utterances App 설치

1. [Utterances GitHub App](https://github.com/apps/utterances) 페이지로 이동
2. **"Install"** 버튼 클릭
3. 블로그 리포지토리 선택 (`weaklion/weaklion.github.io`)
4. **"Install"** 확인

### 2단계: 리포지토리 설정 확인

GitHub 리포지토리 설정에서:

1. **Settings** → **General** 이동
2. **Features** 섹션에서 **Issues** 체크박스 활성화
3. 리포지토리가 **Public**인지 확인

### 3단계: 코드 설정 (이미 완료됨)

`components/Comments.tsx` 파일이 생성되었고, 포스트 페이지에 자동으로 추가되었습니다.

현재 설정된 리포지토리: `weaklion/weaklion.github.io`

만약 다른 리포지토리를 사용하려면 `app/posts/[slug]/page.tsx` 파일의 다음 부분을 수정하세요:

```tsx
<Comments repo="your-username/your-repo" />
```

## 🎨 포함된 기능

### ✨ 스타일링
- 그라데이션 배경
- 부드러운 애니메이션 효과
- 다크모드 자동 전환
- 반응형 디자인
- 호버 효과

### 🌓 다크모드 지원
- 라이트 테마: `github-light`
- 다크 테마: `github-dark`
- 자동 전환

### 📱 반응형
- 모바일, 태블릿, 데스크톱 모두 최적화
- 터치 친화적 인터페이스

## 🔧 커스터마이징

### 테마 변경

`components/Comments.tsx`에서 테마를 변경할 수 있습니다:

```tsx
script.setAttribute('theme', resolvedTheme === 'dark' ? 'github-dark' : 'github-light')
```

사용 가능한 테마:
- `github-light` (기본 라이트 테마)
- `github-dark` (기본 다크 테마)
- `github-dark-orange`
- `icy-dark`
- `dark-blue`
- `photon-dark`
- `preferred-color-scheme` (시스템 설정 따름)

### Issue 매핑 방식 변경

현재는 `pathname` 방식을 사용합니다:

```tsx
script.setAttribute('issue-term', 'pathname')
```

다른 옵션:
- `url` - 전체 URL 사용
- `title` - 페이지 제목 사용
- `og:title` - Open Graph 제목 사용
- `specific-term` - 특정 이슈 번호 또는 라벨

### 라벨 커스터마이징

현재 라벨: `💬 댓글`

변경하려면:

```tsx
script.setAttribute('label', '원하는 라벨명')
```

## 🎯 작동 방식

1. 사용자가 포스트 하단의 댓글 섹션으로 스크롤
2. GitHub 계정으로 로그인
3. 댓글 작성
4. 해당 포스트의 pathname을 제목으로 하는 Issue가 자동 생성
5. 댓글은 GitHub Issue의 코멘트로 저장됨

## 📸 스크린샷 예시

```
┌─────────────────────────────────────┐
│  💬 댓글                             │
│  GitHub 계정으로 로그인하여          │
│  댓글을 남길 수 있습니다.            │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [Utterances 댓글 위젯]        │ │
│  │                               │ │
│  │ Sign in with GitHub           │ │
│  │                               │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

## ⚠️ 주의사항

1. **리포지토리는 반드시 Public이어야 합니다**
   - Private 리포지토리에서는 작동하지 않습니다

2. **utterances app 설치 필수**
   - 앱이 설치되지 않으면 댓글을 남길 수 없습니다

3. **Issues 기능 활성화 필요**
   - 리포지토리 설정에서 Issues를 활성화해야 합니다

4. **빌드 후 확인**
   - 개발 환경에서도 작동하지만, 프로덕션 빌드 후 테스트하는 것을 권장합니다

## 🔍 문제 해결

### 댓글이 표시되지 않는 경우

1. **리포지토리 이름 확인**
   ```tsx
   <Comments repo="올바른-username/올바른-repo" />
   ```

2. **utterances app 설치 확인**
   - GitHub → Settings → Applications → Installed GitHub Apps
   - utterances가 목록에 있는지 확인

3. **브라우저 콘솔 확인**
   - F12 → Console 탭
   - 오류 메시지 확인

4. **CORS 오류**
   - 리포지토리가 Public인지 확인
   - Issues가 활성화되어 있는지 확인

### 다크모드 전환이 안 되는 경우

`next-themes`가 설치되어 있는지 확인:

```bash
npm install next-themes
```

## 📚 참고 자료

- [Utterances 공식 문서](https://utteranc.es/)
- [Utterances GitHub](https://github.com/utterance/utterances)
- [Next.js 공식 문서](https://nextjs.org/docs)

## ✅ 체크리스트

설정 완료 확인:

- [ ] utterances app 설치 완료
- [ ] 리포지토리 Public 설정
- [ ] Issues 기능 활성화
- [ ] Comments 컴포넌트 추가 완료
- [ ] 개발 서버에서 테스트
- [ ] 프로덕션 빌드 및 배포

---

**완료!** 🎉 이제 블로그 포스트에서 댓글을 받을 수 있습니다!
