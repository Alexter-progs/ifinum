<template>
  <div class="container">
    <base-page-title title="Invoices"/>
    <base-container>
      <main-page-actions/>
    </base-container>
    <base-container>
      <invoices-list/>
    </base-container>
  </div>
</template>

<script>
import BasePageTitle from './BasePageTitle'
import MainPageActions from '@/components/MainPageActions'
import InvoicesList from '@/components/InvoicesList'
import BaseContainer from '@/components/BaseContainer'

export default {
  name: 'MainPage',
  components: {BaseContainer, InvoicesList, MainPageActions, BasePageTitle},
  data () {
    return {
    }
  },
  comments: {
    basePageTitle: BasePageTitle,
    mainPageActions: MainPageActions,
    invoicesList: InvoicesList,
    baseContainer: BaseContainer
  }
}
</script>

<style scoped>
  .container {
    margin: 0.25vw;
  }
</style>
