<template>
    <div class="sidebar">
        <side-list/>
        <side-chart/>
        <side-pics/>
    </div>
</template>

<script>
    import sideList from './sideList/sideList'
    import sideChart from './sideChart/sideChart'
    import sidePics from './sidePics/sidePics'
    export default {
        name: "sidebar",
        components:{
            sideList,sideChart,sidePics
        }
    }
</script>

<style scoped lang="scss">
div.sidebar{
    position: sticky;
    top: 1.5rem;
    padding: 1.7rem;
    @media(max-width: 600px){
        padding: .6rem;
    }
}
</style>