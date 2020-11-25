<template>
  <div>
    
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    
    <router-view></router-view>
  </div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import tabbar from './components/Tabbar.vue'

export default {
  
  data () {
    return{
      
    }
  },
 
  mounted(){
    
  },
  methods:{
    
  },
  components:{
    
    tabbar
  }
}
</script>
<style lang="scss">
 *{
   margin:0;
   padding: 0;
 }
 html{
   height: 100%;
 }
 li{
   list-style: none;
 }
</style>
