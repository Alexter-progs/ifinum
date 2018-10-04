import Vuex from 'vuex'
import Vue from 'vue'

import { INIT_INVOICES } from '@/store/mutation_types'
import { fetchInvoices } from '../api/index'

Vue.use(Vuex)

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
    }
  },
  actions: {
    async initInvoices (context) {
      let invoices = await fetchInvoices()
      context.commit(INIT_INVOICES, invoices)
    }
  }
})
