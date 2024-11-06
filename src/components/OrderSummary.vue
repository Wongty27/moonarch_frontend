<template>
    <v-card style="background-color:#001655" class="ma-5">
        <v-divider class="border-opacity-75" :thickness="4" color="#E324BD"></v-divider>
      <v-card-title class="text-center text-h5 bitstream"> ORDER LIST</v-card-title>
      <v-divider class="border-opacity-50"></v-divider>
      <div class="scrollable-list">
        <v-list variant="tonal" style="background-color:#001655">
          <v-list-item v-for="(item, index) in cartItems" :key="index">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <v-img :src="item.imageUrl" height="50" width="50" cover></v-img>
              </v-col>
              <v-col cols="6">
                <v-list-item-title class="mt-5">
                  {{ item.name }}
                </v-list-item-title>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-list-item-subtitle>
                  {{ item.quantity }} x RM {{ item.price.toFixed(2) }}
                </v-list-item-subtitle>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </div>
      <v-divider class="border-opacity-75"></v-divider>
      
          
      <v-row>
        <v-col cols="4" class="text-left ml-4" style="color: #E324BD;">
          <div class="text-h6">Total: </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4" class="text-right mr-4" style="color: #E324BD;">
          <div class="text-h6 ">{{ `RM ${subtotal}` }}</div>
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
              :disabled="!selectedPaymentMethod || !isAgreed"
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
  import { computed } from 'vue';
  import TermsAndConditions from '@/components/Terms&Conditions.vue';
  import PaymentMethod from '@/components/PaymentMethod.vue';
  
  export default {
    name: 'OrderSummary',
    components: {
      TermsAndConditions,
      PaymentMethod,
    },
    props: {
      cartItems: {
        type: Array,
        required: true,
      },
      selectedPaymentMethod: {
        type: String,
        default: null,
      },
      isAgreed: {
        type: Boolean,
        default: false,
      },
      isFormValid: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const subtotal = computed(() => {
        return props.cartItems.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        ).toFixed(2);
      });
  
      const submitOrder = () => {
        console.log('Order submitted');
        // Add order submission logic here
      };
  
      return {
        subtotal,
        submitOrder,
      };
    },
  }
</script>

<style scoped>
.scrollable-list {
  overflow-y: auto;
  max-height: 300px;
  overflow-x: hidden;
  padding: 16px;
  border-radius: 8px;
  background-color: #001655;
}

.scrollable-list::-webkit-scrollbar {
  width: 8px;
}

.scrollable-list::-webkit-scrollbar-thumb {
  background-color: #E324BD;
  border-radius: 10px;
}

.scrollable-list::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-list .v-list {
    background-color: #001655 !important;
}
</style>