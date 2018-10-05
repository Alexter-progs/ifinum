<template>
  <div class="container">
    <base-page-title title="Create invoice"></base-page-title>
  </div>
</template>

<script>
import BasePageTitle from './BasePageTitle'
export default {
  name: 'InvoiceCreatePage',
  components: {BasePageTitle}
}
</script>

<style scoped>
  .container {
    margin: 0.25vw;
  }
</style>
