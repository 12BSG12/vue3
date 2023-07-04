export interface INewPost {
  post: {
    id: number
    title: string
    subtitle?: string
    content?: string
    createdAt: string
    tags?: string[]
    gallery?: {src: string}[]
  },
}