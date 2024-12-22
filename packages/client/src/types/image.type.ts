interface ImageBase {
  url: string
  width: number
  height: number
  hash: string
  ext: string
  mime: string
  size: number
}

interface Image extends ImageBase {
  id: number
  documentId: string
  alternativeText: string
  caption: string
  createdAt: string
  publishedAt: string
  updatedAt: string
  formats: {
    thumbnail: ImageBase
    small: ImageBase
    medium: ImageBase
    large: ImageBase
  }
}

export type {Image}