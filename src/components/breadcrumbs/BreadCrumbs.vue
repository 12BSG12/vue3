<script setup lang="ts">
import { reactive } from "vue";
import styles from "./breadCrumbs.module.scss";

const state = reactive({
  items: [
    {
      title: "Dashboard",
      disabled: false,
      href: "breadcrumbs_dashboard",
    },
    {
      title: "Link 1",
      disabled: false,
      href: "breadcrumbs_link_1",
    },
    {
      title: "Link 2",
      disabled: true,
      href: "breadcrumbs_link_2",
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
