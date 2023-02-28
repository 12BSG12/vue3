<script setup lang="ts">
import TimeTable from '../timetable/TimeTable.vue';
</script>

<template>
  <ul :class="styles.menu">
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/pc.svg" />
        Сведение об образовательной организации
      </a>
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/person.svg" />
        Абитуриенту
      </a>
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/student.svg" />
        Студенту
      </a>
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/bag.svg" />
        Центр дополнительного образования специалистов (ЦДОС)
      </a>
    </li>
    <li :class="styles.item">
      <span :class="styles.itemInner" href="#">
        <img src="@/assets/calendar.svg" />
        Расписание занятий
      </span>
      <TimeTable />
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/book.svg" />
        Электронная информационно-образовательная среда
      </a>
    </li>
    <router-link :class="styles.item" to="/internet-priemnaya">
      <div :class="styles.itemInner">
        <img src="@/assets/email.svg" />
        Интернет-приемная
      </div>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped module="styles" src="./quicklyMenu.module.scss"></style>
