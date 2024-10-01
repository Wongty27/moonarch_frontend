<template>
    <v-parallax src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif">
        <v-container>
            <v-container-title class="text-h2 bpdots" :style="{ textShadow: '1px 1px 1px #E324BD'}">SHOP LISTING</v-container-title>
            <v-row>
                <ShopItem v-for="item in shopItems" :key="item.id" :item="item"/>
            </v-row>
        </v-container>
    </v-parallax>
</template>

<script>
import { ref } from 'vue';
import ShopItem from '@/components/ShopItem.vue';
import { useShopItems } from '@/composables/useShopItem.js';

export default {
  name: 'Shop',
  components: {
    ShopItem,
  },
  setup() {
    const shopItems = useShopItems();
    return {
      shopItems,
    };
  },
};
</script>

<style>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');

  .parallax-dimmer {
    filter: brightness(0.5);
  }
</style>