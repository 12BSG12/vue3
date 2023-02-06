import { baseURL, extractData, instance } from '@/api';
import type { APIError } from '@/api/types';
import type { IPost } from '@/views/home/home.type';
import type { Ref } from 'vue';
import { useQuery } from 'vue-query';
import type { INewPost } from './fullPost.type';

async function findOne(id: number) {
  return extractData(instance.get<IPost>(`posts/${id}?populate=*`));
}

function selectPost(data: IPost) {
  const dataTime = new Date(data.data.attributes.createdAt).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return {
    post: {
      id: data.data.id,
      title: data.data.attributes.title,
      subtitle: data.data.attributes.subtitle,
      content: data.data.attributes.content,
      createdAt: dataTime,
      tags: data.data.attributes.tags,
      contentimgs: data.data.attributes.contentimgs?.data?.map(
        (img) => ({src: baseURL + img.attributes.url}),
      ),
    },
  };
}

export const usePost = (id: Ref<number>) => {
  const { isLoading, isFetching, isError, data } = useQuery<IPost, APIError, INewPost>(
    ['post', id],
    () => findOne(id.value),
    {
      select: (data) => selectPost(data),
    },
  );
  return {
    data,
    isFetching,
    isLoading,
    isError,
  };
};
