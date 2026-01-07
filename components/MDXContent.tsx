'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mb-4 mt-8 pb-2 border-b border-gray-200 dark:border-gray-800" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  ol: (props: any) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => (
    <a
      className="text-primary-500 hover:text-primary-600 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  code: (props: any) => {
    const { className, children } = props
    const isInline = !className
    
    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono"
          {...props}
        />
      )
    }
    
    return (
      <code
        className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto text-sm font-mono"
        {...props}
      />
    )
  },
  pre: (props: any) => (
    <pre
      className="mb-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden"
      {...props}
    />
  ),
  img: (props: any) => (
    <img
      className="rounded-lg my-6 w-full"
      loading="lazy"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-gray-300 dark:border-gray-700 px-4 py-2"
      {...props}
    />
  ),
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  )
}
