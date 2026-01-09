/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  
  // 컴파일 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // 환경 변수
  env: {
    SITE_URL: 'https://weaklion.github.io',
    SITE_NAME: 'WeakLion 기술 블로그',
  },
}

module.exports = nextConfig
