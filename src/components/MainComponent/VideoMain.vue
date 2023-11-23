<template>
  <h2 class="text-uppercase">video</h2>
    <section class="d-flex flex-row"  id="video">
      <div >
        <iframe width="860" height="480" src="https://www.youtube.com/embed/ICt1jYfucec?si=ZnNLazoM6rPviGvX" ></iframe>
      </div>
      <div id="video-list" class="d-flex flex-column overflow-y-scroll ">
        <div v-for="el in this.store.videoEl" class="d-flex flex-row mb-3" id="listVideo">
          <iframe width="150" height="150" :src="el.link" title="YouTube video player" frameborder="0" ></iframe>
          <h6 class="text-center m-auto">{{ el.text }}</h6>
        </div>
      </div>
     
      

    </section>
</template>

<script>

import { store } from '../../data/store';
import VideoComponent from '../VideoComponent.vue';
    export default {
        name: "VideoMain",
        components:{          
            VideoComponent          
        },
        data(){
          return{
            store
          }
        }
    }
</script>

<style lang="scss" scoped>

#listVideo{
  border: solid 1px black;
}
#video{
  width: 100%;
  height: 490px;
}
</style>