<script setup lang="ts">
import BannerItem from '@/components/banners/BannerItem.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import { useBanners } from './banners.service';

const { data, isLoading } = useBanners();
</script>

<template>
  <div :class="styles.banners">
    <template v-if="isLoading">
      <CustomLoader class="h-[300px]" v-for="i in 3" :key="i" />
    </template>
    <BannerItem v-else v-for="banner in data?.banners" :key="banner.id" :imgsAndUrl="banner.imgsAndUrl" />
  </div>
</template>

<style lang="scss" module="styles" scoped src="./banners.module.scss"></style>
