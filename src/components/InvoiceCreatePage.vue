<template>
  <div class="container">
    <base-page-title title="Create invoice"></base-page-title>
    <base-container>
      <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
        <a-row>
          <a-col>
            <a-form-item label="Number:" fieldDecoratorId="number">
              <a-input placeholder="Enter invoice number"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="start" :gutter="10">
          <a-col>
            <a-form-item label="Invoice Date:" fieldDecoratorId="invoiceDate">
              <a-date-picker/>
            </a-form-item>
          </a-col>
          <a-col>
            <a-form-item label="Supply Date" fieldDecoratorId="supplyDate">
              <a-date-picker/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="Comment" fieldDecoratorId="comment">
              <a-textarea :autosize="{ minRows: 2, maxRows: 6 }" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="end">
          <a-col>
            <a-form-item>
              <a-button type='primary' htmlType='submit'>
                Save
              </a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </base-container>
  </div>
</template>

<script>
import BasePageTitle from './BasePageTitle'
import BaseContainer from './BaseContainer'
import AFormItem from 'ant-design-vue/es/form/FormItem'
import ARow from 'ant-design-vue/es/grid/Row'
import ACol from 'ant-design-vue/es/grid/Col'
import { mapActions } from 'vuex'
export default {
  name: 'InvoiceCreatePage',
  data () {
    return {
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.createInvoice(values)
          this.$router.push('/')
        }
      })
    },
    ...mapActions({
      createInvoice: 'createInvoice'
    })
  },
  components: {ACol, ARow, AFormItem, BaseContainer, BasePageTitle}
}
</script>

<style scoped>
  .container {
    margin: 0.25vw;
  }
</style>
