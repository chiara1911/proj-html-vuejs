<template>
  <div class="box mx-2">
    <img :src="img" :alt="title" />
    <div class="text">
      <div class="d-flex flex-row justify-content-between ">
        <span class="text-uppercase"><i class="fa-solid fa-user "></i>demo</span>
        <span><i class="fa-regular fa-calendar-days"></i>{{ date }}</span>
      </div>
      
      <h6>{{ title }}</h6>
      
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";

export default {
  name: "CardComponent",
  components: {},
  data() {
    return {
      store,
    };
  },
  props: {
    img: String,
    title: String,
    date: String,
   
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 350px;
  height: 250px;
  border-radius: 5%;
}
.box {
  position: relative;
}
.text{
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translate(-50% , 0);

}
</style>
