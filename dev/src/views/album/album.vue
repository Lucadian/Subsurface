<template>
    <v-content>
        <v-container fluid>
            <v-row>
                <v-col class="box" cols="6" sm="4" md="3" v-for="n in 10">
                    <img src="ttt.jpg" alt="">
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import { mapState } from 'vuex'
    import { title } from './title.js'
    export default {
        name: "album",
        computed:{
            ...mapState(['headbar']),
        },
        created(){
            this.headbar.style.shrink = false
            this.headbar.title =  title
        }
    }

</script>

<style scoped lang="scss">
main.v-content{
    &::before{
        display: block;content: '';
        position: fixed;top: 0;left: 0;
        width: 100vw;height: 100vh;
        background-color: #edf0f4;
    }
    /*width: 70rem;*/
    width: 1120px;
    margin: 64px auto 0 auto;
    padding-top: 0!important;
    @media(max-width: 960px){
        margin-top: 56px;
    }
}
div.row{
    div.box{
        padding: 5px;
        margin: 0;
        max-height: 280px;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
/*div.box{*/
/*    width: 270px;*/
/*    height: 270px;*/
/*    box-sizing: border-box;*/
/*    border: 1px solid black;*/
/*    background-color: #00bfa5;*/
/*}*/


</style>