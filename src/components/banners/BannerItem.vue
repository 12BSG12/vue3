<script setup lang="ts">
defineProps<{
  imgAndUrl: {
    img: string;
    url: string;
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
    <v-carousel-item :src="item.img" v-for="item in imgAndUrl" :key="item.img" cover>
      <a :href="item.url" target="_blank" />
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss" module="styles" scoped src="./banner.module.scss"></style>
