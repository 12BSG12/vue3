<script setup lang="ts">
import PostContainer from '@/components/fullPost/PostContainer.vue';
import PostTitle from '@/components/fullPost/PostTitle.vue';
import PostInfo from '@/components/fullPost/PostInfo.vue';
import PostGallery from '@/components/fullPost/PostGallery.vue';
import PostSubtitle from '@/components/fullPost/PostSubtitle.vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { usePost } from './fullPost.service';
import PostNextBtn from '@/components/fullPost/PostNextBtn.vue';
import PostHtmlContent from '@/components/fullPost/PostHtmlContent.vue';

const route = useRoute();
const router = useRouter();

const id = ref<number>(+(route.query.id as string));

const { data, isLoading, isSuccess } = usePost(id);

watch(
  () => route.query.id,
  () => {
    if (!route.query.id) return;
    id.value = +(route.query.id as string);
  },
);

watch(
  () => data.value?.post.title,
  () => {
    if (!data.value?.post.title) return;
    router.push({ path: `${encodeURI('/Пресс-центр/Новости')}/${data.value?.post.title}`, query: route.query });
  },
);
</script>

<template>
  <PostContainer>
    <PostTitle :id="id" :title="data?.post.title" :isLoading="isLoading" :isSuccess="isSuccess" />
    <v-divider></v-divider>
    <PostInfo
      :tags="data?.post.tags"
      :createdAt="data?.post.createdAt"
      ce
      :isLoading="isLoading"
      :isSuccess="isSuccess"
    />
    <PostSubtitle :subtitle="data?.post.subtitle" :isLoading="isLoading" :isSuccess="isSuccess" />
    <PostHtmlContent :content="data?.post.content" :isLoading="isLoading" :isSuccess="isSuccess" />
    <PostGallery :imgs="data?.post.contentimgs" :isLoading="isLoading" :isSuccess="isSuccess" />
    <PostNextBtn :id="id" :title="data?.post.title" />
  </PostContainer>
</template>
