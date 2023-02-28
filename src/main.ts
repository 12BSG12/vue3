import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import YmapPlugin from 'vue-yandex-maps';

import App from './App.vue';
import router from './router';
import directives from '@/directives';

import './main.scss';
import vuetify from './plugins/vuetify';

const app = createApp(App);
const yandexApiKey = import.meta.env.VITE_YANDEX_API_KEY;

const settings = {
  apiKey: yandexApiKey, // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
};

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueQueryPlugin);
app.use(YmapPlugin, settings);

app.mount('#app');
