<template>
    
      <div class="d-flex flex-row justify-content-between overflow-x-scroll mt-3 ">
          <CardComponent
          v-for="el in store.cardEl"
          :img="el.img"
          
        />
      </div>
    
  </template>
  
  <script>
  import CardComponent from '../CardComponent.vue';
  
  import { store } from '../../data/store';
  
      export default {
      name: "BottomMain",
      data() {
          return {
              store
          };
      },
      components: { 
          CardComponent 
      }
  }
  </script>
  
  <style lang="scss" scoped></style>
  