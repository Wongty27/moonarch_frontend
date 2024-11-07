<!-- MapBox.vue -->
<template>
    <v-card class="map-box" min-width="50vw" max-width="50vw" color="#001655">
      <v-divider class="border-opacity-100" color="#e324bd" />
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <div class="text-content">
            <h1 align="right" class="headline">@{{ headline1 }}</h1>
            <h4 align="right" class="subtitle-1">{{ add1 }}</h4>
            <h4 align="right" class="subtitle-1">{{ add2 }}</h4>
            <h4 align="right" class="subtitle-1">{{ add3 }}</h4>
            <h4 align="right" class="subtitle-1">HP: +60{{ hp1 }}</h4>
            <h4 align="right" class="subtitle-1">Email: {{ email1 }}</h4>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <div class="map-container">
            <MapDisplay :mapId="'map-' + index" :latitude="latitude" :longitude="longitude"/>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          
        </v-col>
      </v-row>
      <v-divider class="border-opacity-100" color="#e324bd" />
    </v-card>
  </template>
  
  <script>
  import MapDisplay from '../components/mapDisplay2.vue'; // Assuming MapDisplay.vue is in the same directory
  
  export default {
    name: 'MapBox',
    components: {
      MapDisplay,
    },
    props: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      headline1: {
        type: String,
        required: true,
      },
      add1: {
        type: String,
        required: true,
      },
      add2: {
        type: String,
        required: true,
      },
      add3: {
        type: String,
        required: true,
      },
      hp1: {
        type: String,
        required: true,
      },
      email1: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .map-box {
    display: flex;
    flex-direction: column;
  }
  
  .text-content {
    padding: 16px;
  }
  
  .map-container {
    height: 300px;
    padding: 16px;
  }
  
  .headline {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  
  .subtitle-1 {
    font-size: 1rem;
    margin: 4px 0;
  }
  
  @media (max-width: 1000px) {
    .headline {
      font-size: 1.2rem;
    }
  
    .subtitle-1 {
      font-size: 0.7rem;
    }
  }
  </style>