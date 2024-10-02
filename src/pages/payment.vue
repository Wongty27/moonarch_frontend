<template>
    <v-parallax src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif">
    <v-container fluid class="pa-0">
        <v-row class="text-h2 ml-10 bpdots" :style="{ textShadow: '1px 1px 1px #E324BD' }">
          <div>BILLING DETAILS</div>
        </v-row>
      <v-row class="ma-0">
        <v-col cols="12" md="6" class="pa-4">
          <BillingForm @submit="handleBillingSubmit" />
        </v-col>
        <v-col cols="12" md="6" class="pa-4 bitstream">
          <OrderSummary
            :cartItems="cartItems"
            :shippingCost="shippingCost"
            :selectedPaymentMethod="selectedPaymentMethod"
            :isAgreed="isAgreed"
            @update:selectedPaymentMethod="selectedPaymentMethod = $event"
            @update:isAgreed="isAgreed = $event"
          />
        </v-col>
      </v-row>
    </v-container>
    </v-parallax>
  </template>
  
  <script>
  import { ref } from 'vue';
  import BillingForm from '@/components/BillingForm.vue';
  import OrderSummary from '@/components/OrderSummary.vue';
  
  export default {
    name: 'PaymentPage',
    components: {
      BillingForm,
      OrderSummary,
    },
    data() {
      return {
        cartItems: [
          // Your cart items data
          { name: 'Item 1', quantity: 2, price: 10 },
          { name: 'Item 2', quantity: 1, price: 20 },
        ],
        shippingCost: 5, // Example shipping cost
        selectedPaymentMethod: null,
        isAgreed: false,
      };
    },
    methods: {
      handleBillingSubmit(billingData) {
        // Handle billing data submission (e.g., send to backend)
        console.log('Billing data submitted:', billingData);
      },
    },
  };
  </script>

<style>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

</style>
