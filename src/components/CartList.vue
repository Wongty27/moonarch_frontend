
<template>
    <div>
      <v-list v-if="cartItems.length > 0">
        <v-list-item v-for="item in cartItems" :key="item.id">
          <v-row align="center" no-gutters>
            <!-- Item Image -->
            <v-col cols="3">
              <v-img :src="item.imageUrl" height="100" width="100" cover></v-img>
            </v-col>
            
            <!-- Item Details -->
            <v-col cols="6">
              <v-list-item-title class="text-h6 mb-1 bitstream">{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle class="mb-1 bitstream">Price: ${{ item.price.toFixed(2) }}</v-list-item-subtitle>
            </v-col>
  
            <!-- Quantity Controls -->
            <v-col cols="3" class="text-right">
              <v-btn icon @click="decreaseQuantity(item.id)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span class="mx-2" style="font-size: 1.2em;">{{ item.quantity }}</span>
              <v-btn icon @click="increaseQuantity(item.id)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-2"></v-divider>
        </v-list-item>
      </v-list>
      <div v-else>
        <p class="text-center pa-4">Your cart is empty.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartList',
    props: {
      cartItems: {
        type: Array,
        required: true,
      },
      increaseQuantity: {
        type: Function,
        required: true,
      },
      decreaseQuantity: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .v-list-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    margin-bottom: 8px;
  }
  </style>
  