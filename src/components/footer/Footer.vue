<script setup lang="ts">
import styles from './footer.module.scss';
</script>

<template>
  <footer :class="styles.footer">
    <div :class="styles.row">
      <div :class="styles.item">
        <h3>Нижнее меню</h3>
        <ul :class="styles.list">
          <li>
            <v-btn prepend-icon="mdi-map-search-outline" variant="text"
              ><a href="#">Карта сайта </a></v-btn
            >
          </li>
          <li>
            <router-link to="/universitet/obshchie-svedeniya/kak-nas-naiti">
              <v-btn prepend-icon="mdi-routes " variant="text"> Схема проезда </v-btn>
            </router-link>
          </li>
          <li>
            <v-btn prepend-icon="mdi-clock-outline" variant="text"
              ><a href="#">Время работы </a></v-btn
            >
          </li>
        </ul>
      </div>
      <div :class="styles.item">
        <h3>Приемная-комиссия ЧФ ПНИПУ</h3>
        <ul :class="styles.list">
          <li>
            <v-btn prepend-icon="mdi-phone" variant="text"
              ><a href="tel:+73424134507">+7 (34241) 3-45-07</a></v-btn
            >
          </li>
          <li>
            <v-btn prepend-icon="mdi-email" variant="text"
              ><a href="mailto:ok@pnipu.ru?subject=Вопрос">ok@pnipu.ru</a></v-btn
            >
          </li>
        </ul>
      </div>
      <div :class="styles.item">
        <h3>Полезные ссылки</h3>
        <ul :class="styles.list">
          <li>
            <v-btn prepend-icon="mdi-information-outline" variant="text"
              ><a href="#">Сведения об образовательной<br />организации</a></v-btn
            >
          </li>
          <li>
            <v-btn prepend-icon="mdi-notebook-outline" variant="text"
              ><a href="#">Телефонный справочник ЧФ ПНИПУ</a></v-btn
            >
          </li>
          <li>
            <v-btn prepend-icon="mdi-file-document-outline" variant="text"
              ><a href="#">Реквизиты ЧФ ПНИПУ</a></v-btn
            >
          </li>
        </ul>
      </div>
    </div>
    <div :class="styles.copyright">© 2023. Все права защищены.</div>
  </footer>
</template>
