import { extractData, instance } from '@/api';
import { useViewsStore } from '@/stores';
import qs from 'qs';
import { onMounted, ref } from 'vue';
import type { IAnswersOnQuestions, IResponse } from './questions.type';

async function findAll(page: number = 1) {
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
  return extractData(instance.get<IResponse>(`answers-on-questions?sort=createdAt:DESC&${query}`));
}

export function useAnswersOnQuestions() {
  const page = ref(1);
  const isLoading = ref(false);
  const pageCount = ref(0);
  const answersOnQuestionsData = ref<IAnswersOnQuestions[]>([]);

  const { setAlerts } = useViewsStore();

  onMounted(() => {
    loadAnswersOnQuestions();
  });

  const loadAnswersOnQuestions = async () => {
    try {
      isLoading.value = true;
      const response = await findAll();
      answersOnQuestionsData.value = response.data;
      pageCount.value = response.meta.pagination.pageCount;
    } catch (error) {
      setAlerts({
        title: 'Ошибка на стороне сервера',
        text: 'Попробуйте перезагрузить страницу, чтобы подгрузить посты...',
      });
    } finally {
      isLoading.value = false;
    }
  };

  const loadMoreAnswersOnQuestions = async () => {
    if (page.value < pageCount.value) {
      try {
        page.value += 1;
        isLoading.value = true;
        const response = await findAll(page.value);
        answersOnQuestionsData.value = [
          ...answersOnQuestionsData.value,
          ...response.data,
        ];
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
    answersOnQuestionsData,
    isLoading,
    loadMoreAnswersOnQuestions,
  };
}
