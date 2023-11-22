<template>
  <div class="container d-flex flex-row justify-content-between ">
    
    <div class="d-flex flex-row justify-content-between">
      <CardComponent
        v-for="card in this.store.cardEl"
        :title="card.title"
        :img="card.img"
      />
    </div>
    <div class="d-flex flex-row  position-absolute ">
        <div class="btn border align-items-end  " @click="scrollLeft(100, 0)">
      <i class="fa-solid fa-arrow-left"></i>
    </div>
    <div class="btn border align-items-start" @click="scrollRight(-100, 0)">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
</div>
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponent from "./CardComponent.vue";

export default {
  name: "CardSlider",
  components: {
    CardComponent,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    scrollRight() {
      this.container.scrollBy({
        left: 300,
      });
    },
    scrollLeft() {
      this.container.scrollBy({
        left: -300,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  position: relative;
}

.container::-webkit-scrollbar {
  display: none;
}
.btn{
    position: absolute;
}
</style>
