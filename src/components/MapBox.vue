<!-- MapBox.vue -->
<template>
    <v-card 
      class="map-box" 
      min-width="50vw" 
      max-width="50vw" 
      color="#001655"
      rounded="xl"
    >
      <v-divider class="border-opacity-100" color="#e324bd" thickness="3" />
      <v-row no-gutters style="height: 300px;">
        <!-- Left side content -->
        <v-col cols="6">
          <div class="text-content">
            <h1 class="headline text-right">{{ headline1 }}</h1>
            <h4 class="subtitle-1 text-right">{{ add1 }}</h4>
            <h4 class="subtitle-1 text-right">{{ add2 }}</h4>
            <h4 class="subtitle-1 text-right">{{ add3 }}</h4>
            <h4 class="subtitle-1 text-right">HP: +60{{ hp1 }}</h4>
            <h4 class="subtitle-1 text-right">Email: {{ email1 }}</h4>
          </div>
        </v-col>
        <!-- Right side map -->
        <v-col cols="6" class="map-col">
          <GMap :mapId="'map-' + index" :address="address"/>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-100" color="#e324bd" thickness="3" />
    </v-card>
  </template>
  
  <script>
  import GMap from './GMap.vue';
  
  export default {
    name: 'MapBox',
    components: {
      GMap,
    },
    props: {
      address: {
        type: String,
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
    overflow: hidden;
    border-radius: 30px !important;
  }
  
  .text-content {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .map-col {
    height: 100%;
    padding: 0 !important;
    position: relative;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    overflow: hidden;
  }
  
  .map-col :deep(.map-container) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100% !important;
  }
  
  .headline {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    font-weight: bold;
  }
  
  .subtitle-1 {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #ffffff;
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