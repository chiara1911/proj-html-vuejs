<template>
    <section class="d-flex flex-row border">
      <div class="container">
        
        <div class="row" >
          <div class="col-4" v-for="el in store.cardEl">
            <CardComponent :img="el.img" :title="el.title"/>
            
          </div>
          <!-- <div class="col-6" >
            <CardComponent :img="el.img" :title="el.title"/>
          </div>
          <div class="col-3">
            <CardComponent :img="el.img" :title="el.title"/>
            <CardComponent :img="el.img" :title="el.title"/>
          </div> -->
          <!-- card a sinistra -->
          <!-- <div class="col-3 d-flex flex-column justify-content-between">
            <div class="box">
              <img :src="getImage" alt="">
              <span>hello</span>
            </div>
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div> -->
          <!-- card al centro -->
          <!-- <div class="col-6">
            <div class="box d-flex flex-column">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div> -->
          <!-- card a destra -->
          <!-- <div class="col-3">
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
            <div class="box">
              <img src="images/assets/best-places-300x200.webp" alt="" />
              <span>hello</span>
            </div>
          </div> -->
        </div>
      </div>
    </section>
</template>

<script>
import CardComponent from '../CardComponent.vue';
import {store} from '../../data/store'
    export default {
        name:"FirstMain",
        components:{
            CardComponent,
            
        },
        data(){
          return{
            store
          }
        },
        props:{ 
      img :String,   
      title: String
       },

  }
   

</script>

<style lang="scss" scoped>
img{
  width: 50px;
  height: 50px;

}

</style>