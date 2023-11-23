<template>
  <div class="ms-2">
    <h2 class="text-center">footer</h2>
    <section class="m-2">
      
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
