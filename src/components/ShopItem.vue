<template>
  <v-container class="card-container" fluid>
    <v-row class="shop-items-row">
      <v-col cols="12" sm="4" md="3" v-for="item in items" :key="item.id">
        <v-card style="background-color: #001655;" class="bitstream card-content">
          <v-card-title class="centered-text bitstream">{{ item.name }}</v-card-title>
          <v-card-text class="centered-content bitstream">
            <img :src="item.imageUrl" alt="Item Image" class="fixed-size-image">
            <br><br>
            <p>{{ item.description }}</p>
            <p>RM{{ item.price }}</p>
          </v-card-text>
          <v-card-actions class="centered-content">
            <v-btn @click="addToCart(item)" class="styled-button bitstream">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useCart } from '@/composables/useCart';

export default {
  name: 'ShopItem',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(_, { emit }) {
    const { addToCart } = useCart();

    const addToCartHandler = (item) => {
      addToCart(item);
      emit('showSnackbar', `Added ${item.name} to cart`);
    };

    return {
      addToCart: addToCartHandler,
    };
  },
};
</script>

<style>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

.card-container {
  padding: 20px;
}

.fixed-size-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px auto;
}

.centered-text {
  text-align: center;
  margin: 10px 0;
}

.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}

.shop-items-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.styled-button {
  background-color: #E324BD; /* Match the pink color */
  color: white;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px 20px;
  text-transform: uppercase;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.styled-button:hover {
  background-color: #d11ca8; /* Slightly darker on hover */
}
</style>