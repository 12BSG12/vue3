import { extractData, instance, baseURL } from '@/api';
import type { APIError } from '@/api/types';
import { useViewsStore } from '@/stores';
import qs from 'qs';
import type { Ref } from 'vue';
import { useQuery } from "@tanstack/vue-query";
import type { IPosts } from '../../home.type';
import type { INewResponse } from './news.type';

async function findAll(page: number) {
  const query = qs.stringify(
    {
      pagination: {
        page,
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  return extractData(instance.get<IPosts>(`posts?populate=*&sort=createdAt:DESC&${query}`));
}

function selectPosts(data: IPosts) {
  const res = data.data.map((post) => {
    const dataTime = new Date(post.attributes.createdAt)
      .toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
      })
      .split(' ');

    return {
      id: post.id,
      title: post.attributes.title,
      img: post.attributes.img.data.attributes.url,
      info: {
        date: dataTime[0],
        month: dataTime[1].slice(0, 3),
      },
    };
  });
  return {
    posts: res,
    meta: data.meta,
  };
}

export function usePosts(page: Ref<number>) {
  const { setMinAndMaxId, setAlerts } = useViewsStore();
  const { isLoading, isFetching, isSuccess, error, data } = useQuery<IPosts, APIError, INewResponse>(
    ['posts', page],
    () => findAll(page.value),
    {
      select: (data) => selectPosts(data),
      onSuccess: (data) => setMinAndMaxId(data.posts.map((post) => post.id)),
      onError: () => setAlerts({
        title: 'Ошибка на стороне сервера',
        text: 'Попробуйте перезагрузить страницу, чтобы подгрузить посты...'
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
