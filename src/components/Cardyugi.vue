<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store,
        }
    },
}
</script>
<template lang="">
    <div class="container-card">
        <div class="image-yu" v-for="(card, index) in store.cardList" :key="index">
            <div class="card">
                <img :src="card.card_images[0].image_url" alt="">            
                <h3>{{ card.name }}</h3>
                <span>{{ card.archetype }}</span>
            </div>
        </div> 
    </div>
</template>
<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .container-card{
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
        .image-yu{
            width: calc(100% / 5 - 31.5px);              
            .card{
                width: 100%;
                height: 375px;
                margin-bottom: 20px;
                text-align: center;
                background-color: $secondary-orange;
                h3{
                    color: $primary-white;
                }
            }
        }
    }
</style>