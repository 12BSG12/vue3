<script setup lang="ts">
import { reactive } from "vue";
import styles from "./breadCrumbs.module.scss";

const state = reactive({
  items: [
    {
      title: "Dashboard",
      disabled: false,
      href: "#",
    },
    {
      title: "Link 1",
      disabled: false,
      href: "#",
    },
    {
      title: "Link 2",
      disabled: true,
      href: "#",
    },
  ],
});
</script>

<template>
  <div>
    <ul :class="styles.list">
      <li v-for="item in state.items" :key="item.title" disabled>
        <a :href="item.href" :class="item.disabled && styles.disabled">{{
          item.title
        }}</a>
      </li>
    </ul>
  </div>
</template>
