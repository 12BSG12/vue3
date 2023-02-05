<script setup lang="ts">
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useViewsStore } from '@/stores';
import { ref, Transition } from 'vue';

const { alertsData } = useViewsStore();

const container = ref<HTMLElement | null>(null);

useOnClickOutside(container, () => {
  alertsData.length = 0;
});
</script>

<template>
  <Transition name="slide-fade">
    <div
      v-if="alertsData.length"
      ref="container"
      class="flex flex-col gap-1 fixed bottom-2 right-20 z-50"
    >
      <div
        class="bg-red-100 rounded-lg px-4 py-3 shadow-md text-red-900"
        v-for="alert in alertsData"
        :key="alert.text"
      >
        <div class="flex">
          <div class="py-1">
            <v-icon
              class="fill-current text-red-500 mr-4"
              size="large"
              icon="mdi-alert-circle-outline"
            ></v-icon>
          </div>
          <div>
            <p class="font-bold">{{ alert.title }}</p>
            <p class="text-sm">{{ alert.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
