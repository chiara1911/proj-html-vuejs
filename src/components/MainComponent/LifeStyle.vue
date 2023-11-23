<template>
  <div class="d-flex flew-row justify-content-between mt-3">
    <h2 class="text-uppercase">lifestyle & stories</h2>
    <div>
      <button class="btn bg-secondary text-light text-uppercase mx-3">all</button>
      <button class="btn bg-secondary text-light text-uppercase mx-3">lifestyle</button>
      <button class="btn bg-secondary text-light text-uppercase mx-3">stories</button>
    </div>
  </div>
  
  <!-- sezione immagini -->

  <section class="d-flex flex-row pt-2" id="life">
    <div class="left-side side ">
      <img src="images/assets/healthy-foods.webp" alt="" />
    </div>

    <div class="right-side side d-flex flex-column flex-nowrap overflow-y-scroll ">
      <div >
        <CardComponentSlide class="d-flex flex-row mx-3 mt-1 text-center align-items-center"
        v-for="el in store.cardEl"
        :img="el.img"
        :title="el.title"
        :date="el.date"
      />
      </div>
      
    </div>
    
  </section>
</template>

<script>
// import CardComponent from "../CardComponent.vue";
import { store } from "../../data/store";
import CardComponentSlide from "../CardComponentSlide.vue";
export default {
  name: "LifeStyle",
  components: {
    // CardComponent,
    CardComponentSlide
},
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#life {
  height: 470px;
}
img {
  width: 100%;
  display: block;
  object-fit: contain;
}
.left-side {
  width: 50%;
  height: 100%
}
.right-side{
  width: 50%;
}

</style>
