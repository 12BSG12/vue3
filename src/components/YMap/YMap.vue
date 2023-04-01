<script setup lang="ts">
import { YandexMap, YandexMarker } from 'vue-yandex-maps';

const coordinates = [56.76446938396302, 54.159877347983766];
const zoom = 17;
const controls = ['zoomControl'];
const detailedControls = { zoomControl: { position: { right: 10, top: 100 } } };
</script>

<template>
  <YandexMap
    class="mt-5"
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
</template>

<style scoped>
.yandex-container {
  height: 600px;
}
</style>
