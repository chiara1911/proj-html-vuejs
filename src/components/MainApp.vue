<template>
    <div class="container bg-info">
<h2>main</h2>

     <CardComponent v-for="(item, index) in card" :title="item.title" :img="item.img"/> 

<section>lifestyle</section>
<section>logo grande</section>
<section>featured posts</section>
<section>video</section>

    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { card } from '../../card.js';
    export default {
        name: 'MainApp',
        components: {
            CardComponent,
            card
        },

      

    }
</script>

<style lang="scss" scoped>

</style>