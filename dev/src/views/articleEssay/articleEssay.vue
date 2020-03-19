<template>
    <v-content>
        <v-row :class="{mobile:$vuetify.breakpoint.xs}">
            <v-col class="essay" cols=12 sm=8>
                <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p>
            </v-col>
            <v-col class="aside" cols=12 sm=4>
                <p>侧栏</p>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "articleEssay",
        computed:{

        },
    }
</script>

<style scoped lang="scss">
@import 'articleEssay.scss';
</style>