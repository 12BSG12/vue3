<script setup lang="ts">
import TimeTable from '../timetable/TimeTable.vue';
</script>

<template>
  <ul :class="styles.menu">
    <router-link :class="styles.item" :to='encodeURI(`/Сведения-об-образовательной-организации/Основные-сведения`)'>
      <div :class="styles.itemInner">
        <img src="@/assets/pc.svg" />
        Сведение об образовательной организаци
      </div>
    </router-link>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="https://pstu.ru/enrollee/speciality/filials/chf/" target="_blank">
        <img src="@/assets/person.svg" />
        Абитуриенту
      </a>
    </li>
    <router-link :class="styles.item" :to="encodeURI('/Студенту/Памятка')">
      <div :class="styles.itemInner">
        <img src="@/assets/student.svg" />
        Студенту
      </div>
    </router-link>
    <router-link :class="styles.item" :to="encodeURI('/ЦДОС/О-нашем-центре')">
      <div :class="styles.itemInner">
        <img src="@/assets/bag.svg" />
        Центр дополнительного образования специалисная
      </div>
    </router-link>
    <li :class="styles.item">
      <span :class="styles.itemInner" href="#">
        <img src="@/assets/calendar.svg" />
        Расписание занятий
      </span>
      <TimeTable />
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="https://do.pstu.ru/login/index.php" target="_blank">
        <img src="@/assets/book.svg" />
        Электронная информационно-образовательная среда
      </a>
    </li>
    <router-link :class="styles.item" :to="encodeURI('/Интернет-приемная')">
      <div :class="styles.itemInner">
        <img src="@/assets/email.svg" />
        Интернет-приемная
      </div>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped module="styles" src="./quicklyMenu.module.scss"></style>
