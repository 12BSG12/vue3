<script setup lang="ts">
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import BreadCrumbs from "./components/breadcrumbs/BreadCrumbs.vue";
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";
import MenuTop from "./components/menu/MenuTop.vue";
import QuicklyMenu from "./components/menu/QuicklyMenu.vue";
import { useScroll } from "./hooks/useScroll";

const { scrollY, scrollToTop } = useScroll();
const valid = ref(true);
const showForm = ref(false);
const formRef = ref<any | null>(null);
const checkbox = ref(true);
const name = reactive({
  name: "",
  nameRules: [
    (v: any) => !!v || "Name is required",
    (v: any) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ],
});
const email = reactive({
  email: "",
  emailRules: [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ],
});
const message = reactive({
  message: "",
  messagesRules: [
    (v: any) => !!v || "Message is required",
    (v: any) =>
      (v && v.length <= 200) || "Message must be less than 200 characters",
  ],
});
const validate = async () => {
  const { valid } = await formRef.value.validate();

  if (valid) alert("Form is valid");
};
</script>

<template>
  <div class="bg">
    <div class="wrapper">
      <div class="px-2">
        <Header msg="You did it!" />
        <MenuTop />
        <BreadCrumbs />
        <QuicklyMenu />
      </div>
      <div class="content">
        <RouterView />
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </div>
      <div class="btn">
        <v-btn
          icon="mdi-message"
          color="blue-grey"
          @click="showForm = !showForm"
        ></v-btn>
        <Transition name="slide-fade">
          <v-btn
            v-if="scrollY >= 200"
            icon="mdi-arrow-up"
            color="blue-grey"
            @click="scrollToTop"
          ></v-btn>
        </Transition>
      </div>
      <Transition name="slide-fade">
        <div class="form" v-if="showForm">
          <div class="formTitle">
            <span>Обратная связь</span>
            <v-icon icon="mdi-window-close" @click="showForm = false"></v-icon>
          </div>
          <v-form ref="formRef" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name.name"
              :counter="10"
              :rules="name.nameRules"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email.email"
              :rules="email.emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-textarea
              v-model="message.message"
              :rules="message.messagesRules"
              variant="filled"
              auto-grow
              label="Message"
              rows="2"
              row-height="20"
            ></v-textarea>
            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>
            <v-btn color="success" class="mr-4" @click="validate">
              Отправить
            </v-btn>
          </v-form>
        </div>
      </Transition>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.bg {
  @apply relative before:absolute bg-slate-200 left-0 right-0 bottom-0 top-0;
}
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  @apply max-w-screen-2xl m-auto overflow-hidden;
}
.content {
  @apply px-2 my-2;
}
.form {
  @apply px-3 py-4 bg-teal-700 rounded-lg fixed bottom-0 right-20 z-50;
  .formTitle {
    @apply flex items-center justify-between mb-1;
    i {
      @apply cursor-pointer transition-all ease-in-out duration-200 active:scale-75;
    }
  }
}
.btn {
  @apply fixed bottom-0 right-0 flex flex-col mr-2 mb-2 z-50;
  button {
    @apply mb-2 last:mb-0 first:transition-all ease-out duration-300;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
