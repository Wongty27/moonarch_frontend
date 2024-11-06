<template>
    <v-app-bar
      class="d-flex flex-column bpdots"
      height="100"
      scroll-behavior="hide"
      scroll-threshold="90"
      :style="{ textShadow: '2px 2px 5px #FF66FF'}"
    >
      <div>
        <v-img
          aspect-ratio="1"
          src="../assets/moonarch.png"
          width="100"
        />
      </div>
  
      <v-spacer />
      <v-btn-toggle
        v-model="toggle"
        color="#3e0054"
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
        <v-icon>mdi-cart</v-icon>
        <v-badge v-if="cartItems.length > 0" color="red" dot>
          <template #badge>
            <span>{{ cartItems.length }}</span>
          </template>
        </v-badge>
      </v-btn>
  
      <v-menu>
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
      </v-menu>
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
  font-size: 2rem !important; /* Force font size */
  margin: 0px 30px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #5e0054; /* Optional: Change color on hover */
}
</style>