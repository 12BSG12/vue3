<script setup lang="ts">
import { ref, reactive, Transition } from 'vue';
import type { VForm } from 'vuetify/lib/components/VForm/index';

const valid = ref(true);
const showForm = ref(false);
const formRef = ref<InstanceType<typeof VForm> | null>(null);
const checkbox = ref(true);
const field = reactive({
  name: '',
  email: '',
  message: '',
});
const rules = reactive({
  nameRules: [
    (v: any) => !!v || 'Обязательно для заполнения',
    (v: any) => (v && v.length <= 20) || 'Максимальная длина 20 символов',
  ],
  emailRules: [
    (v: any) => !!v || 'Обязательно для заполнения',
    (v: any) => /.+@.+\..+/.test(v) || 'Некорректный E-mail',
  ],
  messagesRules: [
    (v: any) => !!v || 'Обязательно для заполнения',
    (v: any) => (v && v.length <= 200) || 'Максимальная длина 200 символов',
  ],
});

const handleSubmit = async () => {
  const valid = await formRef.value?.validate();

  if (valid?.valid) {
    console.log(field);
  }
};

const toggleForm = () => (showForm.value = !showForm.value);

defineExpose({
  toggleForm,
  showForm,
});
</script>

<template>
  <Transition name="slide-fade">
    <div class="form" v-if="showForm">
      <div class="formTitle">
        <span>Обратная связь</span>
        <v-icon icon="mdi-window-close" @click="showForm = false"></v-icon>
      </div>
      <v-form ref="formRef" v-model="valid" lazy-validation>
        <v-text-field
          v-model="field.name"
          :rules="rules.nameRules"
          :counter="20"
          label="ФИО"
          required
        ></v-text-field>
        <v-text-field
          v-model="field.email"
          :rules="rules.emailRules"
          label="Почта"
          required
        ></v-text-field>
        <v-textarea
          v-model="field.message"
          :rules="rules.messagesRules"
          :counter="200"
          variant="filled"
          auto-grow
          label="Сообщение"
          rows="4"
          row-height="20"
        ></v-textarea>
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'Обязательно для заполнения']"
          label="Согласие на обработку персональных данных?"
          required
        ></v-checkbox>
        <v-btn color="blue-grey" class="mr-4" @click="handleSubmit"> Отправить </v-btn>
      </v-form>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.form {
  @apply px-3 py-4 bg-slate-500 rounded-lg fixed bottom-2 right-16 z-50 w-72 lg:right-20 lg:w-80;
  .formTitle {
    @apply flex items-center justify-between mb-1;
    i {
      @apply cursor-pointer transition-all ease-in-out duration-200 active:scale-75;
    }
  }
}
</style>
