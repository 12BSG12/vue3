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
      path: `${encodeURI('/Интернет-приемная')}`,
      name: 'priemnaya',
      component: () => import('../views/reception/ReceptionView.vue'),
    },
    {
      path: `${encodeURI('/Пресс-центр/Новости')}`,
      name: 'novosti',
      component: () => import('../views/News/NewsView.vue'),
    },
    {
      path: `${encodeURI('/Пресс-центр/Новости/')}:title`,
      name: 'post',
      component: () => import('../views/post/PostView.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Как-нас-найти?')}`,
      name: 'map',
      component: () => import('../views/map/MapView.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Основные-сведения')}`,
      name: 'basicInfo',
      component: () => import('../views/BasicInfo/BasicInfo.vue'),
    },
    {
      path: `${encodeURI('/ЦДОС/О-нашем-центре')}`,
      name: 'aboutOutCenter',
      component: () => import('../views/AboutOurCenter/AboutOurCenter.vue'),
    },
    {
      path: `${encodeURI('/Образование/Довузовская-подготовка')}`,
      name: 'preUniversityTraining',
      component: () => import('../views/PreUniversityTraining/PreUniversityTraining.vue'),
    },
    {
      path: `${encodeURI('/Наука-и-инновации/Научные-журналы')}`,
      name: 'scientificJournals',
      component: () => import('../views/ScientificJournals/ScientificJournals.vue'),
    },
    {
      path: `${encodeURI('/Наука-и-инновации/Наши-сборники')}`,
      name: 'ourCollections',
      component: () => import('../views/OurCollections/OurCollections.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Реквизиты')}`,
      name: 'requisites',
      component: () => import('../views/Requisites/UnRequisites.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Миссия')}`,
      name: 'mission',
      component: () => import('../views/Mission/UnMission.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/История')}`,
      name: 'history',
      component: () => import('../views/History/UnHistory.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Телефонный-справочник-ЧФ-ПНИПУ')}`,
      name: 'phonebook',
      component: () => import('../views/Phonebook/PhoneBook.vue'),
    },
    {
    path: `${encodeURI('/Университет/Факультет-техники,-технологии-и-управления/Кафедра-АИИТ')}`,
      name: 'departmentAIIT',
      component: () => import('../views/Department/DepartmentAIIT.vue'),
    },
    {
      path: `${encodeURI('/Университет/Факультет-техники,-технологии-и-управления/Кафедра-ЕУП')}`,
      name: 'departmentEUP',
      component: () => import('../views/Department/DepartmentEUP.vue'),
    },
    {
      path: `${encodeURI('/Студенту/Памятка')}`,
      name: 'memo',
      component: () => import('../views/Memo/UnMemo.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Структура-и-органы-управления-образовательной-организацией')}`,
      name: 'structureAndManagement',
      component: () => import('../views/StructureAndManagement/StructureAndManagement.vue'),
    },
    {
      path: '/:path(.*)*',
      name: '404',
      component: () => import('@/components/404/NotFound.vue'),
    },
  ],
});

export default router;
