<script setup lang="ts">
import { useViewsStore } from '@/stores';
import { useRouter } from 'vue-router';

const props = defineProps<{
  id: number,
  title: string | undefined;
}>();

const router = useRouter();
const { minID } = useViewsStore();

const handleClickOnNextBtn = () => {
  router.push({
    path: `/press-tsentr/novosti/${props.title}`,
    query: { id: props.id - 1 },
  });
};
</script>

<template>
  <div :class="styles.nextBtn">
    <v-btn size="small" @click="handleClickOnNextBtn" :disabled="id === minID">
      Следующий
      <v-icon end icon="mdi-chevron-right" size="large"></v-icon>
    </v-btn>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./fullPost.module.scss"></style>
