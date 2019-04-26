<template lang="pug">
div
  slot(name='input')
</template>

<script>
import IMask from 'imask'
import inputText from '~/components/UI/inputs/text'
export default {
  props: ['getInput', 'input'],
  components: {
    inputText
  },
  mounted() {
    let input = input || this.getInput(this)
    let mask = new IMask(input, {
      mask: '+{7}(000)000-00-00',
      lazy: false
    })
    mask.on(
      'complete',
      e =>
        this.$emit('input', event.target.value) &&
        this.$emit('complete', event.target.value)
    )
    mask.on('accept', e => this.$emit('input', event.target.value))
  }
}
</script>
