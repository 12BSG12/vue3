<script setup lang="ts">
defineProps<{
  id: number;
  title: string;
  img: string;
  info: {
    date: string;
    month: string;
  };
}>();
</script>

<template>
  <div :class="styles.cart">
    <router-link :to="{ path: `news/post/${id}` }">
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
