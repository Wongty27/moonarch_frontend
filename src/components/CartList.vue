<template>
  <div>
    <!-- Debug: Display number of items -->
    <p>Number of items in cart: {{ cartItems.length }}</p>
    
    <div v-if="cartItems && cartItems.length > 0">
      <v-list>
        <v-list-item v-for="(item, index) in cartItems" :key="index" class="mb-4">
          <v-row align="center">
            <!-- Item Image -->
            <v-col cols="3">
              <v-img
                :src="item.imageUrl"
                height="100"
                width="100"
                cover
              ></v-img>
            </v-col>
            
            <!-- Item Details -->
            <v-col cols="6">
              <v-list-item-content>
                <v-list-item-title class="text-h6 mb-1">{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>Price: ${{ item.price.toFixed(2) }}</v-list-item-subtitle>
                <v-list-item-subtitle class="mt-2">
                  Quantity: {{ item.quantity }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>

            <!-- Remove Button -->
            <v-col cols="3" class="text-right">
              <v-btn icon color="error" @click="$emit('removeItem', item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-2"></v-divider>
        </v-list-item>
      </v-list>
    </div>
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
      default: () => [],
    },
  },
  mounted() {
    console.log('CartList mounted, items:', this.cartItems); // Debug log
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