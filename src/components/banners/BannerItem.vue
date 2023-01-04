<script setup lang="ts">
import styles from "./banner.module.scss";
defineProps<{
  height: string | number;
  href: string;
  imgSrc: string;
}>();
</script>

<template>
  <v-carousel
    :class="styles.banner"
    cycle
    :height="height"
    :show-arrows="false"
    hide-delimiter-background
  >
    <a :href="href">
      <v-carousel-item :src="imgSrc" cover> </v-carousel-item>
    </a>
  </v-carousel>
</template>
