<template>
  <v-app>
    <headbar/>
    <router-view/>
    <footbar/>
  </v-app>
</template>

<script>
import headbar from '@/components/headbar/headbar.vue'
import footbar from '@/components/footbar/footbar.vue'
export default {
  name: 'App',

  components: {
    headbar,footbar
  },

  data: () => ({
    //
  }),
  methods:{

  }
};
</script>
