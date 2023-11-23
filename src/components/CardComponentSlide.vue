<template>
    <div class="box mx-2">
        <div class="cat" >
          
            <button class="btn btn-light ">{{ item }}</button>
            
        </div>
       
      <img :src="img" :alt="title" />
      <div class="text">       
        <h6>{{ title }}</h6>        
        <h6>{{ date }}</h6>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../data/store"; 
  export default {
    name: "CardComponentSlide",
    components: {},
    data() {
      return {
        store,
      };
    },
    props: {
      img: String,
      title: String,
      date: String,
      item: String,
    
    },

    methods:{
      setButton(){
        
        let buttonEl;
        for(let i = 0; i < this.categories.lenght; i++){
          
          return buttonEl
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  img {
    width: 350px;
    height: 250px;
    border-radius: 5%;
  }
  .box {
    position: relative;
  }
  .cat{
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translate(-50% , 0);
  
  }
  </style>
  