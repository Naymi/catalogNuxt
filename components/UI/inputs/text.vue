<template lang="pug">
.block(
  style='max-width: 100%'
)
  label.main(:class='error ? "error" : ""')
    input.input(
      v-model='v'
      :style='hide_border !== undefined ? "border: none" : ""'
      required
      :name='name'
      :class='dark ? "dark" : ""'
    )
    .input-info(v-if='subtext' :style='subtext.style') {{subtext.text}}
    .label {{ label }}
    .postfix(
      :style='color ? `color: ${color}` : ""'
    ) {{ postfix }}
</template>

<script>
export default {
  props: [
    'label',
    'value',
    'error',
    'postfix',
    'hide_border',
    'name',
    'color',
    'dark',
    'subtext',
    'dontEmit'
  ],
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
    v: {
      get() {
        return this.value
      },
      set(v) {
        !this.dontEmit && this.$emit('input', v)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$color: white
.main
  position: relative

  display: block

  width: 100%
  padding-top: 1em


  font-size: 17px
  font-size: 20px
  .label
    position: absolute
    top: 1em

    cursor: text
    transition: .2s all

    opacity: .5
    color: inherit
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

    color: inherit
  .input
    width: 100%
    padding-bottom: .2em

    color: inherit
    border-bottom: 1px solid white
    outline: none
    background: transparent

    font: inherit
    &.dark
      border-bottom: 1px solid black

    &:focus ~ .label, &:valid ~ .label
      top: 0

      cursor: default

      opacity: 1

      font-size: .5em
    &-info
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
