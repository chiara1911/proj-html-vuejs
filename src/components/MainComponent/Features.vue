<template>
<section class="d-flex flex-column border">
    <div class="d-flex flex-row justify-content-between ">
        <h2 class="text-uppercase">featured posts</h2> 
        <div class=" mx-5 " >
            <i class="fa-solid fa-arrow-left m-2 fs-3"></i>
            <i class="fa-solid fa-arrow-right m-2 fs-3"></i>
        </div>
    </div>
     

    <!-- componenti di features -->
    <div class="d-flex flex-row flex-nowrap" id="card-feat">
        <div class="box-card" v-for="el in store.cardEl">            
        <CardComponent :img="el.img" :title="el.title"/>
    </div>       
    </div>
      <!-- <div class="container"> -->
        <!-- <div class="row">
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
          <div class="col-4">
            <img src="images/assets/300x250.webp" alt="" />
          </div>
        </div> -->
      <!-- </div> -->
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
<style lang="scss" scoped>
#card-feat{
    width: 100%;
  height: 350px;
  overflow-x: scroll;
  position: relative;
}
img{
    display: block;
   width: 100%;
    object-fit: contain;
    border-radius: 20%;
}
.box-card{
    width: 300px;
}
</style>
