<template lang="pug">
label.main(:class='error ? "error" : ""')
  input.input(
    :value='v'
    :style='hide_border !== undefined ? "border: none" : ""'
    required
  )
  .label {{ label }}
  .postfix {{ postfix }}
</template>

<script>
export default {
  props: ['label', 'value', 'error', 'postfix', 'hide_border'],
  mounted() {
    this.el = this.$el
  },
  data() {
    return {
      focus: false,
      el: null
    }
  },
  computed: {
    v() {
      return (+this.value).toLocaleString('ru')
    }
  }
}
</script>

<style lang="sass" scoped>
$color: white
.main
  position: relative

  display: inline-block

  width: 100%
  padding-top: .5em


  font-size: 17px
  font-size: 20px
  .label
    position: absolute
    top: .5em

    cursor: text
    transition: .2s all

    opacity: .5
    color: $color
    &.active
      top: 0

      cursor: default

      opacity: 1

      font-size: .5em
  .postfix
    position: absolute
    z-index: 1
    right: 0
    bottom: 0

    color: white
  .input
    width: 100%

    color: white
    border-bottom: 1px solid $color
    outline: none
    background: transparent

    font: inherit
    &:focus ~ .label, &:valid ~ .label
      top: 0

      cursor: default

      opacity: 1

      font-size: .5em

.main.error
  position: relative

  display: inline-block

  width: 100%
  padding-top: .5em

  font-size: 20px

  $color: orange
  .label
    position: absolute
    top: .5em

    cursor: text
    transition: .2s all

    opacity: .5
    color: $color
    &.active
      top: 0

      cursor: default

      opacity: 1

      font-size: .5em
  .input
    width: 100%

    color: $color
    border-bottom: 1px solid red
    outline: none
    background: transparent

    &:focus ~ .label, &:valid ~ .label
      top: 0

      cursor: default

      opacity: 1

      font-size: .5em
</style>
