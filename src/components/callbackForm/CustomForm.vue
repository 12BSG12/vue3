<script setup lang="ts">
import { ref } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import type { VForm } from 'vuetify/lib/components/VForm/index';

const props = defineProps({
  withoutRecaptcha: {
    type: Boolean,
    default: false,
  }
})


const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const valid = ref(true);
const formRef = ref<InstanceType<typeof VForm> | null>(null);

const checkbox = ref(true);

const recaptchaToken = ref('');

const field = ref({
  name: '',
  email: '',
  message: '',
});

const rules = ref({
  nameRules: [
    (v: string) => !!v || 'Обязательно для заполнения',
    (v: string) => (v && v.length <= 20) || 'Максимальная длина 20 символов',
  ],
  emailRules: [
    (v: string) => !!v || 'Обязательно для заполнения',
    (v: string) => /.+@.+\..+/.test(v) || 'Некорректный E-mail',
  ],
  messagesRules: [
    (v: string) => !!v || 'Обязательно для заполнения',
    (v: string) => (v && v.length <= 200) || 'Максимальная длина 200 символов',
  ],
});

const handleSubmit = async () => {
  const valid = await formRef.value?.validate();

  if (valid?.valid && (recaptchaToken.value || props.withoutRecaptcha)) {
    console.log(field);
  }
};

const handleSuccess = (response: string) => {
  recaptchaToken.value = response;
};
</script>

<template>
  <v-form ref="formRef" v-model="valid" lazy-validation>
    <v-text-field
      v-model="field.name"
      :rules="rules.nameRules"
      :counter="30"
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
      :counter="1000"
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
    <VueRecaptcha
      v-if="!withoutRecaptcha"
      class="mb-4"
      :sitekey="SITE_KEY"
      @verify="handleSuccess"
    ></VueRecaptcha>
    <v-btn @click="handleSubmit"> Отправить </v-btn>
  </v-form>
</template>