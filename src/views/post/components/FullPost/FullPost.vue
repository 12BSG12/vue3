<script setup lang="ts">
import CustomLoader from '@/components/CustomLoader.vue';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useViewsStore } from '@/stores';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { usePost } from './fullPost.service';

const route = useRoute();
const router = useRouter();

const id = ref<number>(+(route.query.id as string));

const container = ref<HTMLElement | null>(null);

useOnClickOutside(container, () => {
  document.body.classList.remove('hideScroll');
});

const onClick = () => {
  document.body.classList.toggle('hideScroll');
};

const { data, isLoading, isSuccess } = usePost(id);
const { minID, maxID } = useViewsStore();

watch(
  () => route.query.id,
  () => {
    if(!route.query.id) return
    id.value = +(route.query.id as string);
  },
);

watch(
  () => data.value?.post.title,
  () => {
    if(!data.value?.post.title) return 
    router.push({ path: `/press-tsentr/novosti/${data.value?.post.title}`, query: route.query });
  },
);

const handleClickOnNextBtn = () => {
  router.push({
    path: `/press-tsentr/novosti/${data.value?.post.title}`,
    query: { id: id.value - 1 },
  });
};

const handleClickOnPrevBtn = () => {
  router.push({
    path: `/press-tsentr/novosti/${data.value?.post.title}`,
    query: { id: id.value + 1 },
  });
};
</script>

<template>
  <div :class="styles.post">
    <div :class="styles.inner">
      <div :class="styles.title">
        <CustomLoader v-if="isLoading" class="w-28 h-7" />
        <h1 v-if="isSuccess">{{ data?.post.title }}</h1>
        <v-btn prepend-icon="mdi-arrow-u-left-top" size="small" @click="handleClickOnPrevBtn" :disabled="id === maxID">
          Назад
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div :class="styles.info">
        <p>
          <CustomLoader v-if="isLoading" class="w-80 h-7" />
          <template v-if="isSuccess">
            <v-icon icon="mdi-calendar-month-outline"></v-icon>
            Опубликовано: {{ data?.post.createdAt }}
          </template>
        </p>
        <div :class="styles.tags">
          <CustomLoader v-if="isLoading" class="w-14 h-8" />
          <template v-if="isSuccess">
            <router-link to="/" v-for="tag in data?.post.tags" :key="tag">{{ tag }}</router-link>
          </template>
        </div>
      </div>
      <CustomLoader v-if="isLoading" class="w-64 mx-auto h-8 mb-4" />
      <div v-if="isSuccess" :class="styles.subtitle">{{ data?.post.subtitle }}</div>
      <CustomLoader v-if="isLoading" class="h-32" />
      <div v-if="isSuccess" v-html="data?.post.content"></div>
      <div :class="styles.imgs" ref="container">
        <template v-if="isLoading">
          <CustomLoader class="h-64" v-for="i in 4" :key="i" />
        </template>
        <template v-if="isSuccess">
          <a
            v-for="img in data?.post.contentimgs"
            :key="img.src"
            data-fancybox="gallery"
            :href="img.src"
            @click="onClick"
          >
            <v-img class="rounded-lg" :aspect-ratio="1" :src="img.src" cover></v-img>
          </a>
        </template>
      </div>
      <div :class="styles.nextBtn">
        <v-btn size="small" @click="handleClickOnNextBtn" :disabled="id === minID">
          Следующий
          <v-icon end icon="mdi-chevron-right" size="large"></v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
