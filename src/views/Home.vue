<template>
  <div class="home">
    <div class="baner">
      <div class="left-baner">
        <span><i class=" icon fas fa-head-side-virus"></i> {{ lastestTotals.confirmed | amount}} cases</span>
        <span><i class=" icon fas fa-skull-crossbones"></i> {{ lastestTotals.deaths | amount}} deaths</span>
      </div>
      <div class="center-baner">
        <span class="icon-center"><i class="fas fa-globe"></i></span>
        <div class="text-center-baner">
          <span class="">Around the world</span>
          <button class="button">Check Adivices</button>
        </div>
      </div>
      <div class="right-baner">
        <span>{{ lastestTotals.critical | amount}} critical <i class=" icon fas fa-exclamation-circle"></i> </span>
        <span>{{ lastestTotals.recovered | amount}} recovered <i class=" icon fas fa-fist-raised"></i> </span>
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
        <div v-for="flag in filteredFlags" :key="flag.numericCode">
          <card :country="flag" />
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { getLastestTotals, getFlags } from '@/API'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: { Card },

  data () {
    return {
      lastestTotals: {},
      flags: [],
      filter: ''
    }
  },

  created () {
    getLastestTotals()
      .then(respose => {
        this.lastestTotals = respose
        this.lastestTotals = this.lastestTotals[0]
      })

    getFlags()
      .then(response => {
        this.flags = response
      })
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
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'
.baner
  display: grid
  grid-template-columns: 1fr 2fr 1fr
  justify-content: center
  align-items: center
  color: primary-color
  background-color: terceary-color-light
  margin: 30px 10%
  padding: 10px 10px 0 10px
  border-radius: 20px
  box-shadow: 2px 2px 4px terceary-color-light

.center-baner,
.right-baner,
.left-baner
  display: grid
  grid-template-rows: repeat(2, 1fr)
  align-items: center
  justify-content: center
  text-align: center
  font-size: 22px

.right-baner,
.left-baner
  row-gap: 20px
  justify-content: space-between
  margin: 10px

.left-baner
  text-align: left

.right-baner
  text-align: right

.icon-center
  font-size: 130px

.text-center-baner
  font-size: xx-large
  font-weight: bolder
  display: grid
  grid-template-rows: repeat(2, 1fr)
  row-gap: 10px

.button
  background-color: extra-color
  border: none
  padding: 10px
  color: primary-color
  font-weight: bold
  box-shadow: 2px 2px 4px extra-color

.icon
  font-size: 30px

.search
  width: 70%
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
  grid-template-columns: repeat(5, 1fr)
  column-gap: 15px
  row-gap: 20px
  justify-content: center
  align-items: center

.container
  width: 95%
  margin: 25px auto
</style>
