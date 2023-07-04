<script setup lang="ts">
import { ref } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import type { VForm } from 'vuetify/lib/components/index.mjs';
import { useSendMail } from './CallbackForm.service'

const props = defineProps({
  withoutRecaptcha: {
    type: Boolean,
    default: false,
  },
  toggleForm: {
    type: Function
  }
})

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const EMAIL_TO = import.meta.env.VITE_EMAIL_TO;

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
    (v: string) => (v && v.length <= 30) || 'Максимальная длина 20 символов',
  ],
  emailRules: [
    (v: string) => !!v || 'Обязательно для заполнения',
    (v: string) => /.+@.+\..+/.test(v) || 'Некорректный E-mail',
  ],
  messagesRules: [
    (v: string) => !!v || 'Обязательно для заполнения',
    (v: string) => (v && v.length <= 1000) || 'Максимальная длина 200 символов',
  ],
});

const { mutate } = useSendMail();

const handleSubmit = async () => {
  const valid = await formRef.value?.validate();

  if (valid?.valid && (recaptchaToken.value || props.withoutRecaptcha)) {
    mutate(
      {
        name: field.value.name,
        emailFrom: field.value.email,
        emailTo: EMAIL_TO,
        message: field.value.message
      }
    );

    props.toggleForm!();

    field.value.name = "";
    field.value.email = "";
    field.value.message = "";
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