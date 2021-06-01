<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view v-if="!isLoading"/>
    <loader v-if="isLoading"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Loader from '@/components/Loader'
export default {
  name: 'App',
  components: { NavBar, Loader },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }

}
</script>
<style lang="stylus">
@import './assets/css/_variables.styl'

html
  height: 100%
body
  margin: 0
  height: 100%
  font-family: thinoo
  //background: linear-gradient(primary-color , secundary-color)
  background-color: primary-color
</style>
