<template>
    <v-parallax src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif">
      <v-container>
        <v-row class="text-h2 ml-5 bpdots" :style="{ textShadow: '1px 1px 1px #E324BD' }">
          <div>BILLING DETAILS</div>
        </v-row>
  
        <v-row>
          <v-col cols="6">
            <BillingForm />
          </v-col>
          <v-col cols="6">
            <OrderSummary />
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </template>

<script>
import BillingForm from '@/components/BillingForm.vue';
import OrderSummary from '@/components/OrderSummary.vue';

export default {
  name: 'PaymentPage',
  components: {
    BillingForm,
    OrderSummary,
  },
};
</script>

<style>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');
</style>