<template>
  <v-main class="container">
    <v-container>
      <v-card style="background-color:#3E0054; padding: 16px;">
        <v-card-title class="text-h4 mb-4 bitstream">Shopping Cart</v-card-title>
        
        <!-- Debug info -->
        <div class="debug-info">
          Cart Items Count: {{ cartItems.length }}
        </div>

        <v-row>
          <v-col cols="12">
            <div v-if="cartItems.length > 0">
              <v-list bg-color="transparent">
                <template v-for="item in cartItems" :key="item.id">
                  <v-list-item>
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
                        <v-list-item-title class="text-h6 mb-1">
                          {{ item.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="mb-1">
                          Price: ${{ item.price.toFixed(2) }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Quantity: {{ item.quantity }}
                        </v-list-item-subtitle>
                      </v-col>

                      <!-- Remove Button -->
                      <v-col cols="3" class="text-right">
                        <v-btn icon="mdi-delete" color="error" @click="removeItem(item.id)">
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                </template>
              </v-list>
            </div>
            <div v-else>
              <p class="text-center pa-4">Your cart is empty.</p>
            </div>
          </v-col>
        </v-row>

        <v-row class="mt-4">
          <v-col cols="12" class="text-right bitstream">
            <div v-if="cartItems.length > 0" class="text-h5">
              Total: ${{ totalPrice }}
            </div>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn 
              color="#E324BD" 
              @click="checkout" 
              class="bitstream mr-2"
              :disabled="cartItems.length === 0"
            >
              Checkout
            </v-btn>
            <v-btn color="primary" @click="continueShopping" class="bitstream">
              Continue Shopping
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';

export default {
  name: 'CartPage',
  setup() {
    const router = useRouter();
    const { cartItems, removeItem, updateQuantity } = useCart();

    const totalPrice = computed(() => {
      return cartItems.value
        .reduce((total, item) => total + (item.price * item.quantity), 0)
        .toFixed(2);
    });

    const checkout = () => {
      router.push('/payment');
    };

    const continueShopping = () => {
      router.push('/shop');
    };

    return {
      cartItems: cartItems.value,
      totalPrice,
      checkout,
      continueShopping,
      removeItem,
      updateQuantity,
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 95vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), 
              url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}

.v-list {
  background-color: transparent !important;
}

.v-list-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>