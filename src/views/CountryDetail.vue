<template>
  <div class="country-detail center">
    <div class="container" v-show="!isLoading">
      <h1 class="name-country">{{ countryData.name }}</h1>
      <h2 class="subtitle center">{{ countryData.region }}</h2>

      <div class="country-detail">
        <img class="img" :src="countryData.flag" alt="country.name">

        <div class="info-country">
          <div class="info">
            <div class="center">
              <div class="background-icon">
                <i class=" icon fas fa-head-side-virus"></i>
              </div>
            </div>

            <p v-if="country">{{ country.confirmed | amount }} <span>Confirmed</span></p>
          </div>

          <div class="info">
            <div class="center">
              <div class="background-icon">
                <i class=" icon fas fa-exclamation-circle"></i>
              </div>
            </div>
            <p v-if="country">{{ country.critical | amount }} <span>Critical</span></p>
          </div>

          <div class="info">
            <div class="center">
              <div class="background-icon">
                <i class=" icon fas fa-skull-crossbones"></i>
              </div>
            </div>

            <p v-if="country">{{ country.deaths | amount }} <span>Deaths</span></p>
          </div>

          <div class="info">
            <div class="center">
              <div class="background-icon">
                <i class=" icon fas fa-fist-raised"></i>
              </div>
            </div>

            <p v-if="country">{{ country.recovered | amount }} <span>Recovered</span></p>
          </div>

          <p v-if="country" class="p-dark-color center">Last update: {{ lastUpdate }}</p>
      </div>

      </div>
      <h2 class="subtitle center">More countries in {{ countryData.region }}</h2>

      <div class="countries">
        <div v-for="flag in countriesRegion" :key="flag.numericCode " class="center">
        <card :country="flag" />
        </div>
      </div>
    </div>

    <loader v-show="isLoading"/>

  </div>
</template>

<script>
import { getCountry, getFlagsByRegion, getFlagsByName } from '@/API'
import Card from '@/components/Card'
import Loader from '@/components/Loader.vue'
export default {
  name: 'CountryDetail',
  components: { Card, Loader },
  data () {
    return {
      name: '',
      country: {},
      countryData: {},
      countriesRegion: []
    }
  },

  created () {
    this.$store.commit('changePage', '')
    this.getData()
  },

  watch: {
    $route () {
      this.getData()
    }
  },

  methods: {
    async getData () {
      this.$store.commit('changeStateLoading', true)
      this.name = this.$route.params.name
      const region = this.$route.params.region
      await getCountry(this.name)
        .then(response => {
          this.country = response[0]
        })

      this.countryData = this.$store.state.country

      if (this.countryData) {
        await getFlagsByName(this.name)
          .then(res => {
            this.countryData = res[0]
          })
      }

      await getFlagsByRegion(region)
        .then(res => {
          this.countriesRegion = res
          this.countriesRegion = this.countriesRegion.filter(item => item.name !== this.countryData.name)
          this.countriesRegion.length = 10
        })

      this.$store.commit('changeStateLoading', false)
    }
  },

  computed: {
    lastUpdate () {
      return this.country.lastUpdate ? this.country.lastUpdate.slice(0, 10) : ''
    },

    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'
  img
    max-width: 100%

  .center
    display: flex
    justify-content: center
    align-items: center

  .p-dark-color
    color: extra-color

  .subtitle
    color: extra-color
    font-size: x-large
    margin: 0 0 10px 0

  .name-country
    font-size: 10vw
    text-align: center
    padding: 0
    margin: 0
    color: terceary-color

  .country-detail
    display: grid
    // grid-template-columns: 2fr 1fr
    margin: 30px

  .info-country
    color: primary-color
    text-align: center

  .info
    text-align: center
    background-color: extra-color
    border-radius: 20px
    box-shadow: 2px 2px 1px extra-color
    margin: 20px 10px
    padding: 0 20px
    display: grid
    grid-template-columns: 1fr 5fr
    align-items: center
    justify-content: center

  .background-icon
    background-color: primary-color
    padding: 5px
    width: 30px
    height: 30px
    border-radius: 50%
    color: extra-color
    text-align: center

  @media (min-width: 768px)
    .country-detail
      display: grid
      grid-template-columns: 3fr 2fr
      margin: 30px

  @media (min-width: 992px)
    .country-detail
      display: grid
      grid-template-columns: 2fr 1fr
      margin: 30px
</style>
