import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import InvoiceCreatePage from '@/components/InvoiceCreatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/invoice/create',
      name: 'InvoiceCreatePage',
      component: InvoiceCreatePage
    }
  ]
})
