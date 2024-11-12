<template>
  <div class="container">
    <GlitchGif :text="dynamicText1" :showButton="showButton1" :opac="opacity1" :wrapperHeight="wrapperheight1"/>
    <v-card>{{staticText1}}</v-card>
    
    <GlitchGif :text="dynamicText2" :showButton="showButton2" :opac="opacity2" :wrapperHeight="wrapperheight2"/>
    <v-card>{{staticText2}}</v-card>
    <v-row justify="center" class="about-section" no-gutters>
      <v-col cols="12" md="4" sm="4" class="d-flex">
        <div class="content-wrapper">
          <Carousels></Carousels>
        </div>
      </v-col>
      <v-col cols="12" md="7" sm="2" class="d-flex">
        <div class="content-wrapper">
          <v-card class="about-us-container bitstream text-high-emphasis">
            <div class="card-content">
              At MoonArch, we're passionate about empowering gamers, content creators, and tech enthusiasts to bring their dream PCs to life.
              Our innovative platform makes it easy to design and customize your perfect machine, with a user-friendly interface and expert guidance every step of the way.
              With a focus on quality, performance, and community, we're dedicated to delivering an unparalleled PC building experience.<br><br>

              Whether you're a seasoned pro or just starting out, our platform is designed to help you create a PC that meets your unique needs and budget.<br>

              From gaming and video editing to streaming and content creation, we've got the tools and expertise to help you achieve your goals.<br><br>

              With a vast library of components, expert advice, and a supportive community, you'll be able to bring your vision to life and take your computing experience to the next level.
              Join the MoonArch community today and discover a new way to build, upgrade, and enjoy your ultimate gaming and computing rig.
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- Add a spacer div before Contact Us -->
    <div class="section-spacer"></div>

    <GlitchGif 
      :text="dynamicText3" 
      :showButton="showButton3" 
      :opac="opacity3" 
      :wrapperHeight="wrapperheight3"
    />
    <v-card>{{staticText3}}</v-card>
    <div v-for="(location, index) in locations" 
         :key="index"
         class="map-container-wrapper">
      <MapBox
        :address="location.address"
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
        address: 'Menara Gamuda,Pj Trade Centre, No. 8, Jalan PJU 8/8A, Damansara Perdana, 47820 Petaling Jaya, Selangor',
        headline: 'Damansara Perdana HQ',
        address1: 'Pj Trade Centre, No. 8',
        address2: 'Jalan PJU 8/8A, Damansara Perdana',
        address3: '47820 Petaling Jaya, Selangor',
        phone: '3-4565 4321',
        email: 'gamudahq@gmail.com'
      },
      {
        address: 'Gamuda Learning Centre (GLC), 53-61, Jalan SS 22/23, Damansara Jaya, 47400 Petaling Jaya, Selangor',
        headline: 'Petaling Jaya Branch',
        address1: '53-61',
        address2: 'Jalan SS 22/23, Damansara Jaya',
        address3: '47400 Petaling Jaya, Selangor',
        phone: '3-1415 9265',
        email: 'gamudalearningcentre@gmail.com'
      },
      {
        address: 'Universiti Tenaga Nasional (UNITEN), Jalan Wawasan, 43009 Kajang, Selangor',
        headline: 'Kajang Branch',
        address1: '1, Jalan Wawasan',
        address2: '43009 Kajang',
        address3: 'Selangor',
        phone: '3-2132 2324',
        email: 'gamudafarfaraway@gmail.com'
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
padding-bottom: 100px;
}

.map-container-wrapper {
margin-bottom: 50px; /* Increase this value for more space */
width: 100%;
display: flex;
justify-content: center;
}

/* Remove margin from last container but keep padding */
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

.section-spacer {
  height: 200px;  /* Adjust this value to control the amount of space */
  width: 100%;
}

/* Optional: Add margin to the GlitchGif component for Contact Us */
.glitch-gif-wrapper {
  margin-top: 50px;
}

/* If you want different spacing for different screen sizes */
@media (max-width: 768px) {
  .section-spacer {
    height: 50px;  /* Less space on mobile */
  }
}

.about-section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4px;
}

.content-wrapper {
  flex: 1;
  padding: 0 15px;
  height: 600px; /* Fixed height for both containers */
}

.about-us-container {
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 75, 183, 0.7);
  background-color: rgba(62, 0, 84, 1);
  color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
}

.card-content {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  text-align: left
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .about-section {
    gap: 8px;
  }

  .content-wrapper {
    height: 500px;
    padding: 4px;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 5px;
  }
}
</style>