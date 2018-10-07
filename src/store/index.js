import Vuex from 'vuex'
import Vue from 'vue'

import { INIT_INVOICES, CREATE_INVOICE } from '@/store/mutation_types'
import { fetchInvoices, postInvoice } from '../api/index'
import moment from 'moment'

Vue.use(Vuex)

const DATE_FORMAT = 'DD MMMM YYYY'

export default new Vuex.Store({
  state: {
    invoices: []
  },
  getters: {
    getInvoices (state) {
      return state.invoices
    }
  },
  mutations: {
    [INIT_INVOICES] (state, invoices) {
      state.invoices = invoices
    },
    [CREATE_INVOICE] (state, invoice) {
      state.invoices.push(invoice)
    }
  },
  actions: {
    async initInvoices (context) {
      let invoices = await fetchInvoices()
      context.commit(INIT_INVOICES, invoices)
    },
    async createInvoice (context, payload) {
      let invoice = {
        number: payload.number,
        date_created: moment().format(DATE_FORMAT),
        date_due: payload.invoiceDate.format(DATE_FORMAT),
        date_supply: payload.supplyDate.format(DATE_FORMAT),
        comment: payload.comment
      }
      await postInvoice(invoice)
      context.commit(CREATE_INVOICE, invoice)
    }
  }
})
