<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">
          СТРУКТУРА И ОРГАНЫ УПРАВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИЕЙ
        </h2>
        <v-divider class="mb-5"></v-divider>
        <a
          class="block mb-5"
          href="https://pnipu.ru/images/sveden/struct/Pologenie_organ_upravl_structur_podrazd.pdf"
          target="_blank"
          ><v-icon icon="mdi-file-pdf-box" />Структура управления</a
        >

        <v-table class="rounded-lg w-[327px] 380:w-full" density="compact">
          <thead class="bg-gray">
            <tr>
              <th class="text-left text-black">Наименование</th>
              <th class="text-left text-black">ФИО руководителя</th>
              <th class="text-left text-black">Должность руководителя</th>
              <th class="text-left text-black">Адрес местонахождения</th>
              <th class="text-left text-black">Адреса электронной почты</th>
              <th class="text-left text-black">Положение</th>
            </tr>
          </thead>
          <tbody class="bg-light-gray">
            <tr>
              <td>Учебная часть</td>
              <td>Куликов Николай Михайлович</td>
              <td>
                Исполняющий обязанности директора<br />Заместитель директора по учебной работе
              </td>
              <td>
                г. Чайковский, ул. Ленина, 73, каб. 22<br />
                Телефон: 8 (34241) 3-44-56
              </td>
              <td>
                <a href="mailto:umo@pnipu.ru">umo@pnipu.ru</a>
              </td>
              <td>
                <a
                  class="hover:underline"
                  href="https://pnipu.ru/images/sveden/struct/Pologenie_structur_podrazd_UCH.pdf"
                  target="_blank"
                  >Положение (sig)</a
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
