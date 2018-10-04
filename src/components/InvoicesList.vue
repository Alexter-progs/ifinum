<template>
    <div>
      <h4>Invoices</h4>
      <table>
        <thead>
          <tr>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td>{{ invoice.date_created }}</td>
            <td>{{ invoice.number }}</td>
            <td>{{ invoice.date_supply }}</td>
            <td>{{ invoice.comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'InvoicesList',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      invoices: 'getInvoices'
    })
  },
  methods: {
    ...mapActions({
      initInvoices: 'initInvoices'
    })
  },
  created () {
    this.initInvoices()
  }
}
</script>

<style scoped>
  h4 {
    margin: 1em 0 1em 0;
  }

  th {
    color: #7e8a9e;
    width: 25%;
    padding: 1vh 1vw 1vh 1vw;
  }

  td {
    padding: 1vh 1vw 1vh 1vw;
  }

  table {
    border-collapse: collapse;
    border-bottom: 1px solid #e4e7ea;
    width: 100%;
  }

  thead {
    background-color: #f1f3f6;
  }

  tr {
    text-align: left;
    vertical-align: middle;
    height: 5vh;
  }

  tr td:nth-child(1) {
    padding-left: 1vw;
    padding-right: 1vw;
  }

  tr th:nth-child(1) {
    padding-left: 1vw;
    padding-right: 1vw;
  }
</style>
