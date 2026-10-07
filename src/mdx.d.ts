declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const metadata: {
    title: string
    date: string
    summary: string
  }

  const MDXContent: ComponentType
  export default MDXContent
}
