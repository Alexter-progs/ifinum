<template>
  <div class="container">
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

<style scoped>
  .container {
    margin: 8px;
  }
</style>
