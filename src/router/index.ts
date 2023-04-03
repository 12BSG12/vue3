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
      component: () => import('../views/reception/ReceptionView.vue'),
    },
    {
      path: '/press-tsentr/novosti',
      name: 'novosti',
      component: () => import('../views/News/NewsView.vue'),
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
      path: `/svedeniya-ob-obrazovatelьnoй-organizaцii/osnovnye-svedeniя`,
      name: 'basicInfo',
      component: () => import('../views/BasicInfo/BasicInfo.vue'),
    },
    {
      path: '/CDOS/o-nashem-tsentre',
      name: 'aboutOutCenter',
      component: () => import('../views/AboutOurCenter/AboutOurCenter.vue'),
    },
    {
      path: `/obrazov/dovuzovskaya-podgotovka`,
      name: 'preUniversityTraining',
      component: () => import('../views/PreUniversityTraining/PreUniversityTraining.vue'),
    },
    {
      path: `/nauka-i-innovatsii/nauchnye-zhurnaly`,
      name: 'scientificJournals',
      component: () => import('../views/ScientificJournals/ScientificJournals.vue'),
    },
    {
      path: '/nauka-i-innovatsii/sborniki',
      name: 'ourCollections',
      component: () => import('../views/OurCollections/OurCollections.vue'),
    },
    {
      path: '/universitet/obshchie-svedeniya/rekvizity',
      name: 'requisites',
      component: () => import('../views/Requisites/UnRequisites.vue'),
    },
    {
      path: '/universitet/obshchie-svedeniya/missiya',
      name: 'mission',
      component: () => import('../views/Mission/UnMission.vue'),
    },
    {
      path: '/universitet/obshchie-svedeniya/istoriya',
      name: 'history',
      component: () => import('../views/History/UnHistory.vue'),
    },
    {
      path: '/universitet/obshchie-svedeniya/spravochnik-CHF-PNIPU',
      name: 'phonebook',
      component: () => import('../views/Phonebook/PhoneBook.vue'),
    },
    {
      path: `/universitet/fakulьtet-tekhniki,-tekhnologii-i-upravleniya/kafedra-AIIT`,
      name: 'departmentAIIT',
      component: () => import('../views/Department/DepartmentAIIT.vue'),
    },
    {
      path: `/universitet/fakulьtet-tekhniki,-tekhnologii-i-upravleniya/kafedra-EUP`,
      name: 'departmentEUP',
      component: () => import('../views/Department/DepartmentEUP.vue'),
    },
    {
      path: '/:path(.*)*',
      name: '404',
      component: () => import('@/components/404/NotFound.vue'),
    },
  ],
});

export default router;
