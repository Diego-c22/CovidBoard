<template>
  <div class="nav-bar">
    <router-link class="link" to="/"><h1>CovidBoard<span><i class="fas fa-virus"></i></span></h1></router-link>
    <div class="links">
      <router-link :class="{'focused': page == 'home'}" class="link" to="/">Home</router-link>
      <router-link :class="{'focused': page == 'advices'}" class="link" to="/advices">Advices</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    page () {
      return this.$store.state.page
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
  grid-template-rows: 2fr 1fr
  justify-content: center
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
    font-weight: bold
    color: terceary-color
    font-size: large

.link
  text-decoration: none
  color: inherit

.focused
    border-bottom: solid 3px terceary-color

@media (min-width: 576px)
  .nav-bar
    margin: 0
    padding: 2px 10px
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: 1fr
    box-shadow: 0 4px 4px secundary-color

</style>
