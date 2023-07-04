export interface IImg {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface IPosts {
  data: IResponse[];
  meta: IPagination;
}


export interface IPost {
  data: IResponse;
}

export interface IResponse {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subtitle?: string;
  content?: string;
  tags?: string[];
  prevImg: IImg;
  gallery?: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export interface IPagination {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}