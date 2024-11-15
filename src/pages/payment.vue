<template>
  <v-main class="payment-page">
    <div class="page-content">
      <v-container fluid class="pa-0">
        <v-row class="text-h2 ml-10 bpdots saturation text-shadow" :style="{ textShadow: '2px 2px 5px #FF66FF' }">
          <div>BILLING DETAILS</div>
          <v-divider class="border-opacity-50 mr-12" :thickness="3"></v-divider>
        </v-row>
        <v-row class="ma-0">
          <v-col cols="12" md="6" class="pa-4">
            <BillingForm @submit="handleBillingSubmit" @update:isFormValid="isFormValid = $event" />
          </v-col>
          <v-col cols="12" md="6" class="pa-4 bitstream">
            <OrderSummary
              :cartItems="cartItems"
              :selectedPaymentMethod="selectedPaymentMethod"
              :isAgreed="isAgreed"
              @update:selectedPaymentMethod="selectedPaymentMethod = $event"
              @update:isAgreed="isAgreed = $event"
              class="bitstream"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import { ref } from 'vue';
import BillingForm from '@/components/BillingForm.vue';
import OrderSummary from '@/components/OrderSummary.vue';
import { useCart } from '@/composables/useCart';

export default {
  name: 'PaymentPage',
  components: {
    BillingForm,
    OrderSummary,
  },
  setup() {
    const { cartItems } = useCart();
    const selectedPaymentMethod = ref(null);
    const isAgreed = ref(false);
    const isFormValid = ref(false);

    return {
      cartItems,
      selectedPaymentMethod,
      isAgreed,
      isFormValid,
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

<style scoped>
.payment-page {
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), 
              url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  padding: 20px;
}

.saturation {
  filter: saturate(10);
}
</style>
