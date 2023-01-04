<script setup lang="ts">
import styles from "./menuTop.module.scss";
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const store = reactive({});
</script>

<template>
  <div :class="styles.burger">
    <v-btn icon="mdi-menu"></v-btn>
  </div>
  <ui :class="styles.menu">
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
</template>
