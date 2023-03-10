import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView,
    },
    {
      path: '/internet-priemnaya',
      name: 'priemnaya',
      component: () =>  import('../views/reception/ReceptionView.vue'),
    },
    {
      path: '/press-tsentr/novosti',
      name: 'novosti',
      component: () =>  import('../views/News/NewsView.vue')
    },
    {
      path: '/press-tsentr/novosti/:title',
      name: 'post',
      component: () => import('../views/post/PostView.vue'),
    },
    {
      path: '/universitet/obshchie-svedeniya/kak-nas-naiti',
      name: 'map',
      component: () => import('../views/map/MapView.vue'),
    },
    {
      path: '/:path(.*)*',
      name: '404',
      component: () => import('@/components/404/NotFound.vue'),
    },
  ],
});

export default router;
