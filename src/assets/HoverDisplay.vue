<template>
    <v-card
      v-if="showDisplay"
      class="hover-display"
      :style="{
        left: `${displayX}px`,
        top: `${displayY}px`,
        transform: `translate(-50%, -100%)`
      }"
    >
      <v-card-title>
        {{ selectedObject ? selectedObject.name : 'No Object Selected' }}
      </v-card-title>
      <v-card-text>
        <!-- Display object details here -->
        <p v-if="selectedObject">
          <b>ID:</b> {{ selectedObject.uuid }}
          <br>
          <b>Type:</b> {{ selectedObject.type }}
        </p>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      showDisplay: {
        type: Boolean,
        default: false
      },
      displayX: {
        type: Number,
        default: 0
      },
      displayY: {
        type: Number,
        default: 0
      },
      selectedObject: {
        type: Object,
        default: null
      }
    }
  }
  </script>
  
  <style scoped>
  .hover-display {
    position: absolute;
    z-index: 10;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 16px;
  }
  </style>