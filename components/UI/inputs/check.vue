<template lang="pug">
label.main.flex.align-center
  input(type='checkbox' v-model='v').input
  .wrapper
    .sphere
</template>

<script>
export default {
  props: ['value'],
  computed: {
    v: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  height: 30px
  .wrapper
    display: flex
    align-items: center

    width: 30px
    height: 10px

    border-radius: 5px
    background: rgba(255,255,255,.5)
    .sphere
      width: 20px
      height: 20px

      border-radius: 10px
      background: white
  .input
    width: 0
    height: 0
    &:checked ~ .wrapper
      justify-content: flex-end

      background: white
</style>
