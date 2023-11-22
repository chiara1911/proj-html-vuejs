<template>
  <div class="d-flex flew-row justify-content-between ">
    <h2 class="text-uppercase">lifestyle & stories</h2>
    <div>
      <button class="btn bg-secondary text-light text-uppercase mx-3">all</button>
      <button class="btn bg-secondary text-light text-uppercase mx-3">lifestyle</button>
      <button class="btn bg-secondary text-light text-uppercase mx-3">stories</button>
    </div>
  </div>
  

  <section class="d-flex flex-row border" id="life">
    <div class="left-side side border">
      <img src="images/assets/healthy-foods.webp" alt="" />
    </div>

    <div class="right-side side d-flex flex-column flex-nowrap overflow-y-scroll ">
      <CardComponent
        v-for="el in store.cardEl"
        :img="el.img"
        :title="el.title"
      />
    </div>
    <!-- <div class="container"> -->
    <!--     
     <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  -->
    <!-- <div class="row"> -->

    <!-- card a sinistra -->
    <!-- <div class="col-7">
            <div class="box d-flex flex-column">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div> -->

    <!-- card a destra -->
    <!-- <div class="col-3 d-flex flex-column flex-nowrap">
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div>
        </div>
      </div> -->
  </section>
</template>

<script>
import CardComponent from "../CardComponent.vue";
import { store } from "../../data/store";
export default {
  name: "LifeStyle",
  components: {
    CardComponent,
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
  height: 570px;
}
img {
  width: 100%;
  object-fit: contain;
}
.left-side {
  width: 66%;
}
.right-side{
  width: calc(100% - 66%);
}
</style>
