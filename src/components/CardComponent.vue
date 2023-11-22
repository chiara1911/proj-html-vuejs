<template>
    <div class="d-flex flew-column px-2">
        <div class="box">
            <img :src="img" :alt="text">
        <h6>{{title}}</h6>
        <h6>December 26, 2022</h6>
        </div>
        
    </div>

</template>

<script>
import {store} from '../data/store'

    export default {
        name: "CardComponent",
        components :{
            store
            
        },
       props:{ 
      img :String,   
      title: String
       },
     

    }
</script>

<style lang="scss" scoped>

img{
    width: 250px;
    height: 250px;
}
</style>