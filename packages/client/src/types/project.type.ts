import {Image} from "./image.type.ts";

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

  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type {Project}