<script>
import AppContent from './components/AppContent.vue';
import axios from 'axios'
import { store } from './store.js'
export default {
    components:{
        AppContent,
    },
    data(){
        return{
            store,
        }
    },
    created(){
        this.getListCards();
    },
    methods:{
        getListCards(){
            axios.get(store.url).then((response) => {
                store.cardList = response.data
            })
        }
    }
}
</script>
<template lang="">
    <AppContent v-for="(card,index) in store.cardList" :key="index" :cardYugi="card"/>
</template>
<style lang="scss">
    @use './style/generals.scss' as *;
</style>
