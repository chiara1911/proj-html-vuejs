<template>
  <div class="ms-2">
    <h2 class="text-center">footer</h2>
    <section class="m-2">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-2">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-2">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-2">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-2">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
        </div>
      </div>
    </section>

    <TopFooter />

    <BottomFooter />
  </div>
</template>

<script>
import TopFooter from "./FooterComponent/TopFooter.vue";
import BottomFooter from "./FooterComponent/BottomFooter.vue";

export default {
  name: "FooterApp",
  components: { TopFooter, BottomFooter },
};
</script>

<style lang="scss" scoped></style>
