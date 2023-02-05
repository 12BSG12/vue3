import type { IPagination } from "../../home.type";

export interface INewResponse {
  posts: {
    id: number;
    title: string;
    img: string;
    info: {
      date: string;
      month: string;
    };
  }[];
  meta: IPagination;
}

