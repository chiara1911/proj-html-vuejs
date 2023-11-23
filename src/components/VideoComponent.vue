<template>
  <div class="d-flex flew-column px-2">
    <div class="box">
        <video autoplay controls
         class="position-absolute">
          <source
            :img="link"
          />
        </video>
      <h6>ciao</h6>
    </div>
  </div>
</template>

<script>

import {store} from "../data/store"

    export default {
        name: "VideoComponent",
        components:{},
        data(){
            return {
                store
            }
        },
        props:{
            link:String,
            text: String
        }

    }

</script>

<style lang="scss" scoped></style>
