<template>
    <div class="container">
        <v-container>
            <v-container-title class="text-h2 bpdots saturation" :style="{ textShadow: '1px 1px 1px #E324BD'}">SHOP LISTING</v-container-title>
            <v-divider class="border-opacity-50 mb-5" :thickness="3"></v-divider>
            <v-row>
                <ShopItem v-for="item in shopItems" :key="item.id" :item="item"/>
            </v-row>
        </v-container>
      </div>
</template>

<script>
import { ref } from 'vue';
import ShopItem from '@/components/ShopItem.vue';
import { useShopItems } from '@/composables/useShopItem.js';
import Background from 'three/src/renderers/common/Background.js';

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

.container {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
}

.saturation{
  filter:saturate(7);
}
</style>