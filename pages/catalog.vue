<template lang="pug">
.main
  catalog-header
  shks(
    :data='shksdata'
    data-target='shks'
    @picknovostroyka='picknovostroyka'
  )
  unready
  .bold.text-center.fz32(
    data-target='calc'
    style={
      marginTop: '2em'
    }
  ) Калькулятор ипотеки на&nbsp;новостройку
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
  modal(v-model='modal' @complete='completeModal')
  myfooter
</template>

<script>
import catalogHeader from '~/components/catalog/header'
import shks from '~/components/catalog/shks'
import unready from '~/components/catalog/unready'
import shksdata from '~/assets/api/shks.json'
import catalogCalc from '~/components/catalog/calc'
import bankList from '~/components/banklist'
import getBanks from '~/assets/api'
import modal from '~/components/catalog/modal'
import startValue from '~/assets/startValue'
import myfooter from '~/components/footer'
export default {
  components: {
    unready,
    shks,
    myfooter,
    bankList,
    catalogHeader,
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
    send() {
      this.$axios
        .$post('/api/v2.php', this.parcel)
        .then(data => console.log(data))
    },
    completeModal(v) {
      this.parcel.data = v
      console.log('this.parcel :', this.parcel)
      // return
      this.send()
    },
    getBanks,
    input(v) {
      console.log('v :', v)
    },
    pickbank(v) {
      this.parcel = {
        from: {
          target: 'Карточка банка',
          data: v
        },
        banks: this.banks,
        creditParams: this.data
      }
      this.modal = true
    },
    picknovostroyka(v) {
      this.parcel = {
        from: {
          target: 'Карточка ЖК',
          data: v
        }
      }
      this.modal = true
    }
  },
  watch: {
    data(v) {
      this.data.creditAmount = v.price - v.firstInstallment
    }
  },
  data() {
    const firstInstallment = startValue.firstInstallment
    const price = startValue.price
    return {
      parcel: {
        from: null,
        data: null
      },
      shksdata: [...shksdata].sort(
        (a, b) =>
          (b.images ? b.images.length : 0) - (a.images ? a.images.length : 0)
      ),
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
