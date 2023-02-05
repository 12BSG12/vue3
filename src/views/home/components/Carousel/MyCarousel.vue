<script setup lang="ts">
import CustomLoader from '@/components/CustomLoader.vue';
import { useSlides } from './carousel.service';
import CarouselItem from './CarouselItem.vue';

const { data, isLoading } = useSlides();
</script>

<template>
  <CustomLoader :class="styles.loader" v-if="isLoading" />
  <v-carousel
    v-else
    :class="styles.carousel"
    cycle
    height="400"
    show-arrows="hover"
    hide-delimiters
  >
    <v-carousel-item v-for="slide in data?.slides" :key="slide.id">
      <div :class="styles.carouselItem">
        <CarouselItem :title="slide.title" :img-src="slide.img" :href="slide.link" />
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss" module="styles" src="./carousel.module.scss"></style>
