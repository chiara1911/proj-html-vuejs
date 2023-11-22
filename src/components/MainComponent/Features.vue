<template>
<section class="d-flex flex-column border">
    <div class="d-flex flex-row justify-content-between ">
        <h2 class="text-uppercase">featured posts</h2> 
        <div class=" mx-5 " >
            <i class="fa-solid fa-arrow-left m-2 fs-3"></i>
            <i class="fa-solid fa-arrow-right m-2 fs-3"></i>
        </div>
    </div>
     
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
</template>

<script>
import { store } from '../../data/store';
import CardComponent from '../CardComponent.vue';
    export default {
        name: "Features",
        components:{
            CardComponent
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped></style>
