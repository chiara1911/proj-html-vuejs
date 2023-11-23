<template>
    <div class="d-flex flew-column px-2">
        <div class="box">
            <img :src="img" :alt="title">
            <div>
                <h6>{{title}}</h6>
        <h6>{{ date }}</h6>
            </div>
        
        </div>
        
    </div>

</template>

<script>
import {store} from '../data/store'

    export default {
        name: "CardComponent",
        components :{            
                    },
        data(){
            return {
                store
            }
        },
       props:{ 
      img :String,   
      title: String,
      date: String
       },


    }
</script>

<style lang="scss" scoped>

img{
    width: 350px;
    height: 250px;
    border-radius: 5%;
}
</style>