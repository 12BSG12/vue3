<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="mt-5">
    <v-btn color="primary" @click="router.go(-1)" class="mr-2"> Назад </v-btn>
    <v-btn
      color="primary"
      @click="router.push({ path: `/post/${+route.params['post_id'] + 1}` })"
      :disabled="route.params['post_id'] === '9'"
    >
      Следующий
    </v-btn>
    <h1 class="mt-2 font-semibold">какой-то текст поста №{{ route.params['post_id'] }}</h1>
  </div>
</template>
