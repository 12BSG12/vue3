<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">ОБРАЗОВАНИЕ</h2>
        <v-divider class="mb-5"></v-divider>
        <h3 class="px-6 py-2 bg-gray font-bold text-center rounded-lg mb-5">
          Нормативные документы
        </h3>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках
              обучения, сроке действия государственной аккредитации образовательной программы (при
              наличии государственной аккредитации), о языках, на которых осуществляется образование
              (обучение)
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-table class="rounded-lg w-[327px] 380:w-full" density="compact">
                <thead class="bg-gray">
                  <tr>
                    <th class="text-left text-black">Код</th>
                    <th class="text-left text-black">
                      Наименование профессии, специальности, направления подготовки
                    </th>
                    <th class="text-left text-black">
                      Образовательная программа, направленность, профиль, шифр и наименование
                      научной специальности
                    </th>
                    <th class="text-left text-black">
                      Срок действия государственной аккредитации (дата окончания действия
                      свидетельства о государственной аккредитации)
                    </th>
                    <th class="text-left text-black">
                      Языки, на которых осуществляется образование (обучение)
                    </th>
                    <th class="text-left text-black">Форма обучения</th>
                    <th class="text-left text-black">Нормативный срок обучения</th>
                    <th class="text-left text-black">
                      Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей
                      образовательной программой
                    </th>
                    <th class="text-left text-black">
                      Практики, предусмотренные соответствующей образовательной программой
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-light-gray">
                  <tr>
                    <td>08.03.01</td>
                    <td>Строительство</td>
                    <td>Промышленное и гражданское строительство</td>
                    <td>---</td>
                    <td>Русский</td>
                    <td>
                      <tr>
                        Очная
                      </tr>
                      <tr>
                        Очно-заочная
                      </tr>
                      <tr>
                        Заочная
                      </tr>
                    </td>
                    <td>
                      <tr>
                        -
                      </tr>
                      <tr>
                        5 лет
                      </tr>
                      <tr>
                        -
                      </tr>
                    </td>
                    <td>
                      <a href="#"><v-icon icon="mdi-file-excel"></v-icon>Перечень дисциплин</a>
                    </td>
                    <td>
                      <a href="#"><v-icon icon="mdi-file-excel"></v-icon>Перечень дисциплин</a>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<style>
.v-expansion-panel-text__wrapper {
  padding: 8px;
}
</style>
