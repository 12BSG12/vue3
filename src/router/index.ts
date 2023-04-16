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
      name: 'Интернет-приемная',
      component: () => import('../views/reception/ReceptionView.vue'),
    },
    {
      path: `${encodeURI('/Пресс-центр/Новости')}`,
      name: 'Новости',
      component: () => import('../views/News/NewsView.vue'),
    },
    {
      path: `${encodeURI('/Пресс-центр/Новости/')}:title`,
      name: 'Пост',
      component: () => import('../views/post/PostView.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Как-нас-найти')}`,
      name: 'Карта',
      component: () => import('../views/map/MapView.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Основные-сведения')}`,
      name: 'Основные-сведения',
      component: () => import('../views/BasicInfo/BasicInfo.vue'),
    },
    {
      path: `${encodeURI('/ЦДОС/О-нашем-центре')}`,
      name: 'О-нашем-центре',
      component: () => import('../views/AboutOurCenter/AboutOurCenter.vue'),
    },
    {
      path: `${encodeURI('/Образование/Довузовская-подготовка')}`,
      name: 'Довузовская-подготовка',
      component: () => import('../views/PreUniversityTraining/PreUniversityTraining.vue'),
    },
    {
      path: `${encodeURI('/Наука-и-инновации/Научные-журналы')}`,
      name: 'Научные-журналы',
      component: () => import('../views/ScientificJournals/ScientificJournals.vue'),
    },
    {
      path: `${encodeURI('/Наука-и-инновации/Наши-сборники')}`,
      name: 'Наши-сборники',
      component: () => import('../views/OurCollections/OurCollections.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Реквизиты')}`,
      name: 'Реквизиты',
      component: () => import('../views/Requisites/UnRequisites.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Миссия')}`,
      name: 'Миссия',
      component: () => import('../views/Mission/UnMission.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/История')}`,
      name: 'История',
      component: () => import('../views/History/UnHistory.vue'),
    },
    {
      path: `${encodeURI('/Университет/Общие-сведения/Телефонный-справочник-ЧФ-ПНИПУ')}`,
      name: 'Телефонный-справочник-ЧФ-ПНИПУ',
      component: () => import('../views/Phonebook/PhoneBook.vue'),
    },
    {
    path: `${encodeURI('/Университет/Факультет-техники,-технологии-и-управления/Кафедра-АИИТ')}`,
      name: 'Кафедра-АИИТ',
      component: () => import('../views/Department/DepartmentAIIT.vue'),
    },
    {
      path: `${encodeURI('/Университет/Факультет-техники,-технологии-и-управления/Кафедра-ЕУП')}`,
      name: 'Кафедра-ЕУП',
      component: () => import('../views/Department/DepartmentEUP.vue'),
    },
    {
      path: `${encodeURI('/Студенту/Памятка')}`,
      name: 'Памятка',
      component: () => import('../views/Memo/UnMemo.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Структура-и-органы-управления-образовательной-организацией')}`,
      name: 'Структура-и-органы-управления-образовательной-организацией',
      component: () => import('../views/StructureAndManagement/StructureAndManagement.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Документы')}`,
      name: 'Документы',
      component: () => import('../views/Documentation/UnDocumentation.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Образование')}`,
      name: 'Образование',
      component: () => import('../views/Eeducation/UnEducation.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Руководство.-Педагогический-(научно-педагогический)-состав')}`,
      name: 'Руководство.-Педагогический-(научно-педагогический)-состав',
      component: () => import('../views/Employees/UnEmployees.vue'),
    },
    {
      path: `${encodeURI('/Сведения-об-образовательной-организации/Образовательные-стандарты-и-требования')}`,
      name: 'Образовательные-стандарты-и-требования',
      component: () => import('../views/EducationalStandardsAndRequirements/EducationalStandardsAndRequirements.vue'),
    },
    {
      path: '/:path(.*)*',
      name: '404',
      component: () => import('@/components/404/NotFound.vue'),
    },
  ],
});

export default router;
