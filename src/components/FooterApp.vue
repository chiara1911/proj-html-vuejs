<template>
  <div class="pt-3">
    <section class="m-2">
      <TopFooter />
      <BottomFooter />
    </section>
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
