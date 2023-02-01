<script setup lang="ts">
import styles from './cart.module.scss';

defineProps<{
  id: number;
  title: string;
  img: string;
  info: {
    date: number;
    month: string;
  };
}>();
</script>

<template>
  <div :class="styles.cart">
    <router-link :to="{ path: `post/${id}` }">
      <div :class="styles.info">
        <span :class="styles.date">{{ info.date }}</span>
        <span :class="styles.month">{{ info.month }}</span>
      </div>
      <div :class="styles.wrapper">
        <div :class="[styles.cardImg, styles.ibg]">
          <img :src="img" />
        </div>
        <div :class="styles.title">
          {{ title }}
        </div>
      </div>
    </router-link>
  </div>
</template>
