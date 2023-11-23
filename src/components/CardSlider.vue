<template>
  <div class="content d-flex flex-row justify-content-between">
    <div class="d-flex flex-row justify-content-between cardBox">
      <CardComponentSlide  v-for="el in this.store.cardEl"
        :title="el.title"
        :img="el.img"
        :date="el.date" :item="el.categories.info" />
       
      />
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import CardComponentSlide from "./CardComponentSlide.vue";

export default {
  name: "CardSlider",
  components: {
    CardComponentSlide,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    scrollRight() {
      this.content.scrollBy({
        left: 300,
      });
    },
    scrollLeft() {
      this.content.scrollBy({
        left: -300,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cardBox {
  width: 400px;
  height: 300px;
}
img {
  object-fit: contain;
  border-radius: 5%;
}
.content {
  width: 100%;
  height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  position: relative;
  background-color: #f3f3f3;
}
.btn {
  position: absolute;
}
</style>
