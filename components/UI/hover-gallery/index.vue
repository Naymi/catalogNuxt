<template lang="pug">
.hover-gallery(
  v-if='data'
  :style='`background: url(${currentBackground}) center no-repeat; background-size: contain;`'
)
  .hover-gallery__item(
    v-for='i in data'
    :key='i'
    @mouseover='hover(i)'
  )
</template>

<style lang="sass" scoped>
.hover-gallery
  display: flex

  width: 100%
  height: 188px
  &__item
    flex-grow: 1
    &:hover
      border-bottom: 3px solid red
</style>


<script>
export default {
  data() {
    return {
      currentBackground: this.data[0]
    }
  },
  methods: {
    hover(v) {
      this.currentBackground = v
    }
  },
  props: {
    data: Array
  }
}
</script>
