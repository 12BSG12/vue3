<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{
  id: number;
  title: string;
  img: string;
  info: {
    date: string;
    month: string;
  };
}>();

const router = useRouter();
</script>

<template>
  <div :class="styles.cart">
    <router-link
      :to="{ path: `${encodeURI(`/Пресс-центр/Новости/${title}`)}` }"
      @click="router.push({ path: `${encodeURI(`/Пресс-центр/Новости/${title}`)}`, query: { id } })"
    >
      <div :class="styles.info">
        <span :class="styles.date">{{ info.date }}</span>
        <span :class="styles.month">{{ info.month }}</span>
      </div>
      <img :src="img" />
      <div :class="styles.title">
        {{ title }}
      </div>
    </router-link>
  </div>
</template>

<style scoped module="styles" src="./cart.module.scss"></style>
