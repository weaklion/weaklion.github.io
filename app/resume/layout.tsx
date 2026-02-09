import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "포트폴리오 - 이규한 | WeakLion",
  description:
    "더 나은 사용자 경험을 위해 고민하는 프론트엔드 개발자 이규한의 포트폴리오입니다. Vue.js, React, TypeScript 전문.",
  keywords: [
    "이규한",
    "프론트엔드 개발자",
    "Frontend Developer",
    "Vue.js",
    "React",
    "TypeScript",
    "이력서",
    "포트폴리오",
    "Portfolio",
  ],
  openGraph: {
    title: "포트폴리오 - 이규한",
    description: "더 나은 사용자 경험을 위해 고민하는 프론트엔드 개발자",
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
