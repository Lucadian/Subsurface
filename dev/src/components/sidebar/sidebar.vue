<template>
    <div class="sidebar">
        <update-list/>
        <divider/>
        <recommends/>
        <block-button/>
        <blog-chart/>
    </div>
</template>

<script>
    import updateList from './updateList/updateList'
    import divider from './divider/divider'
    import recommends from './recommends/recommends'
    import blockButton from './blockButton/blockButton'
    import blogChart  from './blogChart/blogChart'
    export default {
        name: "sidebar",
        components:{
            updateList,divider,recommends,blockButton,blogChart
        }
    }
</script>

<style scoped lang="scss">
div.sidebar{
    position: sticky;
    top: 1.2rem;
    padding: 1.7rem;
    @media(max-width: 600px){
        padding: 12px 10px 40px 10px;
    }
}
</style>