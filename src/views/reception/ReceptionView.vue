<script setup lang="ts">
import CustomForm from '@/components/callbackForm/CustomForm.vue';
import AnswersOnQuestions from './components/Questions/AnswersOnQuestions.vue'
</script>

<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">ИНТЕРНЕТ-ПРИЕМНАЯ</h2>
        <v-divider></v-divider>
        <CustomForm class="max-w-lg mx-auto my-4"/>
      </div>
    </div>
    <AnswersOnQuestions />
  </div>
</template>

