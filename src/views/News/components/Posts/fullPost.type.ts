import type { IPagination } from '@/views/home/home.type';

export interface INewPost {
  posts: IPostData[]
  meta: IPagination;
}

export interface IPostData {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
  createdAt: string;
  tags?: string[];
  prevImage: string;
  contentimgs?: { src: string }[];
}
