import { extractData, instance } from "@/api";
import type { APIError } from "@/api/types";
import { useViewsStore } from "@/stores";
import { useQuery } from "@tanstack/vue-query";
import type { IBanners, INewBanners } from "./banners.type";

async function findAll() {
  return extractData(instance.get<IBanners>('banners'));
}

function selectBanners(data: IBanners) {
  const res = data.data.map((banner) => {
    return {
      id: banner.id,
      imgAndUrl: banner.attributes.imgAndUrl,
    };
  });
  return {
    banners: res,
  };
}

export function useBanners() {
  const { setAlerts } = useViewsStore();

  const { isLoading, isFetching, isSuccess, error, data } = useQuery<IBanners, APIError, INewBanners>(
    ['banners'],
    findAll,
    {
      select: (data) => selectBanners(data),
      onError: () => setAlerts({
        status: "error",
        title: 'Ошибка на стороне сервера',
        text: 'Попробуйте перезагрузить страницу, чтобы подгрузить баннеры...'
      })
    },
  );

  return {
    data,
    isFetching,
    isLoading,
    isSuccess,
    error,
  };
}