<template>
  <v-carousel 
    class="carousel-size" 
    hide-delimiters 
    show-arrows="hover"
    :height="carouselHeight"
    cycle
    interval="5000"
  >
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { useCarousel } from '@/composables/useCarousel.js'

const { images, carouselHeight } = useCarousel()
</script>

<style scoped>
.carousel-size {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 75, 183, 0.7);
  overflow: hidden;
  height: 100% !important;
  width: 100% !important;
}

.v-carousel {
  height: 100% !important;
}

.v-carousel__item {
  height: 100% !important;
}
</style>