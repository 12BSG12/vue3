import { useViewsStore } from '@/stores';
import { extractData, instance } from '@/api';
import type { IPosts } from '@/views/home/home.type';
import { type Ref, ref, onMounted } from 'vue';
import type { IPostData } from './fullPost.type';
import qs from 'qs';

function findAll(page: number = 1) {
  const query = qs.stringify(
    {
      pagination: {
        page,
        pageSize: 1,
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
    const dataTime = new Date(post.attributes.createdAt).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return {
      id: post.id,
      title: post.attributes.title,
      subtitle: post.attributes.subtitle,
      content: post.attributes.content,
      createdAt: dataTime,
      tags: post.attributes.tags,
      prevImage: post.attributes.img.data.attributes.url,
      info: {
        date: dataTime[0],
        month: dataTime[1].slice(0, 3),
      },
      contentimgs: post.attributes.contentimgs?.data?.map((img) => ({
        src: img.attributes.url,
      })),
    };
  });
  return {
    posts: res,
    meta: data.meta,
  };
}

export function useLoadMorePosts() {
  const page = ref(1);
  const isLoading = ref(false);
  const pageCount = ref(0);
  const postData = ref<IPostData[]>([]);

  const { setMinAndMaxId, setAlerts } = useViewsStore();

  onMounted(() => {
    loadPost();
  });

  const loadPost = async () => {
    try {
      isLoading.value = true;
      const response = await findAll();
      postData.value = selectPosts(response).posts;
      pageCount.value = response.meta.pagination.pageCount;

      if (postData.value.length) {
        setMinAndMaxId(postData.value.map((post) => post.id));
      }
    } catch (error) {
      setAlerts({
        title: 'Ошибка на стороне сервера',
        text: 'Попробуйте перезагрузить страницу, чтобы подгрузить посты...',
      });
    } finally {
      isLoading.value = false;
    }
  };

  const loadMorePost = async () => {
    if (page.value < pageCount.value) {
      try {
        page.value += 1;
        isLoading.value = true;
        const response = await findAll(page.value);
        const newPosts = selectPosts(response).posts;
        postData.value = [...postData.value, ...newPosts];
      } catch (error) {
        setAlerts({
          title: 'Ошибка на стороне сервера',
          text: 'Попробуйте перезагрузить страницу, чтобы подгрузить посты...',
        });
      } finally {
        isLoading.value = false;
      }
    }
  };
  return {
    postData,
    isLoading,
    loadMorePost,
  };
}
