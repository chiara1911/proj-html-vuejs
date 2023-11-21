<template>
    <div class="d-flex flew-column">
        <div class="box">
            <img :src="card.img" alt="">
        <h6>{{card.title}}</h6>
        </div>
        
    </div>

</template>

<script>
import { card } from '../../card';

    export default {
        name: "CardComponent",
        components :{
            card
        },
       props:{ 
      img :String,
      text: String,
      title: String

       }

    }
</script>

<style lang="scss" scoped>

</style>