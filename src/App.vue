<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import BottomBtn from './components/BottomBtn.vue';
import BreadCrumbs from './components/breadcrumbs/BreadCrumbs.vue';
import CallbackForm from './components/callbackForm/CallbackForm.vue';
import Footer from './components/footer/Footer.vue';
import Header from './components/header/Header.vue';
import MenuTop from './components/menu/MenuTop.vue';
import QuicklyMenu from './components/menu/QuicklyMenu.vue';

const cbf = ref<InstanceType<typeof CallbackForm> | null>(null);
const toggleForm = () => cbf.value?.toggleForm();
</script>

<template>
  <div class="bg">
    <div class="wrapper">
      <div class="px-3">
        <Header />
        <MenuTop />
        <BreadCrumbs />
        <QuicklyMenu />
      </div>
      <div class="px-3 my-2 ">
        <RouterView />
      </div>
      <BottomBtn :toggleForm="toggleForm" :isShow="cbf?.showForm" />
      <CallbackForm ref="cbf" />
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
  @apply max-w-screen-2xl m-auto overflow-hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
