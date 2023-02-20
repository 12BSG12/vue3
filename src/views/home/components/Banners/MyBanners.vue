<script setup lang="ts">
import BannerItem from '@/components/banners/BannerItem.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import { useBanners } from './banners.service';

const { data, isLoading, isSuccess } = useBanners();
</script>

<template>
  <div :class="styles.banners">
    <CustomLoader v-if="isLoading" class="h-[300px]" />
    <template v-if="isSuccess">
      <BannerItem
        v-for="banner in data?.banners"
        :key="banner.id"
        :imgsAndUrl="banner.imgsAndUrl"
      />
    </template>
  </div>
</template>

<style lang="scss" module="styles" scoped src="./banners.module.scss"></style>
