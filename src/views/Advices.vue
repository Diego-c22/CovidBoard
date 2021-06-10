<template>
  <div class="advices">
    <h1 class="title center">Advices</h1>

    <div class="advice left">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-hands-wash"></i>
        </div>
      </div>
      <div class="content">
          <h2 class="">Wash your hands frequently and carefully</h2>
          <p>
            Use warm water and soap and rub your hands for at least 20 seconds. Work the lather to your wrists, between your fingers, and under your fingernails. You can also use an antibacterial and antiviral soap.
          </p>
        </div>
    </div>

    <div class="advice right">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-exclamation-circle"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Avoid touching your face</h2>
        <p>
          Avoid touching any part of your face or head, including your mouth, nose, and eyes. Also avoid biting your fingernails. This can give SARS-CoV-2 a chance to go from your hands into your body.
        </p>
      </div>
    </div>

    <div class="advice left">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-handshake-slash"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Stop shaking hands and hugging people</h2>
        <p>
          Similarly, avoid touching other people. Skin-to-skin contact can transmit SARS-CoV-2 from one person to another.
        </p>
      </div>
    </div>

    <div class="advice right">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-head-side-cough-slash"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Cover your mouth and nose when you cough and sneeze</h2>
        <p>
          SARS-CoV-2 is found in high amounts in the nose and mouth. This means it can be carried by air droplets to other people when you cough, sneeze, or talk. It can also land on hard surfaces and stay there for up to 3 days.

Use a tissue or sneeze into your elbow to keep your hands as clean as possible. Wash your hands carefully after you sneeze or cough, regardless.
        </p>
      </div>
    </div>

    <div class="advice left">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-pump-soap"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Clean and disinfect surfaces</h2>
        <p>
          Use alcohol-based disinfectants to clean hard surfaces in your home like:

    countertops
    door handles
    furniture
    toys

Also, clean your phone, laptop, and anything else you use regularly several times a day.
        </p>
      </div>
    </div>

    <div class="advice right">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-people-arrows"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Take physical (social) distancing seriously</h2>
        <p>
          If you’re carrying the SARS-CoV-2 virus, it’ll be found in high amounts in your spit (sputum). This can happen even if you don’t have symptoms.

Physical (social) distancing, also means staying home and working remotely when possible.

If you must go out for necessities, keep a distance of 6 feet (2 m) from other people. You can transmit the virus by speaking to someone in close contact to you.
        </p>
      </div>
    </div>

    <div class="advice left">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-users-slash"></i>
        </div>
      </div>
      <div class="content">
        <h2 class="">Do not gather in groups</h2>
        <p>
          Being in a group or gathering makes it more likely that you’ll be in close contact with someone.

This includes avoiding all religious places of worship, as you may have to sit or stand too close to another congregant. It also includes not congregating at parks or beaches.
        </p>
      </div>
    </div>

    <div class="advice right">
      <div class="icon-advice center">
        <div class="background-icon-advice center">
          <i class="fas fa-head-side-mask"></i>
        </div>
      </div>

      <div class="content">
        <h2 class="">Wear a (homemade) mask</h2>
        <p>
          The Centers for Disease Control and Prevention (CDC) recommendsTrusted Source that almost everyone wears a cloth face mask in public settings where physical distancing may be difficult, such as grocery stores.

When used correctly, these masks can help prevent people who are asymptomatic or undiagnosed from transmitting SARS-CoV-2 when they breathe, talk, sneeze, or cough. This, in turn, slows the transmission of the virus.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Advices',
  created () {
    this.$store.commit('changePage', 'advices')
  }
}
</script>

<style lang="stylus">
@import '../assets/css/_variables.styl'

  .center
    display: flex
    align-items: center
    justify-content: center

  .title
    color: terceary-color
    font-size: xx-large

  .advice
    display: grid
    justify-content: space-between
    align-items: center
    background-color: extra-color
    column-gap: 20px
    padding: 30px 20px;
    color: terceary-color
    margin: 10px 0
    box-shadow: 1px 6px 4px #eeeeee

    &.right
      grid-template-columns: 3fr 1fr
      margin-left: 5%
      border-radius: 60px 0 0 60px

      .content
        grid-column: 1
        grid-row: 1
        background-color: primary-color
        border-radius: 60px 0 0 60px
        padding: 20px

      .icon-advice
        grid-column: 2
        grid-row: 1

    &.left
      grid-template-columns: 1fr 3fr
      margin-right: 5%
      border-radius: 0 60px 60px 0

      .content
        border-radius: 0 60px 60px 0
        background-color: primary-color
        padding: 20px

  .background-icon-advice
    background-color: primary-color
    padding: 5px
    font-size: 50px
    border-radius: 50%
    width: 80px
    height: 80px
    color: extra-color

  @media (min-width: 768px)
    .advice
      &.right
        margin-left: 20%
      &.left
        margin-right: 20%

    .background-icon-advice
      font-size: 100px
      width: 130px
      height: 130px

  @media (min-width: 992px)
    .advice
      &.right
        margin-left: 40%
      &.left
        margin-right: 40%

</style>
