<script setup lang="ts">
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
  subtitle: String,
});
</script>

<template>
  <CustomLoader v-if="isLoading" class="w-64 mx-auto h-8 mb-4" />
  <div v-if="isSuccess" :class="styles.subtitle">{{ subtitle }}</div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
