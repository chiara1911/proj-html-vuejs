<template>
  <section class="d-flex flex-row justify-content-between ">
    <div id="left-box" class="mt-2" >
      <CardComponent v-for="el in store.cardEl.slice(0,2)" :img="el.img" :date="el.date" :title="el.title" class="text-light mt-2 "/>
    
    </div>
    <div id="middle-box " class="mt-2">
      <img src="images/assets/winter.webp" alt="">
    </div>
    <div id="right-box " class="mt-2">
      <CardComponent v-for="el in store.cardEl.slice(4,6)" :img="el.img" :date="el.date" :title="el.title" class="text-light mt-2 "/>
      
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
width: 100%;
height: 100%;
  display: block;
  object-fit: cover;
 border-radius: 10%;
}

</style>
