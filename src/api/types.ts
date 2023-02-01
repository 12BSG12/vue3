export interface IPosts {
  data: {
    id: number;
    attributes: IAttributes;
    meta: IPagination;
  }[];
}

interface IAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  subtitle?: string;
  content?: string;
  tags?: string[];
  img: IImg;
  contentimgs?: IImg[];
}

interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IImg {
  data: {
    attributes: {
      url: string;
    };
  };
}
