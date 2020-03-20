<template>
    <div>
        <div class="wrapper">
            <transition name="fade">
                <div v-show="flag">
                    <div class="title">
                        <span>记录 | </span>
                        <span v-text="'2020-3-12'"/>
                    </div>
                    <div class="info">
                        <div v-text="info" />
                        <div v-show="info !== '无日志记录 ...'">
                            <a :href=""
                               v-text="'查看'"
                            />
                        </div>
                    </div>
                </div>
            </transition>
            <ul class="gridBox d-flex align-content-start flex-wrap" :class="{size_MB:$vuetify.breakpoint.xs}">
                <li v-for="n in 135">
                    <div class="grid"
                    />
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sideChart"
    }
</script>

<style scoped lang="scss">

</style>