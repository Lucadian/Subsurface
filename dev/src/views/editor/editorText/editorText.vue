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
    export default {
        name: "editorText",
        computed:{
            html(){
                let html = this.value
                if( html.includes('class="prettyprint"') ){
                    const s = document.createElement('script')
                          s.type   = 'text/javascript'
                          s.onload = 'PR.prettyPrint()'
                          s.src    = '/dist/run_prettify.js'
                    document.body.appendChild(s)
                }
                return html
            }
        },
        props:['value'],
    }
</script>

<style lang="scss">
@import 'editorText.scss';
</style>