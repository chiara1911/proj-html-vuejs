<template>
  <div class="container mt-3">
    <FirstMain />
    <LifeStyle />
  </div>
  <div class="logo-img py-2">
    <img
      src="images/assets/page-banner-1.webp"
      alt="page-banner"
      class="w-100"
    />
  </div>
  <div class="container">
    <Features />
    <VideoMain />
  </div>
  <BottomMain />
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./CardComponent.vue";
import CardSlider from "./CardSlider.vue";
import FirstMain from "./MainComponent/FirstMain.vue";
import LifeStyle from "./MainComponent/LifeStyle.vue";
import Features from "./MainComponent/Features.vue";
import VideoMain from "./MainComponent/VideoMain.vue";
import BottomMain from "./MainComponent/BottomMain.vue";
export default {
  name: "MainApp",
  components: {
    CardComponent,
    CardSlider,
    FirstMain,
    LifeStyle,
    Features,
    VideoMain,
    BottomMain,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo-img {
  background-color: #f3f3f3;
  padding: 0 280px;
}
</style>
