<script setup lang="ts">
import styles from './cart.module.scss';

defineProps<{
  id: number;
  description: string;
  img: string;
  info: {
    date: number;
    month: string;
  };
}>();
</script>

<template>
  <router-link :to="{ path: `post/${id}` }">
    <div :class="styles.cart">
      <div :class="styles.info">
        <span :class="styles.date">{{ info.date }}</span>
        <span :class="styles.month">{{ info.month }}</span>
      </div>
      <img :src="img" />
      <div :class="styles.description">{{ description }}</div>
    </div>
  </router-link>
</template>
