<script>
import Cardyugi from './Cardyugi.vue';
import { store } from '../store.js'
export default {
    components: {
        Cardyugi
    },
    data(){
        return{
            store
        }
    }
}   
</script>
<template lang="">  
    <div v-if="store.cardList =[]" class="disp">
        <h1>caricamento in corso</h1>
        <div class="loader"></div>
    </div>
    <div v-else class="bg">
        <div class="container">
            <div class="row">
                <h3>Found 39 cards</h3>
                <Cardyugi/>                    
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .disp{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        h1{
            margin-right: 20px;
        }
        .loader {
            border: 10px solid #f3f3f3; /* Light grey */
            border-top: 10px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    }
    .bg{
        background-color: orange ;
        .container{
            .row{
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                padding: 30px;
                h3{
                    width: 100%;
                    background-color: rgb(58, 58, 58);
                    padding: 15px;
                    color: $primary-white;
                }
            }
        }
    }
</style>