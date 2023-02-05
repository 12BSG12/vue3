<template>
  <div class="notFound">
    <h2>Данной страницы не существует 😕</h2>
    <p>
      Вероятней всего, вы перешли по некорректной ссылке.<br />
      Для того, чтобы продолжить, перейдите на главную страницу.
    </p>
    <RouterLink to="/">
      <v-btn size="small">На главную</v-btn>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.notFound {
  @apply max-w-lg m-auto flex flex-col justify-center items-center py-10;
  h2 {
    @apply font-bold text-xl mb-3;
  }
  p {
    @apply text-base mb-3;
  }
  a {
    button {
      @apply bg-gray;
    }
  }
}
</style>
