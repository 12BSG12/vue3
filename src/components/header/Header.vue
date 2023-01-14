<script setup lang="ts">
import styles from './header.module.scss';
</script>

<template>
  <header :class="styles.header">
    <div :class="styles.topBtn">
      <v-btn icon="mdi-eye" />
      <v-btn prepend-icon="mdi-arrange-send-backward">
        <a href="https://pnipu.ru/index.php/ru/" target="_black">Предыдущая версия сайта</a>
      </v-btn>
    </div>
    <div :class="styles.info">
      <img src="@/assets/logo.svg" />
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
