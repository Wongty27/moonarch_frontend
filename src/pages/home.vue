<template>
    <div class="container">
      <GlitchGif :text="dynamicText1" :showButton="showButton1" :opac="opacity1" :wrapperHeight="wrapperheight1"/>
      <v-card>{{staticText1}}</v-card>
      <GlitchGif :text="dynamicText2" :showButton="showButton2" :opac="opacity2" :wrapperHeight="wrapperheight2"/>
      <v-card>{{staticText2}}</v-card>
      <GlitchGif :text="dynamicText3" :showButton="showButton3" :opac="opacity3" :wrapperHeight="wrapperheight3"/>
      <v-card>{{staticText3}}</v-card>
      <div v-for="(location, index) in locations" 
           :key="index"
           class="map-container-wrapper">
        <MapBox
          :latitude="location.latitude"
          :longitude="location.longitude"
          :headline1="location.headline"
          :add1="location.address1"
          :add2="location.address2"
          :add3="location.address3"
          :hp1="location.phone"
          :email1="location.email"
          :index="index"
        />
      </div>
    </div>
</template>

<script>
import GlitchGif from '../components/glitchgif.vue';
import MapBox from '../components/MapBox.vue';

export default {
  name: 'GlitchEffect',
  data() {
    return {
      isGlitching: true,
    //modify here
      dynamicText1: 'Welcome',
      opacity1: 100,
      showButton1: true,
      wrapperheight1: '100vh',
      staticText1: '',
      
      dynamicText2: 'TERMS OF USE',
      opacity2: 50,
      showButton2: false,
      wrapperheight2: '30vh',
      staticText2: '',

      dynamicText3: 'Contact us',
      opacity3: 100,
      showButton3: false,
      wrapperheight3: '30vh',
      staticText3: '',
    
      locations: [
        {
          latitude: 3.0333,
          longitude: 101.6869,
          headline: 'Puchong Branch',
          address1: 'Address Line 1',
          address2: 'Address Line 2',
          address3: 'Address Line 3',
          phone: '10-123 4567',
          email: 'mnPuchong@gmail.com'
        },
        {
          latitude: 3.1864,
          longitude: 101.7059,
          headline: 'Setapak Branch',
          address1: 'Address Line 1',
          address2: 'Address Line 2',
          address3: 'Address Line 3',
          phone: '10-765 4321',
          email: 'mnSetapak@gmail.com'
        },
        {
          latitude: 5.4141,
          longitude: 100.3285,
          headline: 'Penang Branch',
          address1: 'Address Line 1',
          address2: 'Address Line 2',
          address3: 'Address Line 3',
          phone: '12-567 1234',
          email: 'mnPenang@gmail.com'
        }
        // Add more locations as needed
      ]
    }
  },
  components: {
    GlitchGif,
    MapBox,
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: flex;
  overflow: hidden;
}

.map-container-wrapper {
  margin-bottom: 50px; /* Adjust this value to control vertical spacing */
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Remove margin from last container */
.map-container-wrapper:last-child {
  margin-bottom: 0;
}
</style>
