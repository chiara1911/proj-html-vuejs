<template>
  <div class="">
 

    <div class="top-bar mt-2 d-flex flex-row justify-content-between bg-danger">
      <div class="container">
        <div id="top-left">
          <button class="btn bg-secondary text-uppercase text-light">
            news updates
          </button>
          <img src="images/assets/300x250.webp" alt="adv-banner" id="img-top">
          <span class="text-uppercase">05:35 the_</span>
        </div>
        <div
          class="top-right d-flex flex-row justify-content-between align-content-between mx-1 text-light"
        >
          <span class="icon-left mx-4">
            <i class="fa-solid fa-angle-left"></i>
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <ul class="d-flex flex-row list-unstyled icon-right">
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        id="topbar-main"
        class="d-flex flew-row justify-content-between align-content-between"
      >
        <img src="images/assets/anime-logo-300x89.webp" alt="anime-logo" />
        <img src="images/assets/header-banner.webp" alt="banner" />
      </div>
      <div id="topbar-footer" class="d-flex flew-row justify-content-between align-content-between mt-3"
      >
        <i class="fa-solid fa-bars"></i>
        <ul class="d-flex flex-row list-unstyled justify-content-between">
          <li v-for = "listEl in list" ><i :class="listEl.icon" class="p-2"></i>{{ listEl.text }}</li>
        </ul>
        <i class="fa-solid fa-search"></i>
      </div>
    </div>
    <div class="d-flex flex-row">
      <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/> 
    </div>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import {store} from '../data/store'
export default {
  name: "HeaderApp",
  components:{
    CardComponent
    
  },
 data(){
   return{
    store,
      list :[
        { text:"Home",
        icon: "fa-solid fa-house"},
        { text:"Lifestyle",
        icon: "fa-solid fa-suitcase"},
        { text:"Stories",
        icon: " fa-solid fa-book-open-reader"},
        { text:"Pages",
        icon: "fa-solid fa-book"},
        { text:"About Us",
        icon: "fa-solid fa-user"},

       
   ]
       


        
      }
        
   }
   }
;
</script>

<style lang="scss" scoped>
i {
  padding-left: 5px;
}
#img-top{
    width: 40px;
  }
</style>
