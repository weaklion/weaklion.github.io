import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMetadata {
  title: string
  date: string
  description: string
  category: string
  tags: string[]
  author?: string
  coverImage?: string
  slug: string
  readingTime: string
}

export interface Post extends PostMetadata {
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug: realSlug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    category: data.category || 'General',
    tags: data.tags || [],
    author: data.author || 'WeakLion',
    coverImage: data.coverImage || '',
    readingTime: stats.text,
    content,
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.map(post => post.category)))
  return categories.sort()
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
  return tags.sort()
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter(post => post.tags.includes(tag))
}

export function searchPosts(query: string): Post[] {
  const posts = getAllPosts()
  const lowercaseQuery = query.toLowerCase()
  
  return posts.filter(post => {
    const searchableText = `
      ${post.title} 
      ${post.description} 
      ${post.category} 
      ${post.tags.join(' ')} 
      ${post.content}
    `.toLowerCase()
    
    return searchableText.includes(lowercaseQuery)
  })
}
