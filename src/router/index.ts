import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home/HomeView.vue';

const news = {
  template: '<div>news</div>',
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView,
    },
    {
      path: '/press-tsentr/novosti',
      name: 'novosti',
      component: () =>  news
    },
    {
      path: '/press-tsentr/novosti/:title',
      name: 'post',
      component: () => import('../views/post/PostView.vue'),
    },
    {
      path: '/:path(.*)*',
      name: '404',
      component: () => import('@/components/404/NotFound.vue'),
    },
  ],
});

export default router;
