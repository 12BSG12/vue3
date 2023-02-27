<script setup lang="ts">
import CustomSpinner from '@/components/CustomSpinner.vue';
import { useAnswersOnQuestions } from './questions.service';

const { answersOnQuestionsData, isLoading, loadMoreAnswersOnQuestions } = useAnswersOnQuestions();
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.inner">
      <h2 :class="styles.title">ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
      <div class="mb-10"></div>
      <CustomSpinner v-if="isLoading" />
      <div v-intersection="loadMoreAnswersOnQuestions" :class="styles.content" v-for="item in answersOnQuestionsData" :key="item.id">
        <div :class="styles.questions">
          <p>
            <span>Вопрос</span>: {{ item.attributes.question }}
          </p>
        </div>
        <div :class="styles.answer">
          <p>
            <span>Ответ</span>: {{ item.attributes.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" module="styles" src="./questions.module.scss"></style>
