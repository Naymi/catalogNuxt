<template lang="pug">
.combo_box
  .combo_box__label.align-center(
    @click='open = !open'
  )
    .combo_box__label-wraper
      .combo_box__label-text(
        :class='pickitem ? "active" : ""'
      ) {{label}}
      .combo_box__label-content(
        v-if='pickitem'
      ) {{pickitem.text || pickitem}}
    .combo_box__icon(:class='open ? "active" : ""')
  .combo_box_options(:class='open ? "active" : ""')
    .combo_box_options__item(@click = 'pick(i)' v-for='i in items') {{i.text || i}}
</template>

<script>
export default {
  props: ['label', 'items', 'value'],
  methods: {
    pick(v) {
      // event.stopPropagation();
      this.$emit('change', v)
      this.pickitem = v
      this.open = false
    }
  },
  data() {
    return {
      open: false,
      pickitem: this.value || null
    }
  }
}
</script>

<style lang="sass" scoped>
.combo_box
  position: relative

  width: 100%

  font-size: 20px
  &__label
    
    display: flex
    justify-content: space-between

    box-sizing: border-box
    width: 100%
    padding: 10px

    cursor: pointer

    border-bottom: 1px solid white
    &-text
      opacity: .7
      &.active
        opacity: 1

        font-size: .5em
  &__icon
    display: inline-block

    width: 10px
    height: 10px

    transition: .2s all

    background: white

    clip-path: polygon(0% 0%, 100% 0%, 50% 100%)
    &.active
      transform: rotateZ(180deg)
  &_options
    position: absolute
    z-index: 1000000
    top: 100%
    left: 0

    display: none
    overflow: auto

    width: 100%
    padding: 5px 0

    background: white
    &.active
      display: block
    &__item
      margin: 2px 0
      padding: 10px

      cursor: pointer

      color: black
      border-bottom: 1px solid white
      &:hover
        background: lighten(gray, 20%)

</style>
