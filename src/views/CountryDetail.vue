<template>
  <div class="container">
    <h1 class="name-country">{{ name }}</h1>
    <div class="info-country">
      <div class="info">
        <div class="center">
          <div class="background-icon">
            <i class=" icon fas fa-head-side-virus"></i>
          </div>
        </div>

        <p>{{ country.confirmed | amount }} <span>Confirmed</span></p>
      </div>

      <div class="info">
        <div class="center">
          <div class="background-icon">
            <i class=" icon fas fa-exclamation-circle"></i>
          </div>
        </div>
        <p>{{ country.critical | amount }} <span>Critical</span></p>
      </div>

      <div class="info">
        <div class="center">
          <div class="background-icon">
            <i class=" icon fas fa-skull-crossbones"></i>
          </div>
        </div>

        <p>{{ country.deaths | amount }} <span>Deaths</span></p>
      </div>

      <div class="info">
        <div class="center">
          <div class="background-icon">
            <i class=" icon fas fa-fist-raised"></i>
          </div>
        </div>

        <p>{{ country.recovered | amount }} <span>Recovered</span></p>
      </div>
    </div>

    <div class="country-detail">
      <img :src="countryData.flag" alt="country.name">
      <div class="info-detail">
        <p><span class="bold">Region:</span> {{ countryData.region }}</p>
        <p><span class="bold">Population:</span> {{ countryData.population }}</p>
        <p><span class="bold">Capital:</span> {{ countryData.capital }}</p>
      </div>
    </div>

    <div class="countries">
      <div v-for="flag in countriesRegion" :key="flag.numericCode">
      <card :country="flag" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCountry, getFlagsByRegion, getFlagsByName } from '@/API'
import Card from '@/components/Card'
export default {
  name: 'CountryDetail',
  components: { Card },
  data () {
    return {
      name: '',
      country: {},
      countryData: {},
      countriesRegion: []
    }
  },

  created () {
    this.name = this.$route.params.name
    const region = this.$route.params.region
    getCountry(this.name)
      .then(response => {
        this.country = response[0]
      })

    this.countryData = this.$store.state.country

    if (this.countryData) {
      getFlagsByName(this.name)
        .then(res => {
          console.log(res)
          this.countryData = res[0]
        })
    }
    console.log(!this.countryData)
    getFlagsByRegion(region)
      .then(res => {
        this.countriesRegion = res
        this.countriesRegion.length = 5
      })
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'

  .center
    display: flex
    justify-content: center

  .name-country
    font-size: 10vw
    text-align: center
    padding: 0
    margin: 0
    color: terceary-color

  .info-country
    display: grid
    grid-template-columns: repeat(4, 1fr)
    justify-content: space-between
    align-items: center
    color: primary-color

  .info
    text-align: center
    background-color: extra-color
    border-radius: 20px
    box-shadow: 2px 2px 1px extra-color
    margin: 10px
    display: grid
    grid-template-columns: 1fr 3fr
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
</style>
