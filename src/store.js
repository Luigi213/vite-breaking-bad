import { reactive } from "vue";

export const store = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    urlArche: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    typeArche: '',
    cardList: [],
    type: [],
})