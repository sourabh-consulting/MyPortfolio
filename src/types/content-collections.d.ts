declare module 'content-collections' {
  export type Blog = {
    _meta: { path: string }
    title: string
    date: string
    summary: string
    tags: string[]
    author: string
    content: string
  }

  export type Project = {
    _meta: { path: string }
    title: string
    description: string
    tags: string[]
    github?: string
    liveUrl?: string
    image?: string
    content: string
  }

  export const allBlogs: Blog[]
  export const allProjects: Project[]
}
