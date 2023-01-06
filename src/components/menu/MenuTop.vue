<script setup lang="ts">
import styles from "./menuTop.module.scss";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isActive = ref(false);
</script>

<template>
  <div class="sticky top-5 z-50">
    <div :class="styles.burger" @click="isActive = !isActive">
      <v-btn icon="mdi-menu"></v-btn>
    </div>
    <ui :class="[styles.menu, { show: isActive }]">
      <li>
        <RouterLink to="/">Главная</RouterLink>
      </li>
      <li>
        Университет
        <v-icon icon="mdi-chevron-down"></v-icon>
        <!-- <ui :class="styles.">
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ui> -->
      </li>
      <li>
        Образование
        <v-icon icon="mdi-chevron-down"></v-icon>
      </li>
      <li>
        Наука и инновации
        <v-icon icon="mdi-chevron-down"></v-icon>
      </li>
      <li>
        Внеучебная деятельность
        <v-icon icon="mdi-chevron-down"></v-icon>
      </li>
      <li>
        Пресс-центр
        <v-icon icon="mdi-chevron-down"></v-icon>
      </li>
    </ui>
  </div>
</template>

<style scoped>
.show {
  @apply right-0;
}
</style>
