<template>
  <div class="container bg-info">
    <h2>main</h2>
<FirstMain />
    
    lifestyle
   <LifeStyle />
   <img src="images/assets/page-banner-1.webp" alt="page-banner" class="w-100 my-3">

    <Features />
<h2 class="text-center">video</h2>
    <VideoMain />
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./CardComponent.vue";
import CardSlider from "./CardSlider.vue";
import FirstMain from "./MainComponent/FirstMain.vue";
import LifeStyle from "./MainComponent/LifeStyle.vue";
import Features from "./MainComponent/Features.vue";
import VideoMain from "./MainComponent/VideoMain.vue";
export default {
  name: "MainApp",
  components: {
    CardComponent,
    CardSlider,
    FirstMain,
    LifeStyle,
    Features,
    VideoMain
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
