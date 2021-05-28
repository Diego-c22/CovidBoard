<template>
  <div class="grid-rows" @click="goDetails()">
    <div class="image">
      <img :src="country.flag" :alt="country.name" />
    </div>
    <div class="description">
      <h3 class="name">
        {{ country.name | legth }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    country: {
      type: Object,
      require: true
    }
  },
  methods: {
    goDetails () {
      this.$store.commit('changeCountry', this.country)
      this.$router.push({ name: 'CountryDetail', params: { region: this.country.region, name: this.country.name } })
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'

  .grid-rows
    display: grid
    grid-template-rows: 2fr 1fr
    background-color: secundary-color
    border-radius: 0 0 20px 20px
    justify-content: center
    text-align: center
    box-shadow: 1px 6px 4px secundary-color-dark

  .image
    width: 230px
    height: 140px

    & img
      object-fit: cover
      object-position: center
      width: 230px
      height: 140px

  .name
    color: terceary-color
    font-size: x-large

  .region
    color: extra-color
    font-size: large
</style>
