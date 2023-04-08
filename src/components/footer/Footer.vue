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
            <router-link :to="encodeURI('/Университет/Общие-сведения/Как-нас-найти')">
              <v-btn prepend-icon="mdi-routes " variant="text"> Схема проезда </v-btn>
            </router-link>
          </li>
          <li>
            <router-link :to="encodeURI('/Сведения-об-образовательной-организации/Основные-сведения')">
              <v-btn prepend-icon="mdi-information-outline" variant="text">
                <span class="whitespace-pre-wrap">Время работы</span></v-btn
              >
            </router-link>
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
            <router-link :to="encodeURI('/Сведения-об-образовательной-организации/Основные-сведения')">
              <v-btn prepend-icon="mdi-information-outline" variant="text">
                <span class="whitespace-pre-wrap"
                  >Сведения об образовательной организации</span
                ></v-btn
              >
            </router-link>
          </li>
          <li>
            <router-link :to="encodeURI('/Университет/Общие-сведения/Телефонный-справочник-ЧФ-ПНИПУ')">
              <v-btn prepend-icon="mdi-notebook-outline" variant="text"
                ><a href="#">Телефонный справочник ЧФ ПНИПУ</a></v-btn
              >
            </router-link>
          </li>
          <li>
            <router-link :to="encodeURI('/Университет/Общие-сведения/Реквизиты')">
              <v-btn prepend-icon="mdi-information-outline" variant="text">
                <span class="whitespace-pre-wrap">Реквизиты ЧФ ПНИПУ</span></v-btn
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div :class="styles.copyright">© 2023. Все права защищены.</div>
  </footer>
</template>
