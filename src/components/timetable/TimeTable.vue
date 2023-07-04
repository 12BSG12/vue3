<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>

<template>
  <v-dialog v-model="dialog" activator="parent">
    <div class="bg-white overflow-auto sm:w-max mx-auto rounded-lg h-[450px] relative p-3">
      <h2><strong>Расписание звонков аудиторных занятий</strong></h2>
      <div class="sm:flex gap-10 justify-between items-start my-4">
        <div>
          <span class="text-green-600"><strong>ОЧНАЯ ФОРМА ОБУЧЕНИЯ</strong></span>
          <div class="mt-2">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>1 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>08:30 - 09:15</div>
                  <div>09:20 - 10:00</div>
                </div>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>2 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>10:10 - 10:55</div>
                  <div>11:00 - 11:40</div>
                </div>
              </div>
              <div class="my-2"><strong>Обед с 11:40 до 12:00</strong></div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>3 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>12:00 - 12:45</div>
                  <div>12:50 - 13:30</div>
                </div>
              </div>
              <div class="my-2"><strong>Обед с 13:30 до 13:45</strong></div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>4 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>13:45 - 14:30</div>
                  <div>14:35 - 15:15</div>
                </div>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>5 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>15:25 - 16:10</div>
                  <div>16:15 - 16:55</div>
                </div>
              </div>
              <div class="flex items-center gap-3 mb-2">
                <p><strong>6 пара</strong></p>
                <div class="flex items-center flex-col-reverse gap-1">
                  <div>17:05 - 17:50</div>
                  <div>17:55 - 18:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <span class="text-green-600"><strong>ОЧНО-ЗАОЧНАЯ ФОРМА ОБУЧЕНИЯ</strong></span>
            <div class="mt-2">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>1 пара</strong></p>
                  <div class="flex items-center flex-col-reverse gap-1">
                    <div>18:30 - 19:15</div>
                    <div>19:20 - 20:00</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>2 пара</strong></p>
                  <div class="flex items-center flex-col-reverse gap-1">
                    <div>20:10 - 20:55</div>
                    <div>21:00 - 21:40</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="text-green-600"><strong>СУББОТА</strong></span>
            <div class="mt-2">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>1 пара</strong></p>
                  <div>08:30 - 10:00</div>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>2 пара</strong></p>
                  <div>10:05 - 11:30</div>
                </div>
                <div class="my-2"><strong>Обед с 11:30 до 11:50</strong></div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>3 пара</strong></p>
                  <div>11:50 - 13:15</div>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>4 пара</strong></p>
                  <div>13:25 - 14:50</div>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>5 пара</strong></p>
                  <div>15:00 - 16:25</div>
                </div>
                <div class="flex items-center gap-3 mb-2">
                  <p><strong>6 пара</strong></p>
                  <div>16:35 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.pnipu.ru/images/Stud/Rasp/zvon.pdf" target="_blank">Приложение</a>
      <div class="absolute right-0"><v-btn variant="text" @click="dialog = false">Назад</v-btn></div>
    </div>
  </v-dialog>
</template>

<style scoped></style>
