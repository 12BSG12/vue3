<script setup lang="ts">
import type { PropType } from 'vue';
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
  createdAt: String,
  tags: Array as PropType<string[]>,
});
</script>
<template>
  <div :class="styles.info">
    <p>
      <CustomLoader v-if="isLoading" class="w-80 h-7" />
      <template v-if="isSuccess">
        <v-icon icon="mdi-calendar-month-outline"></v-icon>
        Опубликовано: {{ createdAt }}
      </template>
    </p>
    <div :class="styles.tags">
      <CustomLoader v-if="isLoading" class="w-14 h-8" />
      <template v-if="isSuccess">
        <router-link to="/" v-for="tag in tags" :key="tag">{{ tag }}</router-link>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
