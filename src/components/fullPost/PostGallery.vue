<script setup lang="ts">
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { ref, type PropType } from 'vue';
import CustomLoader from '../CustomLoader.vue';

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  isSuccess: {
    type: Boolean,
    default: true,
  },
  imgs: Array as PropType<{src: string}[]>
})

const container = ref<HTMLElement | null>(null);

useOnClickOutside(container, () => {
  document.body.classList.remove('hideScroll');
});

const onClick = () => {
  document.body.classList.toggle('hideScroll');
};
</script>

<template>
  <div :class="styles.imgs" ref="container">
    <template v-if="isLoading">
      <CustomLoader class="h-64" v-for="i in 4" :key="i" />
    </template>
    <template v-if="isSuccess">
      <a
        v-for="img in imgs"
        :key="img.src"
        data-fancybox="gallery"
        :href="img.src"
        @click="onClick"
      >
        <v-img class="rounded-lg" :aspect-ratio="1" :src="img.src" cover></v-img>
      </a>
    </template>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
