<template>
  <div>
    <base-page-title title="Invoices"/>
  </div>
</template>

<script>
import BasePageTitle from './BasePageTitle'

export default {
  name: 'MainPage',
  components: {BasePageTitle},
  data () {
    return {
    }
  },
  comments: {
    basePageTitle: BasePageTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
