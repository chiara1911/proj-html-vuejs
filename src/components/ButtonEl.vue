<template>
 <button class="btn btn-light ">{{ item }}</button>
            <button class="btn btn-light">{{ item2 }}</button>
</template>

<script>
import {store} from '../data/store'
    export default {
        name:"ButtonEl",
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped></style>
