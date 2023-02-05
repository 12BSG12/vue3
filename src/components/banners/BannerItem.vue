<script setup lang="ts">
defineProps<{
  imgsAndUrl: {
    img: string;
    link: string;
  }[];
}>();
</script>

<template>
  <v-carousel
    :class="styles.banner"
    cycle
    :height="300"
    :show-arrows="false"
    hide-delimiter-background
  >
    <v-carousel-item :src="item.img" v-for="item in imgsAndUrl" :key="item.img" cover>
      <a :href="item.link" target="_blank" />
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss" module="styles" scoped src="./banner.module.scss"></style>
