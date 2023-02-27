import type { IPagination } from './../../../home/home.type';

export interface IResponse {
  data: IAnswersOnQuestions[];
  meta: IPagination;
}

export interface IAnswersOnQuestions {
  id: number;
  attributes: {
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    question: string;
  };
}
