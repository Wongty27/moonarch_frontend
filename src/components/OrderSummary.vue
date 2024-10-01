<template>
    <v-card style="background-color:#001655" class="ma-5">
        <v-divider thickness="4"></v-divider>
      <v-card-title class="text-center"> ORDER LIST</v-card-title>
      <v-divider></v-divider>
      <v-list variant="tonal" style="background-color:#001655">
        <v-list-item>
          <!-- <v-row>
            <div class="text-h3">{{ product.name }}</div>
          </v-row>
          <v-row>
            <div class="text-body-1">{{ `${product.quantity} x RM ${product.quantity*product.price}}` }}</div>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <div class="text-body-1">Subtotal: </div>
            <v-spacer></v-spacer>
            <div class="text-body-1 text-right">{{ `RM ${product.sum}` }}</div>
          </v-row> -->
          <!-- <v-divider></v-divider> -->
        </v-list-item>
        <v-list-item>
          <v-checkbox
            label="Payment Method A"
            :value="'A'"
            v-model="selectedPaymentMethod"
          ></v-checkbox>
  
          <v-checkbox
            label="Payment Method B"
            :value="'B'"
            v-model="selectedPaymentMethod"
          ></v-checkbox>
  
          <v-checkbox
            label="Payment Method C"
            :value="'C'"
            v-model="selectedPaymentMethod"
          ></v-checkbox>
        </v-list-item>
      </v-list>
      <v-row class="ma-1">
        <v-col cols="1">
          <v-checkbox
            v-model="isAgreed"
            :rules="[mustAgree]"
            hide-details
          >
          </v-checkbox>
        </v-col>
        <v-col cols="11" class="mt-4">
          <span>
            I have read and agree to the
            <a href="#" class="link"> Terms and Conditions </a>
          </span>
          <br><br>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-auto">
        <v-btn color="primary">Pay Now</v-btn><br><br>
      </v-row>
    </v-card>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'OrderSummary',
    setup() {
      const selectedPaymentMethod = ref(null);
      const isAgreed = ref(false);
  
      function mustAgree(v) {
        return !!v || "You must agree to the terms and conditions";
      }
  
      return {
        selectedPaymentMethod,
        isAgreed,
        mustAgree,
      };
    },
  };
  </script>