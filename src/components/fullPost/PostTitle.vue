<script setup lang="ts">
import { useViewsStore } from '@/stores';
import { useRouter } from 'vue-router';
import CustomLoader from '../CustomLoader.vue';

const props = defineProps({
  id: Number,
  isLoading: {
    type: Boolean,
    default: false,
  },
  isSuccess: {
    type: Boolean,
    default: true,
  },
  title: String
});

const router = useRouter();

const { maxID } = useViewsStore();

const handleClickOnPrevBtn = () => {
  if (!props.id) return;
  router.push({
    path: `/press-tsentr/novosti/${props.title}`,
    query: { id: props.id + 1 },
  });
};
</script>

<template>
  <div :class="styles.title">
    <CustomLoader v-if="isLoading" class="w-28 h-7" />
    <h1 v-if="isSuccess">{{ title }}</h1>
    <v-btn
      v-if="id"
      prepend-icon="mdi-arrow-u-left-top"
      size="small"
      @click="handleClickOnPrevBtn"
      :disabled="id === maxID"
    >
      Назад
    </v-btn>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
