<script setup lang="ts">
import { ref } from 'vue';
import styles from './header.module.scss';

const isActive = ref(false);
const onToggle = ref(false);
const search = ref('');
</script>

<template>
  <header :class="styles.header">
    <div :class="[styles.topBtn, { showMenu: isActive }]">
      <div :class="styles.leftBtn">
        <v-btn id="specialButton" icon="mdi-eye"/>
        <v-btn prepend-icon="mdi-arrange-send-backward" >
          <a href="https://pnipu.ru/index.php/ru/" target="_black">Предыдущая версия сайта</a>
        </v-btn>
      </div>
      <div :class="styles.rightBtn">
        <div :class="styles.social">
          <v-btn icon="mdi-account-group" size="x-small" variant="outlined" />
          <v-btn icon="mdi-message-processing " size="x-small" variant="outlined" />
          <v-btn icon="mdi-youtube" size="x-small" variant="outlined" />
        </div>
        <form :class="{ activeForm: onToggle }">
          <input v-model="search" placeholder="Введите текст для поиска..." />
          <span @click="onToggle = !onToggle">
            <v-icon size="x-large" icon="mdi-search-web"></v-icon>
          </span>
        </form>
      </div>
    </div>
    <span :class="styles.menuDown" @click="isActive = !isActive">
      <v-btn :class="{ rotate: isActive }" icon="mdi-menu-down" size="xl-small"></v-btn>
    </span>
    <div :class="styles.info">
      <router-link to="/">
        <img src="@/assets/logo.svg" />
      </router-link>

      <ul :class="styles.list">
        <li>
          <v-icon icon="mdi-map-marker" size="small"></v-icon>
          <a
            href="https://yandex.ru/maps/20243/chaikovsky/house/ulitsa_lenina_73/YU0YdwJpQEcEQFtsfXt3dXhgZg==/?ll=54.159922%2C56.764432&z=16"
            target="_black"
          >
            г. Чайковский Пермский край <br />
            ул. Ленина, 73
          </a>
        </li>
        <li>
          <v-icon icon="mdi-phone" size="small"></v-icon>
          <a href="tel:+73424134456">+7 (34241) 3-44-56</a>
        </li>
        <li>
          <v-icon icon="mdi-email" size="small"></v-icon>
          <a href="mailto:ok@pnipu.ru?subject=Вопрос">ok@pnipu.ru</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
.showMenu {
  @apply relative top-0;
}

.activeForm {
  @apply w-72;
  span {
    @apply px-2 bg-light-gray rounded-l-none;
  }
  input {
    @apply visible;
  }
}

.rotate {
  @apply -rotate-180;
}
</style>
