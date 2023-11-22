<template>
   <div class="box-slider">
    <div class="container">
        
        <div class="slider-wrapper d-flex flex-row " tabindex="0">          
            <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  
                                                     
        </div>
        
    </div>
    <button class="prev btn" @click="prev">prev</button>
        <button class="next btn" @click="next">next</button>
    </div>
</template>

<script>
import {store} from '../data/store';
import CardComponent from './CardComponent.vue';

    export default {
        name:"CardSlider",
        components:{
            CardComponent
        },
       
        data(){
            return{
                store
            }
        },
        methods: {
    prev() {
      if (this.activeSlides === 0) {
        this.activeSlides = this.cardEl.length - 1;
      } else {
        this.activeSlides--;
      }
    },

    next() {
      if (this.activeSlides === this.cardEl.length - 1) {
        this.activeSlides = 0;
      } else {
        this.activeSlides++;
      }
    },

    getActive(index) {
        return index === this.activeSlides ? 'active' : '';
     },
    activeImg(index){
        this.activeSlides = index
    }

  },
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    
}
.prev, .next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}








</style>