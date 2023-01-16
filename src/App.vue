<script>
import AppContent from './components/AppContent.vue';
import { store } from './store.js';
import axios from 'axios';
export default {
    components:{
        AppContent,
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        this.getArcheType();
        this.getListCards();
    },
    methods:{
        getListCards(){
            axios.get(`${store.url}?archetype=Alien}`).then((response) => {
                store.cardList = response.data.data
            })
        },
        getArcheType(){
            axios.get(store.urlArche).then((reponse) => {
                store.type = reponse.data
                console.log(store.type)
            })
        }
    }
}
</script>
<template lang="">
    <AppContent/>
</template>
<style lang="scss">
    @use './style/generals.scss';
</style>
