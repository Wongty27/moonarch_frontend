<template>
    <v-parallax src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif" class="dimmed-background">
        <v-container>
            <v-container-title class="text-h2 bpdots shop-title" :style="{ textShadow: '2px 2px 5px #FF66FF'}">SHOP LISTING</v-container-title>
            <v-row class="shop-items-row">
                <ShopItem :items="shopItems" @showSnackbar="showSnackbar" />
            </v-row>
            <Snackbar :show="snackbar" :message="snackbarMessage" @update:show="snackbar = false" />
        </v-container>
    </v-parallax>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue';
import Snackbar from '@/components/Snackbar.vue';
import { useShopItems } from '@/composables/useShopItem.js';
import { ref } from 'vue';

export default {
  name: 'Shop',
  components: {
    ShopItem,
    Snackbar,
  },
  setup() {
    const shopItems = useShopItems();
    const snackbar = ref(false);
    const snackbarMessage = ref('');

    const showSnackbar = (message) => {
      snackbarMessage.value = message;
      snackbar.value = true;
    };

    return {
      shopItems,
      snackbar,
      snackbarMessage,
      showSnackbar,
    };
  },
};
</script>

<style>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');

  .dimmed-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity for dimming */
    z-index: 1;
  }

  .v-parallax {
    position: relative;
    overflow: hidden;
  }

  .v-container {
    position: relative;
    z-index: 2; /* Ensure content is above the overlay */
    text-align: center; /* Center content */
  }

  .shop-title {
    margin-bottom: 20px; /* Add space between title and cards */
  }

  .shop-items-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    column-gap: 20px;
  }

</style>