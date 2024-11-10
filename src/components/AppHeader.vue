<template>
    <v-app-bar
      class="d-flex flex-column bpdots"
      height="100"
      scroll-behavior="hide"
      scroll-threshold="100"
      :style="{ textShadow: '2px 2px 5px #FF66FF'}"
    >
      <div class="logo-container">
        <v-img
          aspect-ratio="1"
          src="../assets/moonarch.png"
          width="100"
          class="pixel-logo"
        />
      </div>
  
      <v-spacer />
      <v-btn-toggle
        v-model="toggle"
        color="#3e0054"
        class="button-container"
      >
        <v-btn
          to="/"
          size="large"
          class="nav-button"
          rounded="lg"
        >
          About
        </v-btn>
  
        <v-btn
          to="/shop"
          size="large"
          class="nav-button"
          rounded="lg"
        >
          Shop Now
        </v-btn>
  
        <v-btn
          to="/customise"
          size="large"
          class="nav-button"
          rounded="lg"
        >
          Customise
        </v-btn>
      </v-btn-toggle>
  
      <v-spacer />
  
      <v-btn
        to="/cart"
        icon="mdi-cart"
        size="x-large"
      >
        <v-icon class="cart-container">mdi-cart</v-icon>
        <v-badge v-if="cartItems.length > 0" color="red" dot>
          <template #badge>
            <span>{{ cartItems.length }}</span>
          </template>
        </v-badge>
      </v-btn>
  
      <!-- <v-menu>
        <template #activator="{ props }">
          <v-btn icon="mdi-account" size="x-large" v-bind="props" />
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>
              <v-btn v-bind:prepend-icon="item.icon">
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
  
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </template>
  
  <script>
    import { useCart } from '@/composables/useCart';

    export default {
      setup() {
        const { cartItems } = useCart();

        return {
          cartItems,
        };
      },
      data () {
        return {
          toggle: null,
          items: [
            { title: 'Login/Signup', icon: 'mdi-login' },
            { title: 'Profile', icon: 'mdi-account-cog' },
            { title: 'Logout', icon: 'mdi-logout' },
          ],
        }
      },
    }
  </script>

  <style>
.v-btn.nav-button {
  font-size: 2rem !important;
  margin: 0px 50px;
  padding: 5px 20px !important;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.nav-button:hover {
  background-color: #5e0054;
}

.button-container {
  position: absolute;
  left: 52%;
  transform: translateX(-50%);
}

.pixel-logo {
  image-rendering: pixelated;
  filter: drop-shadow(0 0 8px #00ffff);
  transition: filter 0.3s ease;
}

.pixel-logo:hover {
  filter: drop-shadow(0 0 12px #ff00ff);
}

.logo-container {
  margin-left: 30px;
}

.cart-container{
  margin-right: 30px;
}
</style>