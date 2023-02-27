<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
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
      <v-dialog v-model="dialog" activator="parent" class="w-80">
        <div class="bg-white w-full mx-auto rounded-lg h-[400px] relative p-3">
          <h2>Расписание</h2>
          <span class="absolute bottom-0 right-0">
            <v-btn variant="text" @click="dialog = false">Назад</v-btn>
          </span>
        </div>
      </v-dialog>
    </li>
    <li :class="styles.item">
      <a :class="styles.itemInner" href="#">
        <img src="@/assets/book.svg" />
        Электронная информационно-образовательная среда
      </a>
    </li>
    <li :class="styles.item">
      <router-link :class="styles.itemInner" to="/internet-priemnaya">
        <img src="@/assets/email.svg" />
        Интернет-приемная
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped module="styles" src="./quicklyMenu.module.scss"></style>
