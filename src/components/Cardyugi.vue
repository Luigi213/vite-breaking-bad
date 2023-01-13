<script>
export default {
    props:{
        cd: Object
    }
}
</script>
<template lang="">
    <div v-for="(cdd,index) in cd" :key="index" >
        <div v-if="index < 10">  
            {{index}}            
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>