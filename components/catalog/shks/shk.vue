<template lang="pug">
  .shk(v-if='shk.name!=="card"' @click='showQuiz')
    .shk__sale(v-if='index===0')
      img(src='~/static/img/sale.png' alt='')
    .shk-img
      gallery(v-if='shk.images' :data=`shk.images`)
      img(v-else src="~/static/img/shks/undef.png", alt="alt")
    .shk-content
      .shk-ready.fz13(data-key='ready') {{ shk.sell === true ? 'Дом сдан' : 'Сдача: ' + getQ(shk.sell) + ' квартал ' + (new Date(...String(shk.sell).split('.').reverse())).getFullYear() +' года'}}
      .shk-title.bold.fz15 {{ shk.name }}
      .shk-address.fz13(v-html='shk.address')
      .shk-cost
        span от 
        div(
          style={
            display: 'inline-block',
            position: 'relative'
          }
        )
          b.fz30.bold(data-key='cost') {{ shk.cost.toLocaleString('ru') }}
          .color-gray.shk-price(data-key='price') от {{ shk.price.toLocaleString('ru') }} руб./м#[sup 2]
        span  руб.
      div.text-right.shk-ref.fz13
        a(href='#' target='blank') Узнать больше >>
</template>

<script>
import romanNumber from '~/assets/romanNumber'
import gallery from '~/components/UI/hover-gallery'
export default {
  mounted() {
    let tmp
    if ((tmp = this.shk.images)) {
      tmp.map(i => {
        let tmp = new Image()
        tmp.src = i
      })
    }
  },
  components: {
    gallery,
  },
  props: {
    shk: Object,
    index: Number,
  },
  data() {
    return {
      romanNumber,
    }
  },
  methods: {
    showQuiz() {
      this.shk.quiz && window.Marquiz.showModal(this.shk.quiz)
    },
    getQ(v) {
      v = new Date(v)
      var m = ~~(v.getMonth() / 3)
      return this.romanNumber[m > 4 ? m - 4 : m]
    },
  },
}
</script>
