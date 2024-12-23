import {Image} from "./image.type.ts";

interface Technology {
  id: number
  name: string
  documentId: string
  projects: Project[]
  icon: Omit<Image, "formats">
}

interface Link {
  id: number
  documentId: string
  linkType: string
  url: string
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
  links: Link[]
  images: Image[]

  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type {Project}