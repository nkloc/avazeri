<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {

  name: 'App',
  components: {
    Header,
  }

}
</script>

<style lang="stylus">
@import './css/main'

#app
  color black
  font-family MaisonNeue
  
</style>
