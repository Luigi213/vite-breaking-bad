<script>
import Cardyugi from './Cardyugi.vue';
export default {
    components:{
        Cardyugi,
    },
    props:{
        cardYugi: Array
    },
}
</script>
<template lang="">
    <Cardyugi  v-for="(yugiCd,index) in cardYugi" :key="index" :cd="yugiCd"/>
</template>
<style lang="scss" scoped>
    
</style>