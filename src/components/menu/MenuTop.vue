<script setup lang="ts">
import styles from './menuTop.module.scss';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useScroll } from '@/hooks/useScroll';

const isActive = ref(false);
const container = ref<HTMLElement | null>(null);
useOnClickOutside(container, () => {
  isActive.value = false;
});
const { scrollY } = useScroll();
</script>

<template>
  <div :class="[styles.positionMenu, { fixedMenu: scrollY >= 300 }]" ref="container">
    <div :class="styles.burger" @click="isActive = !isActive">
      <v-btn icon="mdi-menu"></v-btn>
    </div>
    <ul :class="[styles.menu, { show: isActive }]">
      <RouterLink to="/">
        <li>Главная</li>
      </RouterLink>
      <li>
        Университет
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>
            Сведения об образовательной организации
            <v-icon icon="mdi-chevron-down"></v-icon>
            <ul class="top-[49px] lg:top-[65px]" :class="styles.subMenuV2">
              <li>Основные сведения</li>
              <li>Структура и органы управления образовательной организацией</li>
              <li>Документы</li>
              <li>Образование</li>
              <li>Образовательные стандарты и требования</li>
              <li>Руководство. Педагогический (научно-педагогический) состав</li>
              <li>Материально-техническое обеспечение и оснащенность образовательного процесса</li>
              <li>Стипендии и меры поддержки обучающихся</li>
              <li>Платные образовательные услуги</li>
              <li>Финансово-хозяйственная деятельность</li>
              <li>Вакантные места для приема (перевода)</li>
              <li>Доступная среда</li>
              <li>Международное сотрудничество</li>
            </ul>
          </li>
          <li>
            Общие сведения
            <v-icon icon="mdi-chevron-down"></v-icon>
            <ul class="top-[41px]" :class="styles.subMenuV2">
              <li>Миссия</li>
              <li>История</li>
              <li>Как нас найти?</li>
              <li>Реквизиты</li>
              <li>Телефонный справочник ЧФ ПНИПУ</li>
            </ul>
          </li>
          <li>
            Факультет техники, технологии и управления
            <v-icon icon="mdi-chevron-down"></v-icon>
            <ul class="top-[49px] lg:top-[65px]" :class="styles.subMenuV2">
              <li>Кафедра 1</li>
              <li>Кафедра 2</li>
              <li>Кафедра 3</li>
              <li>Кафедра 4</li>
            </ul>
          </li>
          <li>
            Подразделения
            <v-icon icon="mdi-chevron-down"></v-icon>
            <ul class="top-10" :class="styles.subMenuV2">
              <li>Библиотека</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Образование
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>Центр дополнительного образования</li>
          <li>Довузовская подготовка</li>
          <li>Электронная информационно-образовательная среда</li>
          <li>Подразделения</li>
        </ul>
      </li>
      <li>
        Наука и инновации
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>Научные журналы</li>
          <li>Наши сборники</li>
          <li>Электронный каталог библиотеки ЧФ ПНИПУ</li>
          <li>Научная библиотека ПНИПУ</li>
        </ul>
      </li>
      <li>
        Внеучебная деятельность
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>Студенческий совет</li>
          <li>Спорт</li>
        </ul>
      </li>
      <li>
        Пресс-центр
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>
            <a href="https://vk.com/chf_pnipu" target="_blank"> Видеогалерея </a>
          </li>
          <li>
            <a href="https://vk.com/chf_pnipu" target="_blank"> Фотогалерея </a>
          </li>
          <RouterLink to="/press-tsentr/novosti">
            <li>Новости</li>
          </RouterLink>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.show {
  @apply right-0;
}
.fixedMenu {
  @apply fixed top-2 right-2 left-0 sm:animate-show md:right-0
  max-w-screen-2xl m-auto z-50;
}
@keyframes show {
  from {
    @apply -top-full;
  }
  to {
    @apply top-2;
  }
}
</style>
