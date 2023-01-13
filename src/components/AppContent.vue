<script>
import Cardyugi from './Cardyugi.vue';
export default {
    components: {
        Cardyugi
    }
}   
</script>
<template lang="">  
    <div class="container">
        <div class="row">
            <h3>Found 39 cards</h3>
            <Cardyugi/>                    
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .container{
        .row{
            display: flex;
            flex-direction: column;
            h3{
                background-color: rgb(58, 58, 58);
                padding: 15px;
                color: $primary-white;
            }
        }
    }
</style>