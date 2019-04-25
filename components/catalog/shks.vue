<template lang="pug">
section.shks.container-940.box-center
  .shks-head
    .shks-sort.flex.justify-right
      .shks-sort__label Сортировать по
      .shks-sort__item(
        @click='sort("cost")',
      ) Цене
        .icon-down(
          :class = 'sorter.col === "cost" ? sorter.desc ? "visible" : "visible active" : ""'
        )
      .shks-sort__item(
        @click='sort("price")',
      ) Цене за кв.м
        .icon-down(
          :class = 'sorter.col === "price" ? sorter.desc ? "visible" : "visible active" : ""'
        )
      .shks-sort__item(
        @click='sort("sell")',
      ) Готовности дома
        .icon-down(
          :class = 'sorter.col === "sell" ? sorter.desc ? "visible" : "visible active" : ""'
        )
  .shks-content
    .shk(v-for='shk in shks')
      .shk-img
        img(src="/img/shks/1.jpg", alt="")
      .shk-content
        .shk-ready.fz13(data-key='ready') {{ shk.sell}}
        .shk-title.bold.fz15 {{shk.name}}
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
//- .shk-back.color-white.flex.justify-center.flex-column.align-center.back-blue
//-   .shk-back__image ТИПО ИКОНКА КАЛЬКУЛЯТОРА
//-   .shk-back__title.fz20.bold.text-uppercase Ипотека от ВГИФ
//-   hr.shk-back__divider
//-   .shk-back__description.text-center.
//-     Рассчитайте ипотеку на новостройку<br>
//-     сразу в нескольких банках<br>
//-     на сайте прямо сейчас
//-   button(tabindex=-1).shk-back__btn.color-white.back-blue.cursor-pointer Рассчитать ипотеку

</template>

<style lang="sass" scoped>
.icon-down
  display: inline-block
  visibility: hidden

  width: 10px
  height: 50%

  transition: .2s all

  background: gray

  clip-path: polygon(50% 100%, 0 0, 100% 0)
  &.visible
    visibility: visible
  &.active
    transform: rotateZ(180deg)
</style>

<script>
export default {
  props: {
    data: Array
  },
  computed: {
    shks() {
      return this.data.sort((a, b) => {
        if (this.sorter.col === 'sell') {
          a = a === true ? Infinity : new Date(a.sell)
          b = b === true ? Infinity : new Date(b.sell)
        } else {
          a = a[this.sorter.col]
          b = b[this.sorter.col]
        }
        if (this.sorter.desc) {
          return a > b ? -1 : a < b ? 1 : 0
        } else {
          return a < b ? -1 : a > b ? 1 : 0
        }
      })
    }
  },
  methods: {
    sort(v) {
      this.sorter.col == v
        ? (this.sorter.desc = !this.sorter.desc)
        : (this.sorter.col = v) && (this.sorter.desc = false)
    }
  },
  data() {
    return {
      sorter: {
        col: false,
        desc: false
      }
    }
  }
}
</script>
