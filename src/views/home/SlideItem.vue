<script setup lang="ts">
import styles from "./home.module.scss";

defineProps<{
  title: string;
  imgSrc: string;
  href: string;
}>();
</script>
<template>
  <div :class="styles.slide">
    <div :class="styles.slideLeft">
      <h3>{{ title }}</h3>
      <v-divider></v-divider>
      <v-btn>
        <a href="#">Подробнее</a>
      </v-btn>
    </div>
    <img :src="imgSrc" />
  </div>
</template>
