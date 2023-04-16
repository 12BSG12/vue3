<script setup lang="ts"></script>

<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">
          РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ
        </h2>
        <v-divider></v-divider>
        <h2 class="px-6 py-2 bg-gray font-bold text-center rounded-lg mx mt-5 mb-2">
          Информация о руководителе образовательной организации и его заместителях
        </h2>
        <v-table class="rounded-lg w-[327px] 380:w-full" density="compact">
          <thead class="bg-gray">
            <tr>
              <th class="text-left text-black">ФИО</th>
              <th class="text-left text-black">Должность</th>
              <th class="text-left text-black">Контактный телефон</th>
              <th class="text-left text-black">Адрес электронной почты</th>
            </tr>
          </thead>
          <tbody class="bg-light-gray">
            <tr>
              <td>ФИО</td>
              <td>Должность</td>
              <td>Контактный телефон</td>
              <td>Aдрес электронной почты</td>
            </tr>
          </tbody>
        </v-table>
        <h2 class="px-6 py-2 bg-gray font-bold text-center rounded-lg mx mt-5 mb-2">
          Информация о персональном составе педагогических работников образовательной организации
        </h2>
        <v-table class="rounded-lg w-[327px] 380:w-full" density="compact">
          <thead class="bg-gray">
            <tr>
              <th class="text-left text-black">Код</th>
              <th class="text-left text-black">
                Наименование профессии, специальности, направления подготовки
              </th>
              <th class="text-left text-black">
                Ссылка на страницу о персональном составе педагогических работников образовательной
                программы
              </th>
            </tr>
          </thead>
          <tbody class="bg-light-gray">
            <tr>
              <td>08.03.01</td>
              <td class="text-center">Строительство</td>
              <td class="text-center">Ссылка</td>
            </tr>
            <tr>
              <td>09.03.01</td>
              <td class="text-center">Информатика и вычислительная техника</td>
              <td class="text-center">Ссылка</td>
            </tr>
            <tr>
              <td>13.03.02</td>
              <td class="text-center">Электроэнергетика и электротехника</td>
              <td class="text-center">Ссылка</td>
            </tr>
            <tr>
              <td>15.03.04</td>
              <td class="text-center">Автоматизация технологических процессов и производств</td>
              <td class="text-center">Ссылка</td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
