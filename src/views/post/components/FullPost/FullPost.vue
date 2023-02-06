<script setup lang="ts">
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useViewsStore } from '@/stores';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { usePost } from './fullPost.service';

const route = useRoute();
const router = useRouter();

const id = ref<number>(+route.params.id);

const container = ref<HTMLElement | null>(null);

useOnClickOutside(container, () => {
  document.body.classList.remove('hideScroll');
});

const onClick = () => {
  document.body.classList.toggle('hideScroll');
};

const { data } = usePost(id);
const { minID } = useViewsStore();

watch(
  () => route.params.id,
  () => {
    id.value = +route.params.id;
  },
);
</script>

<template>
  <div :class="styles.post">
    <div :class="styles.inner">
      <div :class="styles.title">
        <h1>{{ data?.post.title }}</h1>
        <v-btn prepend-icon="mdi-arrow-u-left-top" size="small" @click="router.go(-1)">
          Назад
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div :class="styles.info">
        <p>
          <v-icon icon="mdi-calendar-month-outline"></v-icon>
          Опубликовано: {{ data?.post.createdAt }}
        </p>
        <div :class="styles.tags">
          <router-link to="/" v-for="tag in data?.post.tags" :key="tag">{{ tag }}</router-link>
        </div>
      </div>
      <div :class="styles.subtitle">{{ data?.post.subtitle }}</div>
      <div v-html="data?.post.content"></div>
      <div :class="styles.imgs" ref="container">
        <a
          v-for="img in data?.post.contentimgs"
          :key="img.src"
          data-fancybox="gallery"
          :href="img.src"
          @click="onClick"
        >
          <v-img class="rounded-lg" :aspect-ratio="1" :src="img.src" cover></v-img>
        </a>
      </div>
      <div :class="styles.nextBtn">
        <v-btn
          size="small"
          @click="router.push({ path: `/news/post/${id - 1}` })"
          :disabled="id === minID"
        >
          Следующий
          <v-icon end icon="mdi-chevron-right" size="large"></v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
