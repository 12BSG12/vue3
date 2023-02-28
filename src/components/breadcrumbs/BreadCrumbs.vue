<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import styles from './breadCrumbs.module.scss';

interface IBreadCrumbs {
  title: string;
  to: string;
}

const route = useRoute();
const router = useRouter();

const breadCrumbs = ref<IBreadCrumbs[]>([]);

const ucFirst = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

watch(
  () => route.path,
  () => {
    breadCrumbs.value = [...new Set(route.path.split('/'))].map((item) => {
      const to = router.getRoutes().find((el) => el.name === item)?.path ?? ''
      
      return {
        title: item === '' ? 'Главная' : ucFirst(CyrillicToTranslit({ preset: 'ru' }).reverse(item, '-')),
        to
      }
    });
  },
);
</script>

<template>
  <ul :class="styles.list" v-if="breadCrumbs.length > 1">
    <li v-for="(item, idx) in breadCrumbs" :key="item.title" disabled>
      <router-link
        :to="item.to"
        :class="breadCrumbs.length - 1 === idx || !item.to ? styles.disabled : ''"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>
