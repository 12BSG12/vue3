<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BreadCrumbs from "./components/breadcrumbs/BreadCrumbs.vue";
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";
import MenuTop from "./components/menu/MenuTop.vue";
import QuicklyMenu from "./components/menu/QuicklyMenu.vue";
</script>

<template>
  <div class="bg">
    <div class="wrapper">
      <div class="px-2">
        <Header msg="You did it!" />
        <MenuTop />
        <BreadCrumbs />
        <QuicklyMenu />
      </div>
      <div class="content">
        <RouterView />
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.bg {
  @apply relative before:absolute bg-slate-200 left-0 right-0 bottom-0 top-0;
}
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  @apply max-w-screen-2xl m-auto;
}
.content {
  @apply px-2 my-2;
}
</style>
