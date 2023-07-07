<script setup lang="ts">
import styles from './menuTop.module.scss';
import { ref, watch } from 'vue';
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
  <div :class="[styles.positionMenu, { fixedMenu: scrollY >= 224 }]" ref="container">
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
              <li>
                <RouterLink
                  :to="encodeURI(`/Сведения-об-образовательной-организации/Основные-сведения`)"
                >
                  Основные сведения
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="
                    encodeURI(
                      `/Сведения-об-образовательной-организации/Структура-и-органы-управления-образовательной-организацией`,
                    )
                  "
                >
                  Структура и органы управления образовательной организацией
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="encodeURI('/Сведения-об-образовательной-организации/Документы')">
                  Документы
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="encodeURI('/Сведения-об-образовательной-организации/Образование')">
                  Образование
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="
                    encodeURI(
                      '/Сведения-об-образовательной-организации/Образовательные-стандарты-и-требования',
                    )
                  "
                >
                  Образовательные стандарты и требования
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="
                    encodeURI(
                      '/Сведения-об-образовательной-организации/Руководство.-Педагогический-(научно-педагогический)-состав',
                    )
                  "
                >
                  Руководство. Педагогический (научно-педагогический) состав
                </RouterLink>
              </li>
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
              <li>
                <RouterLink :to="encodeURI('/Университет/Общие-сведения/Миссия')">
                  Миссия
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="encodeURI('/Университет/Общие-сведения/История')">
                  История
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="encodeURI('/Университет/Общие-сведения/Как-нас-найти')">
                  Как нас найти?
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="encodeURI('/Университет/Общие-сведения/Реквизиты')">
                  Реквизиты
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="encodeURI('/Университет/Общие-сведения/Телефонный-справочник-ЧФ-ПНИПУ')"
                >
                  Телефонный справочник ЧФ ПНИПУ
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            Факультет техники, технологии и управления
            <v-icon icon="mdi-chevron-down"></v-icon>
            <ul class="top-[49px] lg:top-[65px]" :class="styles.subMenuV2">
              <li>
                <RouterLink
                  :to="
                    encodeURI(
                      '/Университет/Факультет-техники,-технологии-и-управления/Кафедра-АИИТ',
                    )
                  "
                >
                  Кафедра АИИТ
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="
                    encodeURI('/Университет/Факультет-техники,-технологии-и-управления/Кафедра-ЕУП')
                  "
                >
                  Кафедра ЭУП
                </RouterLink>
              </li>
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
          <li>
            <RouterLink :to="encodeURI('/ЦДОС/О-нашем-центре')">
              Центр дополнительного образования
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="encodeURI('/Образование/Довузовская-подготовка')">
              Довузовская подготовка
            </RouterLink>
          </li>
          <li>
            <a href="https://do.pstu.ru/login/index.php" target="_blank"
              >Электронная информационно-образовательная среда</a
            >
          </li>
        </ul>
      </li>
      <li>
        Наука и инновации
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>
            <RouterLink :to="encodeURI('/Наука-и-инновации/Научные-журналы')">
              Научные журналы
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="encodeURI('/Наука-и-инновации/Наши-сборники')">
              Наши сборники
            </RouterLink>
          </li>
          <li>Электронный каталог библиотеки ЧФ ПНИПУ</li>
          <li>
            <a href="https://elib.pstu.ru/" target="_blank">Научная библиотека ПНИПУ</a>
          </li>
        </ul>
      </li>
      <li>
        Внеучебная деятельность
        <v-icon icon="mdi-chevron-down"></v-icon>
        <ul :class="styles.subMenu">
          <li>Студенческий совет</li>
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
          <li>
            <RouterLink :to="encodeURI('/Пресс-центр/Новости')"> Новости </RouterLink>
          </li>
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
  @apply fixed top-2 right-2 left-2 sm:animate-show md:right-2
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
