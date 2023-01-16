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
        <select class="opt" v-model="store.typeArche" @change="sendValue" name="ciao" id="type">
            <option v-for="(arType, index) in store.type" :key="index">{{arType.archetype_name}}</option>
        </select>
    </div>
</template>
<style lang="scss" scoped>
    .opt{
        padding: 10px;
        margin: 20px 0;
    }
</style>