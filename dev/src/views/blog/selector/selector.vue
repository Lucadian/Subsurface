<template>
    <div class="selector">
        <v-select class="d-flex d-md-none" v-if="visible.arkTitle"
                  :items="items"
                  prepend-icon="mdi-calendar-month"
                  :label="year"
                  outlined
                  dense
                  dark
        ></v-select>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "selector",
        data(){
            return {
                items:[
                    '1月',
                    '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
                ],
                current:'1月',
                year:'2020年'
            }
        },
        computed:{
            ...mapState(['visible','headbar']),
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
.selector{
    position: fixed;top: 8px;left: 12px;
    z-index: 5;
    width: 180px;
}
</style>