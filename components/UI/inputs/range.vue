<template lang="pug">
input(type='range' :disabled='disabled' v-model='v').custom-white-range
</template>

<script>
export default {
  props: ['value', 'disabled'],
  computed: {
    v: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      },
    },
  },
}
</script>

<style scoped lang="sass">
/* Белый ренж

.custom-white-range
  width: 100%
  height: 24px
  margin: 10px 0

  background: transparent

  -webkit-appearance: none
  &:focus
    outline: none
  &::-webkit-slider-runnable-track
    width: 100%
    height: 1px

    cursor: pointer

    border: 1px solid #FFFFFF
    border-radius: 1px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000
  &::-webkit-slider-thumb
    width: 18px
    height: 18px
    margin-top: -9px

    cursor: pointer

    border: 0px solid #FFFFFF
    border-radius: 25px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000

    -webkit-appearance: none
  &:focus::-webkit-slider-runnable-track
    background: #FFFFFF
  &::-moz-range-track
    width: 100%
    height: 1px

    cursor: pointer

    border: 1px solid #FFFFFF
    border-radius: 1px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000
  &::-moz-range-thumb
    width: 18px
    height: 18px

    cursor: pointer

    border: 0px solid #FFFFFF
    border-radius: 25px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000
  &::-ms-track
    width: 100%
    height: 1px

    cursor: pointer

    color: transparent
    border-color: transparent
    background: transparent
  &::-ms-fill-lower, &::-ms-fill-upper
    border: 1px solid #FFFFFF
    border-radius: 2px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000
  &::-ms-thumb
    width: 18px
    height: 18px
    margin-top: 1px

    cursor: pointer

    border: 0px solid #FFFFFF
    border-radius: 25px
    background: #FFFFFF
    box-shadow: 0px 0px 0px #000000
  &:focus
    &::-ms-fill-lower, &::-ms-fill-upper
      background: #FFFFFF
  &[disabled]
    opacity: .2
</style>
