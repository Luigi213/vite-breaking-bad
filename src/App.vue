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
    mounted(){
        this.getListCards();
    },
    methods:{
        getListCards(){
            axios.get(store.url).then((response) => {
                let ArrayCard = response.data
                for(let i=0; i<15;i++){
                    store.cardList.push(ArrayCard.data[i])
                }
            })
        }
    }
}
</script>
<template lang="">
    <AppContent/>
</template>
<style lang="scss">
    @use './style/generals.scss' as *;
</style>
