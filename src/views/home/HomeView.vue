<script setup lang="ts">
import styles from './home.module.scss';
import SlideItem from './SlideItem.vue';
import CartItem from '@/components/cart/CartItem.vue';
import BannerItem from '@/components/banners/BannerItem.vue';
import { useWindow } from '@/hooks/useWindow';
import { getPosts } from '@/api';

import { useQuery } from 'vue-query';
import { watch, reactive, ref } from 'vue';

const store = reactive({
  slides: [
    {
      title: 'lore;dld;l;dld;l;dld;l;dldddddddwwwwwwwwwwwwwwwwwwwwwwwwww',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      href: '/',
    },
    {
      title: '123',
      src: 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg',
      href: '/',
    },
  ],
});

const { width } = useWindow();
const density = ref<'default' | 'comfortable' | 'compact'>('default');
const totalVisible = ref(7);
const page = ref(1);

const { data: postsData } = useQuery('posts', getPosts, {
  select: (data) => data.data,
});

watch(width, (newValue) => {
  newValue <= 640 ? (density.value = 'compact') : (density.value = 'default');
  newValue <= 400 ? (totalVisible.value = 4) : (totalVisible.value = 7);
});

</script>
<template>
  <div :class="styles.home">
    <v-carousel :class="styles.carousel" cycle height="400" show-arrows="hover" hide-delimiters>
      <v-carousel-item v-for="slide in store.slides" :key="slide.title">
        <div :class="styles.carouselItem">
          <SlideItem :title="slide.title" :img-src="slide.src" :href="slide.href" />
        </div>
      </v-carousel-item>
    </v-carousel>
    <div :class="styles.content">
      <div :class="styles.news">
        <h2>Наши новости</h2>
        <v-divider></v-divider>
        <div :class="styles.cart">
          <CartItem
            v-for="post in postsData"
            :key="post.id"
            :id="post.id"
            :title="post.attributes.title"
            :img="'https://strapi4f.onrender.com' + post.attributes.img.data.attributes.url"
            :info="{
              date: new Date(post.attributes.createdAt).getDate(),
              month: new Date('2023-01-31T08:13:34.185Z')
                .toLocaleString('ru', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
                .split(' ')[1]
                .slice(0, 3),
            }"
          />
        </div>
        <div :class="styles.pagination">
          <v-pagination
            v-model="page"
            :length="15"
            :total-visible="totalVisible"
            rounded="circle"
            :density="density"
            variant="elevated"
            active-color="black"
          ></v-pagination>
        </div>
      </div>
      <div :class="styles.banners">
        <div :class="styles.bannerTitle">
          <p>Инфоблок</p>
          <BannerItem
            height="300"
            img-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            href="/"
          />
        </div>
        <BannerItem
          height="300"
          img-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          href="/"
        />
        <BannerItem
          height="300"
          img-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          href="/"
        />
      </div>
    </div>
  </div>
</template>
