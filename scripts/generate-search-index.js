const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts')
const publicDirectory = path.join(process.cwd(), 'public')

function generateSearchIndex() {
  // posts 디렉토리가 없으면 빈 배열 생성
  if (!fs.existsSync(postsDirectory)) {
    const searchIndex = []
    fs.writeFileSync(
      path.join(publicDirectory, 'search-index.json'),
      JSON.stringify(searchIndex, null, 2)
    )
    console.log('✓ Created empty search index (no posts found)')
    return
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const searchIndex = []

  fileNames.forEach((fileName) => {
    if (!fileName.endsWith('.mdx')) return

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const slug = fileName.replace(/\.mdx$/, '')
    
    searchIndex.push({
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || 'General',
      tags: data.tags || [],
      date: data.date || '',
      content: content.substring(0, 500), // 처음 500자만 저장
    })
  })

  // public 디렉토리에 JSON 파일 생성
  fs.writeFileSync(
    path.join(publicDirectory, 'search-index.json'),
    JSON.stringify(searchIndex, null, 2)
  )

  console.log(`✓ Generated search index with ${searchIndex.length} posts`)
}

generateSearchIndex()
