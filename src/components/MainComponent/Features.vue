<template>
  <section class="d-flex flex-column mt-4">
    <div class="d-flex flex-row justify-content-between">
      <h2 class="text-uppercase">featured posts</h2>
      <div class="mx-5">
        <i class="fa-solid fa-circle-chevron-left m-2 fs-3"></i>
        <i class="fa-solid fa-circle-chevron-right m-2 fs-3"></i>
      </div>
    </div>

    <!-- componenti di features -->
    <div class="d-flex flex-row flex-nowrap" id="card-feat">
      <div class="box-card mx-5 d-flex flex-column" v-for="el in store.cardEl">
        <CardComponentSlide :img="el.img" :title="el.title" :date="el.date" />
        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum
          eos tenetur tempore odio sunt placeat labore totam, reiciendis
          ea.</span
        >
        <button class="btn btn-danger m-auto mt-2">Read More</button>
      </div>
    </div>
  </section>
</template>
<script>
import { store } from "../../data/store";
// import CardComponent from "../CardComponent.vue";
import CardComponentSlide from "../CardComponentSlide.vue";
export default {
  name: "Features",
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
i {
  color: grey;
}
i:hover {
  color: red;
}
button:hover {
  background-color: grey;
  border: 0;
}
#card-feat {
  width: 100%;
  height: 470px;
  overflow-x: scroll;
  // position: relative;
}
img {
  display: block;
  width: 100%;
  object-fit: contain;
  border-radius: 20%;
}
.box-card {
  width: 300px;
}
</style>
