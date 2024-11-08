<template>
  <div class="container">
    <GlitchGif :text="dynamicText1" :showButton="showButton1" :opac="opacity1" :wrapperHeight="wrapperheight1"/>
    <v-card>{{staticText1}}</v-card>
    
    <GlitchGif :text="dynamicText2" :showButton="showButton2" :opac="opacity2" :wrapperHeight="wrapperheight2"/>
    <v-card>{{staticText2}}</v-card>
    <v-row justify="center">
      <v-col cols="5">
        <Carousels class="mb-4"></Carousels>
      </v-col>
    <v-col cols="5" class="pr-auto">
      <v-card class="text-left pa-4 bitstream text-high-emphasis about-us-container">
        At MoonArch, we're passionate about empowering gamers, content creators, and tech enthusiasts to bring their dream PCs to life.
        Our innovative platform makes it easy to design and customize your perfect machine, with a user-friendly interface and expert guidance every step of the way.
        With a focus on quality, performance, and community, we're dedicated to delivering an unparalleled PC building experience.<br><br>

        Whether you're a seasoned pro or just starting out, our platform is designed to help you create a PC that meets your unique needs and budget.<br>

        From gaming and video editing to streaming and content creation, we've got the tools and expertise to help you achieve your goals.<br><br>

        With a vast library of components, expert advice, and a supportive community, you'll be able to bring your vision to life and take your computing experience to the next level.
        Join the MoonArch community today and discover a new way to build, upgrade, and enjoy your ultimate gaming and computing rig.
      </v-card>
    </v-col>
  </v-row>

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
import GlitchGif from '../components/GlitchGif.vue';
import MapBox from '../components/MapBox.vue';

export default {
name: 'GlitchEffect',
data() {
  return {
    isGlitching: true,
  //modify here
    dynamicText1: 'WELCOME',
    opacity1: 100,
    showButton1: true,
    wrapperheight1: '100vh',
    staticText1: '',
    
    dynamicText2: 'ABOUT US',
    opacity2: 100,
    showButton2: false,
    wrapperheight2: '30vh',
    staticText2: '',

    dynamicText3: 'CONTACT US',
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
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

/* .background-color{
  background: #3e0054;
} */

.container {
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: flex;
overflow: hidden;
background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
background-repeat: no-repeat;
background-size: cover;
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

.about-us-container{
  border-radius: 5%;
  box-shadow: 0 0 20px rgba(255, 75, 183, 0.7);
  padding: 20px;
  width: 80%;
  background-color: rgba(62, 0, 84, 1);
  color: rgb(255, 255, 255);
  word-wrap: break-word;
}
</style>