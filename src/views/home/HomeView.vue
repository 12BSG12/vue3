<script setup lang="ts">
import MyCarousel from './components/Carousel/MyCarousel.vue';
import MyBanners from './components/Banners/MyBanners.vue';
import MyNews from './components/News/MyNews.vue';
</script>

<template>
  <div class="my-2">
    <MyCarousel />
    <div class="lg:flex justify-between">
      <MyNews />
      <MyBanners />
    </div>
  </div>
</template>
