<template>
  <div class="ms-2 bg-danger">
    <h2>footer</h2>
    <section>immagini 6</section> 
    <div class="container">  
      <TopFooter />
      <hr>
     <BottomFooter />
    </div>
    </div>

  

</template>

<script>
import TopFooter from './FooterComponent/TopFooter.vue';
import BottomFooter from './FooterComponent/BottomFooter.vue'

export default {
    name: "FooterApp",
    components: { TopFooter, BottomFooter }
};
</script>

<style lang="scss" scoped>

</style>
