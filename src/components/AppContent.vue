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
        <div class="container-card">
            <Cardyugi/>                    
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        .container-card{
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>