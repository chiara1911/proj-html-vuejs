<template>
    <section class="d-flex flex-row border">
      <div class="container">        
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
</template>

<script>
import CardComponent from '../CardComponent.vue';
import { store } from '../../data/store';
    export default {
        name: "VideoMain",
        components:{
            CardComponent,
            store
        }
    }
</script>

<style lang="scss" scoped>

</style>