export interface IBanners {
  data: {
    id: number;
    attributes: {
      imgsAndUrl: {
        img: string;
        link: string;
      }[];
    };
  }[];
}

export interface INewBanners {
  banners: {
    id: number;
    imgsAndUrl: {
      img: string;
      link: string;
    }[];
  }[];
}

