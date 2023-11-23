<template>
  <section class="d-flex flex-row border">
    <div id="left-box" >
      <img src="images/assets/anime-fashion.webp" alt="" class="m-2">
      <img src="images/assets/anime-fashion.webp" alt="" class="m-2">
    </div>
    <div id="middle-box " class="w-100 m-2"> <img src="images/assets/anime-fashion.webp" alt="" class="w-100 h-100"></div>
   
    <!-- <div class="col-4" v-for="el in store.cardEl">
            <CardComponent :img="el.img" :title="el.title" :date="el.date"/>

          </div> -->
    <div id="right-box ">
      <img src="images/assets/anime-fashion.webp" alt=""  class="m-2">
      <img src="images/assets/anime-fashion.webp" alt=""  class="m-2">
    </div>
  </section>
</template>

<script>
import CardComponent from "../CardComponent.vue";
import { store } from "../../data/store";
export default {
  name: "FirstMain",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
  props: {
    img: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 250px;
  height: 250px;
  display: block;
  object-fit: cover;
 border-radius: 10%;
}
#left-box {
  width: 25%;
}
#middle-box {
  width: 50%;
  height: 100%;
}
#right-box {
  width: 25%;
}
</style>
