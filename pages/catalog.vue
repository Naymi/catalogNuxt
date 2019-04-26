<template lang="pug">
.main
  catalog-header
  catalog-main
  .bold.text-center.fz32(
    data-target='calc'
    style={
      marginTop: '2em'
    }
  ) Калькулятор ипотеки на новостройку
  .text-center(
    style={
      marginTop: '1em',
      marginBottom: '1em',
    }
  ) Подайте онлайн заявку на одобрение ипотеки сразу в 10 банков за 1 минуту. Бесплатно.
  catalog-calc(
    v-model='data'
    @input='input'
  )
  bank-list(
    data-target='banks'
    :banks='banks'
    @pickbank='pickbank'
  )
  modal(v-model='modal')
</template>

<script>
import catalogHeader from '~/components/catalog/header'
import catalogMain from '~/components/catalog/main'
import catalogCalc from '~/components/catalog/calc'
import bankList from '~/components/banklist'
import getBanks from '~/assets/api'
import modal from '~/components/catalog/modal'
export default {
  components: {
    bankList,
    catalogHeader,
    catalogMain,
    catalogCalc,
    modal
  },
  computed: {
    banks() {
      const banks = getBanks(this.data)
      const { minplatesh, minrate } = banks.reduce(
        (acc, el) => {
          if (el.platesh < acc.minplatesh) acc.minplatesh = el.platesh
          if (el.rate < acc.minrate) acc.minrate = el.rate
          return acc
        },
        { minplatesh: Infinity, minrate: Infinity }
      )
      this.data = {
        ...this.data,
        minplatesh,
        minrate
      }
      return banks
    }
  },
  methods: {
    getBanks,
    input(v) {
      console.log('v :', v)
    },
    pickbank(v) {
      this.modal = true
    }
  },
  watch: {
    data(v) {
      this.data.creditAmount = v.price - v.firstInstallment
    }
  },
  data() {
    const firstInstallment = 500e3,
      price = 1000e3
    return {
      modal: false,
      data: {
        type: 'Новостройка',
        target: 'Квартира',
        price,
        region: true,
        motherCapital: false,
        firstInstallment,
        creditTerm: 15,
        creditAmount: price - firstInstallment
      }
    }
  }
}
</script>
