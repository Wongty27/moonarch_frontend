<template>
  <v-main class="container parallax-background" style="min-height: 90vh;">
    <div class="overlay"></div>
    <v-container>
      <v-card style="background-color: rgba(62, 0, 84, 0.9); padding: 16px; min-height: 50vh;">
        <span class="text-h2 bpdots shop-title" :style="{ textShadow: '2px 2px 5px #FF66FF'}">SHOPPING CART</span>
        <v-card-title class="d-flex justify-space-between align-center mb-4 bitstream">
          <v-btn
            color="red"
            @click="clearCart"
            class="bitstream"
            :disabled="cartItems.length === 0"
            style="margin-left: auto;"
          >
            Clear Cart
          </v-btn>
        </v-card-title>
        
        <!-- Debug info -->
        <div class="debug-info text-center">
          Cart Items Count: {{ cartItems.length }}
        </div>

        <div class="scrollable-list" style="overflow-y: auto; max-height: 60vh;">
          <v-row>
            <v-col cols="12">
              <div v-if="cartItems.length > 0">
                <v-list bg-color="transparent">
                  <template v-for="item in cartItems" :key="item.id">
                    <v-list-item>
                      <v-row align="center" no-gutters>
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

                        <!-- Quantity Controls -->
                        <v-col cols="3" class="text-right">
                          <v-btn icon @click="decreaseQuantity(item.id)">
                            <v-icon>mdi-minus</v-icon>
                          </v-btn>
                          <v-btn icon @click="increaseQuantity(item.id)">
                            <v-icon>mdi-plus</v-icon>
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
        </div>

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
    const { cartItems, removeItem, updateQuantity, clearCart } = useCart();

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

    const increaseQuantity = (itemId) => {
      updateQuantity(itemId, 1);
    };

    const decreaseQuantity = (itemId) => {
      updateQuantity(itemId, -1);
    };

    return {
      cartItems,
      totalPrice,
      checkout,
      continueShopping,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
    };
  },
};
</script>

<style>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

.parallax-background {
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity for dimming */
  z-index: 0;
}

.scrollable-list {
  overflow-y: auto;
  max-height: 300px; /* Adjust the height as needed */
  overflow-x: hidden; /* Remove horizontal scrollbar */
}

.scrollable-list::-webkit-scrollbar {
  width: 8px;
}

.scrollable-list::-webkit-scrollbar-thumb {
  background-color: #E324BD; /* Pink color */
  border-radius: 10px;
}

.scrollable-list::-webkit-scrollbar-track {
  background: transparent;
}
</style>