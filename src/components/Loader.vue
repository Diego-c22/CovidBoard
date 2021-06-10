<template>
  <div class="loading">
    <div class="circle">
      <i class="spinner fas fa-virus"></i>
    </div>
    <p>Loading...</p>
  </div>
</template>
<style lang="stylus">
@import '../assets/css/_variables.styl'
  .loading
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    color: terceary-color
    height: inherit
    position: absolute
    top: 40%

  .circle
    padding: 15px
    border: 8px solid rgba(0, 0, 0, .1)
    border-radius: 50%
    border-left-color: terceary-color
    animation: spin 5s linear infinite

  .spinner
    font-size: 100px
    color: terceary-color
    animation: spin-reverse 2s linear infinite

  @keyframes spin
    0%
      transform: rotate(0deg)

    100%
      transform: rotate(360deg)

  @keyframes spin-reverse
    0%
      transform: rotate(360deg)

    100%
      transform: rotate(0deg)
</style>
