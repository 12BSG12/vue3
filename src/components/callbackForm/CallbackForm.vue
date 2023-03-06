<script setup lang="ts">
import { ref } from 'vue';
import CustomForm from './CustomForm.vue';

const showForm = ref(false);

const toggleForm = () => (showForm.value = !showForm.value);

defineExpose({
  toggleForm,
  showForm,
});
</script>

<template>
  <Transition name="slide-fade">
    <div class="form" v-if="showForm">
      <div class="formTitle">
        <span>Обратная связь</span>
        <v-icon icon="mdi-window-close" @click="showForm = false"></v-icon>
      </div>
      <CustomForm :withoutRecaptcha="true"/>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.form {
  @apply px-3 py-4 bg-light-gray rounded-lg fixed bottom-2 right-16 z-50 w-72 lg:right-20 lg:w-80;
  .formTitle {
    @apply flex items-center justify-between mb-1;
    i {
      @apply cursor-pointer transition-all ease-in-out duration-200 active:scale-75;
    }
  }
  button {
    @apply mr-4 bg-gray;
  }
}
</style>
