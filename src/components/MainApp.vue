<template>
  <div class="container bg-info">
    <h2>main</h2>

    <section class="d-flex flex-row border">
      <div class="container">
        <!--     
     <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  -->
        <div class="row">
          <!-- card a sinistra -->
          <div class="col-3 d-flex flex-column justify-content-between">
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div>
          <!-- card al centro -->
          <div class="col-6">
            <div class="box d-flex flex-column">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div>
          <!-- card a destra -->
          <div class="col-3">
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
      </div>
    </section>
    lifestyle
    <section class="d-flex flex-row border">
      <div class="container">
        <!--     
     <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  -->
        <div class="row">
          <!-- card a sinistra -->
          <div class="col-7">
            <div class="box d-flex flex-column">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div>

          <!-- card a destra -->
          <div class="col-3 d-flex flex-column flex-nowrap">
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
      </div>
    </section>

    <section class="d-flex flex-column border">
      featured posts
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="d-flex flex-row border">
      video

      <div class="container">
        <!--     
     <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  -->
        <div class="row">
          <!-- card a sinistra -->
          <div class="col-7">
            <div class="box d-flex flex-column">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div>

          <!-- card a destra -->
          <div class="col-3 d-flex flex-column flex-nowrap">
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
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import CardSlider from "./CardSlider.vue";
import { store } from "../data/store";
export default {
  name: "MainApp",
  components: {
    CardComponent,
    CardSlider,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
