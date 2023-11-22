<template>
  <HeaderApp />
  <MainApp />
  <FooterApp />
</template>
<script>
import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";
import {store} from "./data/store"

export default {
  name: "App",
  components: {
    HeaderApp,
    MainApp,
    FooterApp,
  },
  data() {
    return {
      store,
    };
  },

};
</script>
<style scoped></style>
