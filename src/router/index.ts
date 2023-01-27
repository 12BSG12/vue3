import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/post/:post_id',
      name: 'post',
      component: () => import('../views/post/PostView.vue'),
    },
  ],
});

export default router;
