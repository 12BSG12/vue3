import type { IImg } from "../../home.type";

export interface ISlides {
  data: {
    id: number;
    attributes: {
      title: string;
      link: string;
      img: IImg,
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
}

export interface INewSlides {
  slides: {
    id: number;
    title: string;
    link: string;
    img: string,
  }[];
}