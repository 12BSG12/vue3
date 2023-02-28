<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>

<template>
  <v-dialog v-model="dialog" activator="parent" class="w-80">
    <div class="bg-white w-full mx-auto rounded-lg h-[400px] relative p-3">
      <h2>Расписание</h2>
      
      <span class="absolute bottom-0 right-0">
        <v-btn variant="text" @click="dialog = false">Назад</v-btn>
      </span>
    </div>
  </v-dialog>
</template>

<style scoped></style>
