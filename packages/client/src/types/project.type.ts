import {Image} from "./image.type.ts";
import {Technology} from "./technology.type.ts";
import {Link} from "./link.type.ts";


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