<template>
  <div class="container">
    <base-page-title title="Invoices"/>
    <main-page-actions/>
  </div>
</template>

<script>
import BasePageTitle from './BasePageTitle'
import MainPageActions from '@/components/MainPageActions'

export default {
  name: 'MainPage',
  components: {MainPageActions, BasePageTitle},
  data () {
    return {
    }
  },
  comments: {
    basePageTitle: BasePageTitle,
    mainPageActions: MainPageActions
  }
}
</script>

<style scoped>
  .container {
    margin: 8px;
  }
</style>
