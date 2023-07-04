export interface IBanners {
  data: {
    id: number;
    attributes: {
      imgAndUrl: {
        img: string;
        url: string;
      }[];
    };
  }[];
}

export interface INewBanners {
  banners: {
    id: number;
    imgAndUrl: {
      img: string;
      url: string;
    }[];
  }[];
}

