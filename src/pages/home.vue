<template>
    <div class="container">
      <ChildComponent :text="dynamicText1" :showButton="showButton1" :opac="opacity1" :wrapperHeight="wrapperheight1"/>
      <v-card>{{staticText1}}</v-card>
      <ChildComponent :text="dynamicText2" :showButton="showButton2" :opac="opacity2" :wrapperHeight="wrapperheight2"/>
      <v-card>{{staticText2}}</v-card>
      <ChildComponent :text="dynamicText3" :showButton="showButton3" :opac="opacity3" :wrapperHeight="wrapperheight3"/>
      <v-card>{{staticText3}}</v-card>
      <
      <v-card width=60vw>
        <div class="d-flex ">
            <div>
                <h1 align="right">@ puchong vdfvfdvfvfdvdfvfdbranch</h1>
                <h4 align="right"> adressline 1</h4>
                <h4 align="right"> adressline 2</h4>
                <h4 align="right"> adressline 2</h4>
                <h4 align="right"> adressline 2</h4>
                <h4 align="right"> HP: +60-xx xxx xxxx</h4>
                <h4 align="right"> Email: puchongBranch@gmail.com</h4>
            </div>
            <v-avatar
                class="ma-3"
                rounded="0"
                size="125"
                >
                    <v-img width="257" src="https://www.amerimacmanagement.com/wp-content/uploads/2021/11/Overhead-Map-of-Possible-Residential-Area.jpg"></v-img>
            </v-avatar>
        </div>
      </v-card>
      <
    </div>
</template>

  <script>
  import ChildComponent from '../components/glitchgif.vue';
  
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
    //end of modification section
    }
  },
  components: {
    ChildComponent,
  }
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
</style>