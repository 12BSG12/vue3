<script setup lang="ts">
import { useScroll } from '@/hooks/useScroll';
import { Transition } from 'vue';

const { scrollY, scrollToTop } = useScroll();

defineProps({
  toggleForm: {
    type: Function,
    required: true,
  },
  isShow: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="btn">
    <v-btn :icon="isShow ? 'mdi-window-close' : 'mdi-message'" @click="toggleForm" color="blue-grey"></v-btn>
    <Transition name="slide-fade">
      <v-btn
        v-if="scrollY >= 200"
        icon="mdi-arrow-up"
        color="blue-grey"
        @click="scrollToTop"
      ></v-btn>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @apply fixed bottom-0 right-0 flex flex-col mr-2 mb-2 z-50;
  button {
    @apply mb-2 last:mb-0 first:transition-all ease-out duration-300;
  }
}
</style>
