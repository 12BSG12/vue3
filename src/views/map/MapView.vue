<script setup lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps';

const coordinates = [56.76446938396302, 54.159877347983766];
const zoom = 17;
const controls = ['zoomControl'];
const detailedControls = { zoomControl: { position: { right: 10, top: 100 } } };
const yandexApiKey = import.meta.env.VITE_RECAPTCHA_YANDEX_API_KEY;

const settings = {
  apiKey: yandexApiKey, // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
};
</script>

<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">КАК НАС НАЙТИ?</h2>
        <v-divider></v-divider>
        <YandexMap
          class="mt-5"
          :settings="settings"
          :coordinates="coordinates"
          :zoom="zoom"
          :controls="controls"
          :detailedControls="detailedControls"
        >
          <YandexMarker
            :coordinates="[56.76458217261566, 54.160146922746826]"
            :marker-id="1"
            :options="{ preset: 'islands#blueEducationIcon' }"
          ></YandexMarker>
        </YandexMap>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yandex-container {
  height: 600px;
}
</style>
