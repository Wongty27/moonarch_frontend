<template>
    <v-col cols="12" md="4">
      <v-card style="background-color: #001655;" class="bitstream">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>
          <img :src="item.imageUrl" alt="Item Image" width="100%">
          <p>{{ item.description }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn>Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    name: 'ShopItem',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>

<style>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');
</style>