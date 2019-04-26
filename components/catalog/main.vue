<template lang="pug">
.main
  shks(
    :data='shksdata'
    data-target='shks'
  )
  unready
</template>

<script>
import shks from '~/components/catalog/shks'
import unready from '~/components/catalog/unready'
import shksdata from '~/assets/api/shks.json'
console.log('shksdata :', shksdata)
export default {
  components: {
    unready,
    shks
  },
  data() {
    return {
      shksdata
    }
  }
}
</script>
