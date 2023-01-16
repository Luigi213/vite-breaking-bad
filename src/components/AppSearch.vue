<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store,
        }
    },
    methods:{
        sendValue(){
            this.$emit('search', store.typeArche)
        }
    }
}
</script>
<template lang="">
    <div>
        <select v-model="store.typeArche" @change="sendValue" name="type" id="type">
            <option value="Alien">Alien</option>
            <option v-for="(arType, index) in store.type" :key="index">{{arType.archetype_name}}</option>
        </select>
    </div>
</template>
<style lang="scss" scoped>
    
</style>