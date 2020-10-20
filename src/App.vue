<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style lang="stylus">
@import './css/main'

#app
  text-align center
  color #2c3e50
  margin-top 60px
</style>
