<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  isSuccess: {
    type: Boolean,
    default: true,
  },
  content: String
});

</script>
<template>
  <CustomLoader v-if="isLoading" class="h-32" />
  <div v-if="isSuccess" v-html="content"></div>
</template>
