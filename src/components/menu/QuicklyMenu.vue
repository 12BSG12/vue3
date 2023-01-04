<script setup lang="ts">
import styles from "./quicklyMenu.module.scss";
</script>

<template>
  <ul :class="styles.menu">
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/pc.svg" />
        Сведение об образовательной организации
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/person.svg" />
        Абитуриенту
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/student.svg" />
        Студенту
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/bag.svg" />
        Центр дополнительного образования специалистов (ЦДОС)
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/calendar.svg" />
        Расписание занятий
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/book.svg" />
        Электронная информационно-образовательная среда
      </a>
    </li>
    <li :class="styles.item">
      <a href="#">
        <img src="@/assets/email.svg" />
        Интернет-приемная
      </a>
    </li>
  </ul>
</template>
