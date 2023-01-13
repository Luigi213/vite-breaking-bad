<script>
import Cardyugi from './Cardyugi.vue';
export default {
    components: {
        Cardyugi
    }
}   
</script>
<template lang="">  
    <div class="bg">
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