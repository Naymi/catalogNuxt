<template lang="pug">
section.shks.container-940.box-center
  .shks-head
    .shks-sort.flex.justify-right.align-center.hide-sm-1000
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
    .item(
      v-for='(shk, index) in shks'
      :key='String(shk.name)'
      style='margin-top: 20px; max-width: 300px'
    )
      shk(v-if='shk.name!=="card"' :shk='shk' @click='$emit("picknovostroyka", shk)' :index='index')
      .shk-back.color-white.back-blue(
        v-else
        @click=`scroll('[data-target="calc"]')`
      )
        .shk-back__image
          img(src='/img/calc.svg' height='70' width='60')
        .shk-back__title.fz20.bold.text-uppercase.text-center Ипотека от ВГИФ
        hr.shk-back__divider.box-center
        .shk-back__description.fz13.text-center.
          Рассчитайте ипотеку на новостройку<br>
          сразу в нескольких банках<br>
          на сайте прямо сейчас
        button(tabindex=-1).shk-back__btn.color-white.back-blue.cursor-pointer.box-center Рассчитать ипотеку

</template>

<style lang="sass" scoped>
.icon-down
  display: inline-block
  visibility: hidden

  width: .5em
  min-height: .5em
  margin-left: 5px

  transition: .2s all

  background: gray

  clip-path: polygon(50% 100%, 0 0, 100% 0)
  &.visible
    visibility: visible
  &.active
    transform: rotateZ(180deg)
</style>

<script>
import scroll from '~/assets/scroll'
import shk from './shk'
export default {
  components: {
    shk
  },
  props: {
    data: Array
  },
  computed: {
    shks() {
      let result = [...this.data].sort((a, b) => {
        if (this.sorter.col === 'sell') {
          let getYear = s =>
            new Date(
              ...String(s)
                .split('.')
                .reverse()
            ).getFullYear()
          a = a === true ? Infinity : getYear(a.sell)
          b = b === true ? Infinity : getYear(b.sell)
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
      // 9 должен быть картонкой с калькулятором
      result.splice(8, 0, { name: 'card' })
      return result
    }
  },
  methods: {
    sort(v) {
      this.sorter.col == v
        ? (this.sorter.desc = !this.sorter.desc)
        : (this.sorter.col = v) && (this.sorter.desc = false)
    },
    scroll
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

<style>
.mmm {
  top: 0;

  margin: 0;

  text-transform: uppercase;
}
</style>
