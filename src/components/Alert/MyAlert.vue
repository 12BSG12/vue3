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
        v-for="alert in alertsData"
        :key="alert.text"
        class="rounded-lg px-4 py-3 shadow-md"
        :class="{'text-red-900 bg-red-100': alert.status === 'error', 'text-green-900 bg-green-100': alert.status === 'success'}"
      >
        <div class="flex">
          <div class="py-1">
            <v-icon
              v-if="alert.status === 'error'"
              class="fill-current text-red-500 mr-4"
              size="large"
              icon="mdi-alert-circle-outline"
            ></v-icon>
            <v-icon
              v-else
              class="fill-current text-green-500 mr-4"
              size="large"
              icon="mdi-check-circle-outline"
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
