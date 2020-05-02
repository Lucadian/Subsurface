<template>
    <article>
        <div class="mark"/>
        <div class="essayText"
             v-html="html"
        >
        </div>
        <div class="Fin">
            Fin
        </div>
    </article>
</template>

<script>
    import axios from 'axios'
    import { essayHost } from '@/assets/host'

    export default {
        name: "essayText",
        data(){
            return {
                html:''
            }
        },
        watch:{
            html(val){
                if( val.includes('class="prettyprint"') ){
                    const s = document.createElement('script')
                          s.type   = 'text/javascript'
                          s.onload = 'PR.prettyPrint()'
                          s.src    = '/dist/run_prettify.js'
                          document.body.appendChild(s)
                }
            }
        },
        props:['info','url'],
        created(){
            axios.get(this.url)
                .then(response => {
                    let arr = response.data.split('<!--divider-->')
                    this.info.str = arr[0]
                    this.html = arr[1].replace(/__imageHost/g,essayHost)
                })
                .catch(err => {
                    window.location = 'http://'+ window.location.host + '/essay_err?' + err
                })
        }
    }
</script>

<style lang="scss">
@import 'essayText.scss';
</style>