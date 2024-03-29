import { extractData, instance, baseURL } from "@/api";
import type { APIError } from "@/api/types";
import { useViewsStore } from "@/stores";
import { useQuery } from "@tanstack/vue-query";
import type { ISlides, INewSlides } from "./carousel.type";

async function findAll() {
  return extractData(instance.get<ISlides>('Slids?populate=*'));
}

function selectSlides(data: ISlides) {
  const res = data.data.map((slide) => {
    return {
      id: slide.id,
      title: slide.attributes.title,
      img: slide.attributes.img.data.attributes.url,
      link: slide.attributes.link
    };
  });
  return {
    slides: res,
  };
}

export function useSlides() {
  const { setAlerts } = useViewsStore();

  const { isLoading, isFetching, isSuccess, error, data } = useQuery<ISlides, APIError, INewSlides>(
    ['slides'],
    findAll,
    {
      select: (data) => selectSlides(data),
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
