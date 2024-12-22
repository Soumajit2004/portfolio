import {Image} from "./image.type.ts";

interface Technology {
  id: number
  name: string
  projects: Project[]
  icon: Omit<Image, "formats">
}


interface Project {
  id: number
  documentId: string

  slug: string
  title: string
  description: string
  content: string
  coverImage: Image
  githubURL: string
  liveURL: string
  technologies: Technology[]

  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type {Project}