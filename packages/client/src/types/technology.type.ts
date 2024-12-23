import {Image} from "./image.type.ts";
import {Project} from "./project.type.ts";

interface Technology {
  id: number
  name: string
  documentId: string
  projects: Project[]
  icon: Omit<Image, "formats">
}

export type {Technology}