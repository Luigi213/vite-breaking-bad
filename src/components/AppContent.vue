<script>
import Cardyugi from './Cardyugi.vue';
import AppSearch from './AppSearch.vue';
import axios from 'axios'
import { store } from '../store.js'
export default {
    components: {
        Cardyugi,
        AppSearch
    },
    data(){
        return{
            store,
            loading: true,
        }
    },
    mounted(){
        this.getListCards();
        this.getArcheType();
        if(this.loading == true){
            setTimeout(() => {
                this.loading = false
            }, 1000)
        }        
    },
    methods:{
        getListCards(word){
            if(word === undefined){
                axios.get(store.url + '?archetype=Alien').then((response) => {
                    store.cardList = response.data.data
                })
            }
            else{
                axios.get(store.url + '?archetype=' + word).then((response) => {
                    store.cardList = response.data.data
                })
            }
        },
        getArcheType(){
            axios.get(store.urlArche).then((reponse) => {
                store.type = reponse.data
            })
        }
    }
}   
</script>
<template lang="">  
    <div v-if="loading" class="disp">
        <h1>caricamento in corso</h1>
        <div class="loader"></div>
    </div>
    <div v-else>
        <header>
            <div class="logo">
                <img src="https://img.konami.com/products_master/eu_publish/yugioh_rush_duel/eu/it/images/rd_1_169png.png" alt="logo-yugi">
            </div>
            <h1>Yu-Gi-Oh Api</h1>
        </header>    
        <div class="bg">
            <div class="container">
                <AppSearch @search="getListCards"/>
                <div class="row">
                    <div class="search">
                        <h3 v-for="(item, index) in store.cardList" :key="index">Found {{ store.cardList.length }}  cards</h3>
                    </div>
                    <Cardyugi/>                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    @use '../style/partials/mixins' as *;
    .disp{
        height: 100px;
        @include display;
        justify-content: center;
        h1{
            margin-right: 20px;
        }
        .loader {
            @include loader
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
    header{
        background-color: white;
        @include display;
        .logo{
            width: 100px;
        }
    }
    .bg{
        .container{
            .row{
                @include display;
                flex-direction: column;
                background-color: white;
                padding: 30px;
                .search{
                    width: 100%;
                    h3:last-child{
                        background-color: rgb(58, 58, 58);
                        padding: 15px;
                        color: $primary-white;
                        width: 100%;
                    }
                    h3:not(h3:last-child){
                        display: none;
                    }
                }
            }
        }
    }
</style>