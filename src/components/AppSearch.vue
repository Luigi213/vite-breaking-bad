<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <div>
        <select name="type" id="type">
            <option v-for="(arType, index) in store.type" :key="index" >{{arType.archetype_name}}</option>
        </select>
    </div>
</template>
<style lang="scss" scoped>
    
</style>