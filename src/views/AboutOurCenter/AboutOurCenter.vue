<template>
  <div class="mt-5">
    <div class="bg-white rounded-lg drop-shadow-lg mb-3">
      <div class="p-3">
        <h2 class="text-2xl uppercase mb-2">О НАШЕМ ЦЕНТРЕ</h2>
        <v-divider class="mb-5"></v-divider>
        <p class="text-base mb-5 text-justify">
          Центр дополнительного образования специалистов (ЦДОС) – Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dignissimos, sit! Commodi quam ad eveniet assumenda optio
          pariatur ipsam quisquam. Provident nobis consequuntur, dolore vitae corrupti natus ratione
          necessitatibus. Quis, deserunt?
        </p>
        <div :class="styles.body">
          <h2>Основные задачи деятельности ЦДОС:</h2>
          <ul>
            <li>Повышение квалификации специалистов предприятий и организаций;</li>
            <li>Профессиональная подготовка и переподготовка кадров;</li>
            <li>
              Обучение специалистов предприятий и организаций новым информационным технологиям;
            </li>
          </ul>
        </div>
        <div :class="styles.body">
          <h2>ЦДОС ведёт свою деятельность на основании следующих документов:</h2>
          <ul>
            <li>Повышение квалификации специалистов предприятий и организаций;</li>
            <li>Профессиональная подготовка и переподготовка кадров;</li>
            <li>
              Обучение специалистов предприятий и организаций новым информационным технологиям;
            </li>
          </ul>
        </div>
        <div :class="styles.imgs">
          <img src="https://via.placeholder.com/340x480" />
          <img src="https://via.placeholder.com/340x480" />
        </div>
        <p class="text-base mb-5 text-justify">
          Слушателями нашего Центра являются люди различных возрастных и социальных групп -
          руководители предприятий, работники предприятий с различной специализацией, экономисты и
          бухгалтеры, домохозяйки и пенсионеры. А объединяет всех понимание того, что в современном
          мире именно непрерывное и постоянное образование помогает занять свое место в жизни и не
          потерять его.
        </p>
        <p class="text-base font-bold text-justify">
          Современные методики повышения квалификации, возможность заниматься с минимальным отрывом
          от производства, индивидуальные графики занятий – обучение в Центре дополнительного
          образования ЧФ ПНИПУ удобно и качественно! Приглашаем Вас повысить свою квалификацию в
          нашем Центре!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped module="styles" lang="scss" src="./AboutOurCenter.style.scss"></style>
