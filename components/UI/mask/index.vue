<template lang="pug">
div
  slot(name='input')
</template>

<script>
import IMask from 'imask'
import inputText from '~/components/UI/inputs/text'
export default {
  props: ['getInput', 'input', 'mask', 'regExp'],
  components: {
    inputText
  },
  mounted() {
    let propMask = this.regExp ? new RegExp(this.mask) : this.mask
    console.log('propMask :', propMask)
    let input = this.input || this.getInput(this)
    let mask = new IMask(input, {
      mask: propMask,
      lazy: false
    })
    mask.on(
      'complete',
      e =>
        this.$emit('input', event.target.value) &&
        this.$emit('complete', event.target.value)
    )
    mask.on(
      'accept',
      e =>
        this.$emit('input', event.target.value) &&
        this.$emit('accept', event.target.value)
    )
  }
}
</script>
