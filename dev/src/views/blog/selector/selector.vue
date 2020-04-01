<template>
    <v-select class="selector d-flex d-md-none" v-if="headbar.valid.title"
            :items="items"
            label="月份选择"
            outlined
            dark
    ></v-select>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "selector",
        data(){
            return {
                items:[
                    '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
                ],
                current:'1月'
            }
        },
        computed:{
            ...mapState(['headbar']),
        }
    }
</script>

<style scoped lang="scss">
.selector{
    /*background-color: rgba(55,61,68,.8);*/
    position: fixed;top: 0;
    z-index: 5;
}
</style>