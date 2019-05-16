<template lang="pug">
.banklist
  .mytop
    h2.h2 Предложения банков {{tmp}}
    small.
      По указанным параметрам в калькуляторе были подобраны представленные ниже банки. <br>
      Выберите один или несколько банков и заполните заявку на ипотеку
  .wrapper-banks
    .banks
      bank(v-for='bank in banks' @pickbank='pickbank' :bank='bank' :key='bank.icon' )
</template>

<script>
import bank from './bank'
export default {
  props: ['banks'],
  methods: {
    pickbank(v) {
      this.$emit('pickbank', v)
    }
  },
  watch: {
    modal(val) {
      val ? '' : (this.bank = null)
    }
  },
  data() {
    return {
      modal: false,
      bank: false,
      tmp: null
    }
  },
  components: {
    bank
  }
}
</script>


<style lang="sass" scoped>
.banklist
  width: 100%
  max-width: none !important
  margin-bottom: 20px
.mytop
  display: flex
  align-items: center
  flex-direction: column
  .h2
    margin-top: 40px

    text-align: center

    color: #717477

    font-size: 33px
    font-weight: 400
    line-height: 43.92px
    @media screen and (max-width: 600px)
      margin-top: 20px

      font-size: 20px
      line-height: 1.5
  small
    margin-top: 15px
    margin-bottom: 45px

    text-align: center

    color: #717477

    font-size: 14px
    font-weight: 400
    line-height: 25px
    @media screen and (max-width: 758px)
      margin-top: 5px
      margin-bottom: 20px

      font-size: 10px
      line-height: 1.5
.wrapper-banks
  max-width: 1054px
  margin: 0 auto
  padding: 0 20px
.banks
  display: grid
  justify-content: space-between

  grid-template-columns: repeat(auto-fit,300px)
  grid-row-gap: 20px
  @media screen and (max-width: 1200px)
    justify-content: space-around

</style>
