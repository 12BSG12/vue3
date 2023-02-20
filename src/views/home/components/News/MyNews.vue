<script setup lang="ts">
import CartItem from '@/components/cart/CartItem.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import { useWindow } from '@/hooks/useWindow';
import { ref, watch } from 'vue';
import { usePosts } from './news.service';

const page = ref(1);

const { data, isLoading, isSuccess } = usePosts(page);

const totalVisible = ref(7);

const { width } = useWindow();
const density = ref<'default' | 'comfortable' | 'compact'>('default');

watch(width, (newValue) => {
  newValue <= 640 ? (density.value = 'compact') : (density.value = 'default');
  newValue <= 400 ? (totalVisible.value = 4) : (totalVisible.value = 7);
});
</script>

<template>
  <div :class="styles.wrapper">
    <div :class="styles.news">
      <h2>Наши новости</h2>
      <v-divider></v-divider>
      <div :class="styles.cart">
        <template v-if="isLoading">
          <CustomLoader class="h-[270px]" v-for="i in 3" :key="i" />
        </template>
        <template v-if="isSuccess">
          <CartItem
            v-for="post in data?.posts"
            :key="post.id"
            :id="post.id"
            :title="post.title"
            :img="post.img"
            :info="post.info"
          />
        </template>
      </div>
    </div>
    <div :class="styles.pagination" v-if="(data?.meta.pagination.total ?? 1) > 9">
      <v-pagination
        v-model="page"
        :length="data?.meta.pagination.pageCount"
        :total-visible="totalVisible"
        rounded="circle"
        :density="density"
        variant="elevated"
        active-color="black"
      ></v-pagination>
    </div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./news.module.scss"></style>
