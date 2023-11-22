<template>
    <div class="container bg-info">
<h2>main</h2>
<section class="d-flex flex-row">
    <div class="container">
<!--     
     <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>  -->
     <div class="row">
        <!-- card a sinistra -->
        <div class="col-3 d-flex flex-column justify-content-between ">
            <div class="box">
                <img src="images/assets/best-places-300x200.webp" alt="">
                <span>hello</span>
            </div>
            <div class="box">
                <img src="images/assets/best-places-300x200.webp" alt="">
                <span>hello</span>
            </div>
        </div>
        <!-- card al centro -->
        <div class="col-6">
            <div class="box d-flex flex-column ">
                <img src="images/assets/best-places-300x200.webp" alt="">
                <span>hello</span>
            </div>
        </div>
        <!-- card a destra -->
        <div class="col-3">
            <div class="box">
                <img src="images/assets/best-places-300x200.webp" alt="">
                <span>hello</span>
            </div>
            <div class="box">
                <img src="images/assets/best-places-300x200.webp" alt="">
                <span>hello</span>
            </div>
            
        
     </div>
     </div>
    </div>
    </section>
<section class="d-flex flex-column">
    lifestyle
    <div class="d-flex flex-row">
    
            
    <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>
</div>
    
</section>
<section class="d-flex flex-column">
    logo grande
    <div class="d-flex flex-row">
    <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>
</div>
    
</section>
<section class="d-flex flex-column">
    featured posts
    <div class="d-flex flex-row">
    <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>
</div>
</section>
<section class="d-flex flex-column">
    video
    <div class="d-flex flex-row">
    <CardComponent v-for="card in this.store.cardEl" :title="card.title" :img="card.img"/>
</div>
</section>

    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import { store } from '../data/store';
    export default {
        name: 'MainApp',
        components: {
            CardComponent,
            
            
        },
        data(){
            return{
                store
            }
        }     
    }
</script>

<style lang="scss" scoped>


</style>