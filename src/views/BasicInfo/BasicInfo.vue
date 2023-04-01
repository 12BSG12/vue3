<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">ОСНОВНЫЕ СВЕДЕНИЯ</h2>
        <v-divider class="mb-5"></v-divider>
        <div :class="styles.basicInfoBody">
          <h2>Наименование образовательной организации</h2>
          <p>
            <span>Полное наименование: </span>Чайковский филиал федерального государственного
            автономного образовательного учреждения высшего образования «Пермский национальный
            исследовательский политехнический университет"
          </p>
          <p><span>Сокращенное наименование: </span>ЧФ ПНИПУ</p>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Дата создания образовательной организации</h2>
          <p>
            <span>14 апреля 1998 г. </span>
            (<a href="#" target="_blank"><v-icon icon="mdi-file-pdf-box" /> Приказ Министерства</a>)
          </p>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Информация о месте нахождения образовательной организации</h2>
          <p><span>Юридический адрес: </span>617764, ул. Ленина, 73, Чайковский, Пермский край</p>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Информация о руководителе образовательной организации</h2>
          <p><span>Руководитель (директор): </span> Куликов Николай Михайлович</p>
          <p><span>Контактный телефон: </span>+7 (34241) 3 44 56</p>
          <p><span>Адрес электронной почты: </span>nm@pnipu.ru</p>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>График и режим работы образовательной организации</h2>
          <p><span>Понедельник-Пятница: </span> с 8.30 до 17.00</p>
          <p><span>Обеденный перерыв: </span>с 12.30 до 13.00</p>
          <p><span>Суббота и воскресенье: </span>выходные дни</p>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Информация о местах проведения практики</h2>
          <span>Адреса мест проведения практики:</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Информация о местах проведения практической подготовки обучающихся</h2>
          <span>Адреса мест проведения практической подготовки обучающихся:</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>Информация о местах проведения государственной итоговой аттестации</h2>
          <span>Адреса мест проведения государственной итоговой аттестации:</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div :class="styles.basicInfoBody">
          <h2>
            Информация о местах осуществления образовательной деятельности по дополнительным
            образовательным программам
          </h2>
          <span>Адреса мест осуществления образовательной деятельности:</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped module="styles" lang="scss" src="./BasicInfo.style.scss"></style>
