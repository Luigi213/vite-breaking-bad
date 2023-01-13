<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            cardArray: store,
        }
    },
}
</script>
<template lang="">
    <div class="image-yu" v-for="(card, index) in cardArray.cardList" :key="index">
        <div v-for="(card_image, index) in card.card_images" :key="index">
            <img :src="card_image.image_url" alt="">            
        </div>
        <h3>{{ card.name }}</h3>
    </div>
</template>
<style lang="scss" scoped>
    .image-yu{
        width: calc(100% / 5);    
        .card{
            img{
                object-fit: contain;        
            }
        }
    }
</style>