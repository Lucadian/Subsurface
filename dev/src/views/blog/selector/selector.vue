<template>
    <div class="selector">
        <v-select class="d-flex d-md-none"
                  :items="tabbar.tabs"
                  prepend-icon="mdi-calendar-month"
                  :label="year + ' 年'"
                  outlined
                  dense
                  dark
        ></v-select>
    </div>

</template>

<script>
    export default {
        name: "selector",
        data(){
            return {
                active:false,
                // items:[
                //     '1月',
                //     '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
                // ],
                current:'1月',
            }
        },
        props:['tabbar','year'],
        computed:{
            activated(){
                // return this.active ? Number(this.active) : this.tabbar.tabs.length - 1
            },
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