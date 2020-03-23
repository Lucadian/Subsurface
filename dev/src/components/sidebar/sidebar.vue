<template>
    <div class="sidebar">
        <update-list/>
        <v-divider/>
        <recommends/>
        <block-button/>
        <blog-chart/>
    </div>
</template>

<script>
    import updateList from './updateList/updateList'
    import recommends from './recommends/recommends'
    import blockButton from './blockButton/blockButton'
    import blogChart  from './blogChart/blogChart'
    export default {
        name: "sidebar",
        components:{
            updateList,recommends,blockButton,blogChart
        }
    }
</script>

<style scoped lang="scss">
div.sidebar{
    position: sticky;
    top: 1.2rem;
    padding: 1.7rem;
    @media(max-width: 600px){
        padding: .6rem;
    }
}
</style>