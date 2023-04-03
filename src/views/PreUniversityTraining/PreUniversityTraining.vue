<script setup lang="ts">
import YMap from '@/components/YMap/YMap.vue';
</script>

<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">О НАШЕМ ЦЕНТРЕ</h2>
        <v-divider class="mb-5"></v-divider>
        <p class="text-base mb-5">
          <span class="font-bold">Отдел довузовской подготовки </span>предоставляет дополнительные
          образовательные услуги по подготовке выпускников школ, лицеев, техникумов для поступления
          в ВУЗы. Это подготовительные курсы, образовательные практики, предметные олимпиады,
          экскурсии и т.д.
        </p>
        <p class="text-base mb-5">
          <span class="font-bold">Основная задача: </span>качественная подготовка абитуриентов к
          вступительным экзаменам и восполнение пробелов в знаниях. На курсах преподают опытные,
          высококвалифицированные преподаватели филиала и лучшие преподаватели школ города, имеющие
          большой учебно-педагогический стаж работы.
        </p>
        <p class="mb-5 text-base">
          <span class="font-bold">Предметы: </span>математика, русский язык, физика, химия,
          информатика
        </p>
        <div class="mb-5 text-base">
          <h2 class="font-bold text-2xl text-center mb-2">ДЛЯ ВЫПУСКНИКОВ ШКОЛ (11 КЛАСС)</h2>
          <div class="flex justify-center items-center flex-col">
            <span>подготовка к сдаче ЕГЭ</span>
            <span>период обучения:</span>
            <span>октябрь - май (100 час.)</span>
          </div>
        </div>
        <div class="mb-5 text-base">
          <h2 class="font-bold text-2xl text-center mb-2">
            ДЛЯ ВЫПУСКНИКОВ ОБРАЗОВАТЕЛЬНЫХ УЧРЕЖДЕНИЙ СПО И НПО
          </h2>
          <div class="flex justify-center items-center flex-col">
            <span>подготовка к экзаменам ПНИПУ</span>
            <span>январь - май (60 час.)</span>
            <span>апрель - май (40 час.)</span>
            <span>июнь (40 час.)</span>
          </div>
        </div>
        <div class="mb-5 text-base">
          <h2 class="font-bold text-2xl text-center mb-2">
            ДОКУМЕНТЫ, НЕОБХОДИМЫЕ ДЛЯ ПОСТУПЛЕНИЯ НА КУРСЫ:
          </h2>
          <ul class="pl-6">
            <li class="list-disc">
              Квитанция об уплате за обучение (выдаётся в кабинете отдела довузовской подготовки)
            </li>
            <li class="list-disc">
              Паспорт абитуриента и паспорт одного из родителей (если абитуриенту менее 18 лет)
            </li>
            <li class="list-disc">2 фотографии 3х4</li>
            <li class="list-disc">
              Договор и заявление (заполняются в кабинете отдела довузовской подготовки)
            </li>
          </ul>
        </div>
        <div class="mb-5 text-base">
          <h2 class="font-bold text-2xl text-center mb-2">АДРЕС ОТДЕЛА ДОВУЗОВСКОЙ ПОДГОТОВКИ</h2>
          <div class="flex justify-center items-center flex-col">
            <span>617764, г. Чайковский, ул. Ленина, 73, каб. 24 </span>
            <span>Телефон: 8 (34241) 3-45-07 </span>
          </div>
        </div>
        <YMap />
      </div>
    </div>
  </div>
</template>