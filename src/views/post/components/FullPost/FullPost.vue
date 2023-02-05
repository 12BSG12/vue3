<script setup lang="ts">
import { useViewsStore } from '@/stores';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { usePost } from './fullPost.service';

const route = useRoute();
const router = useRouter();

const id = ref<number>(+route.params.id);
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
  <div class="mt-5">
    <v-btn color="primary" @click="router.go(-1)" class="mr-2"> Назад </v-btn>
    <v-btn
      color="primary"
      @click="router.push({ path: `/post/${id - 1}` })"
      :disabled="id === minID"
    >
      Следующий
    </v-btn>
    <h1 class="mt-2 font-semibold">{{ data?.post.title }}</h1>
    <div class="mt-2 font-semibold">{{ data?.post.createdAt }}</div>
    <div class="mt-2 font-semibold flex gap-1">
      <div v-for="tag in data?.post.tags" :key="tag">{{ tag }}</div>
    </div>
    <div class="mt-2 font-semibold">{{ data?.post.subtitle }}</div>
    <div v-html="data?.post.content"></div>
    <div class="mt-2 font-semibold grid grid-cols-3 gap-5">
      <div class="h-80" v-for="img in data?.post.contentimgs" :key="img">
        <img class="w-full h-full object-cover" :src="img" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
