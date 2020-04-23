<template>
    <div class="blogTabs d-none d-md-flex justify-end" v-if="tabbar.tabs.length">
        <div class="wrapper d-flex justify-end">
            <a class="tab gap"
               v-for="(item,idx) in tabbar.tabs"
               :class="{active:currentIndex === idx}"
               :href="'#month=' + parseInt(item)"
               @click="changeLabel"
               v-text="item"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: "blogTabs",
        data(){
            return {
                timer:null,
                scrolling:null
            }
        },
        computed:{
            currentIndex (){
                return this.tabbar.currentIndex ? Number(this.tabbar.currentIndex) : this.tabbar.tabs.length - 1
            },

        },
        methods:{
            changeLabel(){
                if(!this.tabbar.scrolling){
                    let pageYOffset = window.pageYOffset

                    //切换标签时关闭滚动 switchLabel
                    this.tabbar.scrolling = setInterval(()=>{
                        if(window.pageYOffset !== pageYOffset)
                            pageYOffset = window.pageYOffset
                        else{
                            clearInterval(this.tabbar.scrolling)
                            this.tabbar.scrolling= null
                        }
                    },400)
                }

            },
            switchLabel(){
                if(!this.timer){
                    let offsets = this.tabbar.offsets
                    for(let i=0;i<offsets.length;i++){
                        if(window.pageYOffset > offsets[i]- 260){
                            this.tabbar.currentIndex = i.toString()
                            break
                        }
                    }
                }

            },
            debounce() {
                if(!this.timer){
                    this.timer = setTimeout(()=>{
                        this.timer = null
                        this.switchLabel()
                    },200)
                }

            },

        },
        props:['tabbar'],

        mounted (){
            window.addEventListener('scroll',this.debounce,true)
        },
        destroyed () {
            window.removeEventListener('scroll', this.debounce)
        }
    }
</script>

<style scoped lang="scss">
div.blogTabs{
    position: sticky;top:85px;
    width: 720px;
    transform: translateX(-744px);
    margin-bottom: -30px;
    user-select: none;
}
div.wrapper{
    width: fit-content;
    transform-origin: right top;
    transform: rotate(-90deg);
    cursor: pointer;
    background-color: #7c7c7c;
    box-shadow: 0 0 8px #646464;
    border-radius: 4px;
    a.tab{
        position: relative;
        color: rgba(0,0,0,.6);
        font-size: 14px;
        line-height: 24px;
        width: 58px;
        height: 30px;
        box-sizing: border-box;
        text-align: center;
        border-radius: 4px 4px 0 0;
        background-color: hsl(0,0,85%);
        &.gap:not(:first-child){
            margin-left: 1px;
        }
        &::after{
            display: block;content: '';
            position: absolute;top: 0;left: 0;
            width: 100%;height: 100%;
            background: linear-gradient(0deg,rgba(0,0,0,.7) 8%,rgba(0,0,0,.20) 24%,rgba(0,0,0,0) 45%);
        }
        &:hover{
            color: black;
            background-color: hsl(0,0,95%);
        }

    }
    a.tab.active{
        color: black;
        font-weight: bold;
        background-color: hsl(0,0,95%);
        &::after{
            background: none
        }
    }
}
</style>