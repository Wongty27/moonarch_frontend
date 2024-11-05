<template>
    <div class="container">
    <v-container fluid class="pa-0">
        <v-row class="text-h2 ml-10 bpdots saturation text-shadow" :style="{ textShadow: '2px 2px 5px #FF66FF' }">
          <div>BILLING DETAILS</div>
          <v-divider class="border-opacity-50 mr-12" :thickness="3"></v-divider>
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
  </div>
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

.container {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
}

.saturation{
  filter:saturate(10);
}
</style>
