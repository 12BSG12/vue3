import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
import router from './router';
import directives from '@/directives';

import './main.scss';
import vuetify from './plugins/vuetify';

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueQueryPlugin);

app.mount('#app');
