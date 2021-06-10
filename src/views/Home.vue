<template>
  <div class="home center" >
    <div v-show="!isLoading">
      <div class="baner">
        <div class="left-baner">
          <span class="cases"><i class=" icon fas fa-head-side-virus"></i> {{ lastestTotals.confirmed | amount}} cases</span>
          <span class="cases"><i class=" icon fas fa-skull-crossbones"></i> {{ lastestTotals.deaths | amount}} deaths</span>
        </div>
        <div class="center-baner">
          <span class="icon-center"><i class="fas fa-globe"></i></span>
          <div class="text-center-baner">
            <span class="">Around the world</span>
            <router-link to="/advices" class="button link center">Check Adivices</router-link>
          </div>
        </div>
        <div class="right-baner">
          <span class="cases"><i class=" icon fas fa-exclamation-circle"></i> {{ lastestTotals.critical | amount}} critical  </span>
          <span class="cases"><i class=" icon fas fa-fist-raised"></i> {{ lastestTotals.recovered | amount}} recovered</span>
        </div>
      </div>

      <div class="text-center">
        <div class="search">
          <input type="text" class="input" placeholder="Find a country" v-model="filter">
          <i class="fas fa-search icon-input"></i>
        </div>
      </div>

      <section class="container">
        <div class="countries">
          <div v-for="flag in filteredFlags" :key="flag.numericCode" class="center">
            <card class="max-width-card" :country="flag" />
          </div>
        </div>
      </section>
    </div>
    <loader v-show="isLoading"/>

  </div>
</template>

<script>
import { getLastestTotals, getFlags } from '@/API'
import Card from '@/components/Card'
import Loader from '@/components/Loader.vue'

export default {
  name: 'Home',
  components: { Card, Loader },

  data () {
    return {
      lastestTotals: {},
      flags: [],
      filter: ''
    }
  },

  mounted () {
    this.$store.commit('changePage', 'home')
    this.$store.commit('changeStateLoading', true)
    this.getData()
  },

  methods: {
    async getData () {
      await getLastestTotals()
        .then(respose => {
          this.lastestTotals = respose
          this.lastestTotals = this.lastestTotals[0]
        })

      await getFlags()
        .then(response => {
          this.flags = response
        })

      this.$store.commit('changeStateLoading', false)
    }
  },

  computed: {
    filteredFlags () {
      if (this.filter === '') {
        return this.flags
      }
      return this.flags.filter(flag =>
        flag.name.toLowerCase().includes(this.filter.toLowerCase()) ||
        flag.region.toLowerCase().includes(this.filter.toLowerCase())
      )
    },

    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'

.max-width-card
  max-width: 160px
.baner
  display: grid
  grid-template-rows: 1fr 2fr 1fr
  justify-content: center
  align-items: center
  color: primary-color
  background-color: terceary-color-light
  margin: 30px 5%
  padding: 10px 10px 0 10px
  border-radius: 20px
  box-shadow: 2px 2px 4px terceary-color-light

.cases
  display: grid
  grid-template-rows: repeat(2, 1fr)
  justify-content: center
  align-items: center
  text-align: center

.right-baner,
.left-baner
  row-gap: 20px
  justify-content: space-between
  margin: 10px

.icon-center
  font-size: 130px
  text-align: center

.center-baner
  text-align: center
  margin: 20px 0

.text-center-baner
  font-size: xx-large
  font-weight: bolder
  display: grid
  grid-template-rows: repeat(2, 1fr)
  row-gap: 10px

.button
  background-color: extra-color
  border: none
  width: 100%
  font-size: large
  color: primary-color
  font-weight: bold
  box-shadow: 2px 2px 4px extra-color

.icon
  font-size: 30px

.search
  width: 80%
  position: relative

.input
  width: 100%
  border: 2px solid terceary-color
  border-radius: 30px
  align-self: center
  padding: 15px 20px
  font-size: larger

.icon-input
  position: absolute
  right: 0px
  top: 10px
  font-size: 30px
  color: terceary-color

.text-center
  display: flex
  justify-content: center
  text-align: center
  align-items: center

.countries
  display: grid
  grid-template-columns: repeat(2, 1fr)
  width: 100%
  column-gap: 15px
  row-gap: 20px
  justify-content: center
  align-items: center

.container
  width: 100%
  margin: 25px auto

@media (min-width: 470px)
  .max-width-card
    max-width: 230px

@media (min-width: 576px)
  .container
    width: 95%

  .baner
    margin: 30px 10%
  .countries
    display: grid
    grid-template-columns: repeat(2, 1fr)

@media (min-width: 768px)
  .baner
    display: grid
    grid-template-columns: 1fr 2fr 1fr
    grid-template-rows: 1fr
    justify-content: center
    align-items: center
    margin: 30px 10%
    padding: 10px 10px 0 10px
    border-radius: 20px

  .center-baner,
  .right-baner,
  .left-baner
    display: grid
    grid-template-rows: repeat(2, 1fr)
    align-items: center
    justify-content: center
    text-align: center
    font-size: 22px

  .search
    width: 70%

  .countries
    display: grid
    grid-template-columns: repeat(3, 1fr)

@media (min-width: 992px)
  .countries
    display: grid
    grid-template-columns: repeat(4, 1fr)

@media (min-width: 1200px)
  .countries
    display: grid
    grid-template-columns: repeat(5, 1fr)
</style>
