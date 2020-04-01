<template>
    <div class="blogText">
        <div v-for="month in blogs" v-if="month.hasRecord" class="month">
            <div class="label-month" v-show="!month.isLatest">
                - 2020 年 {{ month.month }} 月 -
            </div>
            <div class="day" v-if="day.log" v-for="day in month.records">
                <div :id="'log_' + year + '-' + month.month + '-' + day.day" class="label-day">
                    2020 - {{ month.month }} - {{ day.day }}
                </div>
                <div class="content" v-html="day.log"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { blogs } from './2020'

    export default {
        name: "blogText",
        data(){
            return {
                blogs,
                year:2020
            }
        },
        components:{
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/style.theme.scss";
    div.blogText{
        position: relative;
        background-color: hsl(0,0,95%);
        border-radius: 0 0 0 3px;
        box-sizing: border-box;
        border-right: .5px solid black;
        padding: .9rem 1.7rem;
        @media(max-width: 600px){
            border-right: 0;
            border-radius: 0;
            padding: 0.6rem 0.6rem 2rem 0.6rem; /*移动端内容区宽度*/
            background-color: white;
        }

    }
    div.month{
        transition: opacity .6s;
        opacity: 1;
        &.invisible{
            opacity: 0;
        }
        div.label-month{
            /*color: white;*/
            text-align: center;
            margin: .7rem 0 0 0;
            height: 1.4rem;
            line-height: 1.3rem;
            font-size: 14px;
            background-color: rgba(55,61,68,.1);
            border-radius:  0 0 4px 4px;
            position: relative;
            &::after{
                display: inline-block;content: '';
                height: 1px;width: 100%;
                background-color: $info_thread_red;
                position: absolute;top: -1px;left: 0;
            }
        }
        div.day{
            padding: 0.7rem 0;
            position: relative;
            &.anchored::before{
                position: absolute;top: 0;
                left: -2%;
                display: inline-block;content: '';
                width: 104%;height: calc(100% + 1px);
                border: 1px solid rgba(0,0,0,.6);
                border-radius: 4px;

            }
            &:not(:nth-child(2))::after{
                position: absolute;
                top: 0;
                display: inline-block;content: '';
                width: 100%;
                height: 1px;
                border-bottom: 1px dashed rgba(0,0,0,.2);
            }
            @media(max-width:480px){
                padding: 6px 0;
            }

            div.label-day{
                color: white;
                font-size: 12px;
                background-color: rgba(55,61,68,.6);
                display: inline-block;
                line-height: 1.1rem;
                text-align: center;
                height: 1.1rem;
                width: 5rem;
                border-radius: 3px;
                margin: .7rem 0;
            }
            div.content{

                p{
                    font-size: 16px;
                    margin: 9px 0;
                }
            }

        }
    }
</style>