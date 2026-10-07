import type { ComponentType } from 'react'

export type BlogMetadata = {
  title: string
  date: string
  summary: string
}

type BlogModule = {
  default: ComponentType
  metadata?: Partial<BlogMetadata>
}

export type BlogPost = BlogMetadata & {
  slug: string
  Content: ComponentType
}

const modules = import.meta.glob<BlogModule>('../blogs/*.mdx', { eager: true })

function titleFromSlug(slug: string) {
  const title = slug.replaceAll('-', ' ')
  return title.charAt(0).toUpperCase() + title.slice(1)
}

export const blogPosts = Object.entries(modules)
  .map(([path, module]): BlogPost => {
    const slug = path.split('/').at(-1)?.replace(/\.mdx$/, '') ?? ''

    return {
      slug,
      title: module.metadata?.title ?? titleFromSlug(slug),
      date: module.metadata?.date ?? '',
      summary: module.metadata?.summary ?? 'Přečíst celý článek.',
      Content: module.default,
    }
  })
  .sort((first, second) => second.date.localeCompare(first.date))

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatBlogDate(date: string) {
  if (!date) return ''

  return new Intl.DateTimeFormat('cs-CZ', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}
