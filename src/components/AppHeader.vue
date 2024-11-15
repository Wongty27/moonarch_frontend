<template>
    <v-app-bar
      class="d-flex flex-row align-center bpdots"
      height="80"
      scroll-behavior="hide"
      scroll-threshold="100"
      :style="{ textShadow: '2px 2px 5px #FF66FF'}"
    >
      <div class="logo-container">
        <v-img
          aspect-ratio="1"
          src="../assets/moonarch.png"
          :width="logoSize"
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
          v-for="(button, index) in navButtons"
          :key="index"
          :to="button.to"
          size="large"
          class="nav-button"
          rounded="lg"
        >
          {{ button.text }}
        </v-btn>
      </v-btn-toggle>
  
      <v-spacer />
  
      <v-btn
        to="/cart"
        icon="mdi-cart"
        :size="cartSize"
        class="cart-btn"
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
          <v-btn icon="mdi-account" 
                size="x-large" 
                v-bind="props" 
                :style="{ textShadow: '2px 2px 5px #FF66FF'}"
                />
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="item.action"
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
    import { useRouter } from 'vue-router'
    import { useCart } from '@/composables/useCart';
    import { ref } from 'vue'

    export default {
      setup() {
        const router = useRouter()
        const { cartItems } = useCart();

        return {
          cartItems,
          router,
        };
      },
      data () {
        return {
          toggle: null,
          navButtons: [
            { text: 'About', to: '/' },
            { text: 'Shop Now', to: '/shop' },
            { text: 'Customise', to: '/customise' }
          ],
          items: [
            { 
              title: 'Login/Signup', 
              icon: 'mdi-login', 
              action: () => this.router.push('/login')
            },
            { 
              title: 'Profile', 
              icon: 'mdi-account-cog', 
              action: () => this.router.push('/profile')
            },
            { 
              title: 'Logout', 
              icon: 'mdi-logout',
              action: () => {
                console.log('Logging out...')
              }
            },
          ],
        }
      },
      computed: {
        logoSize() {
          if (window.innerWidth <= 400) return '40'
          if (window.innerWidth <= 600) return '50'
          return '80'
        },
        cartSize() {
          if (window.innerWidth <= 400) return 'x-small'
          if (window.innerWidth <= 600) return 'small'
          return 'large'
        }
      }
    }
  </script>

  <style scoped>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');


  
.v-app-bar {
  padding: 0 5px;
  height: auto !important;
  min-height: 60px !important;
}

.nav-button {
  font-size: clamp(0.6rem, 1.2vw, 1.5rem) !important;
  margin: 0 clamp(2px, 0.5vw, 20px);
  padding: 0 clamp(4px, 1vw, 20px) !important;
  height: 32px !important;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  font-weight: 800;
}

.button-container {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-button:hover {
  background-color: #5e0054;
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
  margin-left: clamp(5px, 1vw, 30px);
}

.cart-btn {
  margin-right: clamp(5px, 1vw, 30px);
}

/* Tablet styles */
@media (min-width: 601px) and (max-width: 960px) {
  .nav-button {
    font-size: 0.9rem !important;
    padding: 0 8px !important;
    height: 36px !important;
  }
}

/* Mobile styles */
@media (max-width: 600px) {
  .nav-button {
    font-size: 0.7rem !important;
    padding: 0 6px !important;
    margin: 0 1px;
    height: 28px !important;
  }

  .v-app-bar {
    padding: 0 2px;
    min-height: 50px !important;
  }

  .button-container {
    gap: 1px;
  }
}

/* Extra small screens */
@media (max-width: 400px) {
  .nav-button {
    font-size: 0.6rem !important;
    padding: 0 4px !important;
    margin: 0;
    height: 24px !important;
  }

  .v-app-bar {
    padding: 0 1px;
    min-height: 40px !important;
  }

  .logo-container {
    margin-left: 2px;
  }

  .cart-btn {
    margin-right: 2px;
  }
}
</style>