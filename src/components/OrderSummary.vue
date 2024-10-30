<template>
    <v-card style="background-color:#001655" class="ma-5">
        <v-divider class="border-opacity-75" :thickness="4" color="#E324BD"></v-divider>
      <v-card-title class="text-center text-h5"> ORDER LIST</v-card-title>
      <v-divider class="border-opacity-50"></v-divider>
      <v-list variant="tonal" style="background-color:#001655">
        <v-list-item
          v-for="(item, index) in cartItems"
          :key="index"
          >
          <v-list-item-title class="mt-5">
             {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-right">
            {{ item.quantity }} x RM {{ item.price }}
          </v-list-item-subtitle>
          </v-list-item>
      </v-list>
      <v-divider class="border-opacity-75"></v-divider>
      
          
      <v-row>
        <v-col cols="4" class="text-left ml-4" style="color: #E324BD;">
          <div class="text-h6">Total: </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4" class="text-right mr-4" style="color: #E324BD;">
          <div class="text-h6 ">{{ `RM ${total}` }}</div>
        </v-col>
      </v-row>
        
        <v-divider class="border-opacity-75"></v-divider>
        <PaymentMethod
          :selectedPaymentMethod="selectedPaymentMethod"
          @update:selectedPaymentMethod="$emit('update:selectedPaymentMethod', $event)"
        />
        <TermsAndConditions
          :isAgreed="isAgreed"
          @update:isAgreed="$emit('update:isAgreed', $event)"
        />
        <v-row>
          <v-col cols="12" class="text-center mb-2">
            <v-btn
              color="#E324BD"
              :disabled="!isAgreed || !selectedPaymentMethod"
              @click="submitOrder"
              elevated="12"
              prepend-icon="mdi-check-circle-outline"
              rounded="100"
            >
              Pay Now
            </v-btn>
        </v-col>
        </v-row>
        <v-divider class="border-opacity-75" :thickness="4" color="#E324BD"></v-divider>
    </v-card>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import TermsAndConditions from '@/components/Terms&Conditions.vue';
  import { useCartTotals } from '@/composables/useCartTotal.js';
  
  export default {
    name: 'OrderSummary',
    components: {
      PaymentMethod,
      TermsAndConditions,
    },
    props: {
      cartItems: {
        type: Array,
        required: true,
      },
      shippingCost: {
        type: Number,
        default: 0,
      },
      selectedPaymentMethod: {
        type: String,
        default: null,
      },
      isAgreed: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const { subtotal, total } = useCartTotals(props.cartItems, props.shippingCost);
  
      return {
        subtotal,
        total,
      };
    },
  }
</script>