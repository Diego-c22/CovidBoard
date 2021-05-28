<template>
  <div class="nav-bar">
    <h1>CovidBoard<span><i class="fas fa-virus"></i></span></h1>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="advice">Advices</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      lastestTotals: {}
    }
  }

}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'

.nav-bar
  background-color: secundary-color
  color: terceary-color
  margin: 0
  padding: 2px 10px
  display: grid
  grid-template-columns: repeat(2, 1fr)
  box-shadow: 0 4px 4px secundary-color

.links
  display: flex
  flex-direction: row
  align-items: center
  justify-content: flex-end
  margin-right: 10px

  & a
    padding: 5px
    margin: 0 10px
    text-decoration: none
    font-weight: bold
    color: terceary-color
    font-size: large

</style>
