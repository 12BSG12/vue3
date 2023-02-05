<script setup lang="ts">
defineProps<{
  title: string;
  imgSrc: string;
  href: string;
}>();
</script>
<template>
  <div :class="styles.slide">
    <div :class="styles.slideLeft">
      <h3>{{ title }}</h3>
      <v-divider></v-divider>
      <router-link :to="href"><v-btn>Подробнее</v-btn></router-link>
    </div>
    <img :src="imgSrc" />
  </div>
</template>

<style lang="scss" module="styles" scoped src="./carousel.module.scss"></style>
