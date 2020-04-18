<template>
  <v-app>
    <headbar/>
    <category/>
    <router-view/>
    <footbar/>
  </v-app>
</template>

<script>
import headbar from '@/components/headbar/headbar.vue'
import footbar from '@/components/footbar/footbar.vue'
import category from '@/components/category/category.vue'

import { mapState } from 'vuex'
export default {
  name: 'App',

  components: {
    headbar,footbar,category
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapState(['display']),
    documentWidth(){
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  watch:{
    documentWidth(val){
      this.display.isMobile = val
    }
  },
  created() {

    //这里设置路由 设备检测等
    // let ua = navigator.userAgent;
    // let ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    //         isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    //         isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    // if(isIphone || isAndroid)
    //   this.display.isMobile = true
  }
};
</script>
