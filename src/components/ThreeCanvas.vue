<template>
  <!-- <v-container> -->
    <div ref="SceneContainer" class="scene-container"/>
  <!-- </v-container> -->
  
</template>

<script type="module" lang="ts">
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default {
  name: 'ThreeCanvas',
  mounted() {
    this.init();
  },

  methods: {
    init() {        
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.set(-10, 3, 5);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
        
      const axesHelper = new THREE.AxesHelper( 5 );
      scene.add( axesHelper );
      const renderer = new THREE.WebGLRenderer({
        powerPreference: 'low-power',
        precision: 'lowp',
        antialias: false,
        renderMode: 'on-demand',
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor('#ffffff'); // 001655
      renderer.setPixelRatio( window.devicePixelRatio );
      const sceneContainer = this.$refs.SceneContainer as HTMLElement;
      sceneContainer.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight('#ffffff', 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight('#ffffff', 2);
      directionalLight.position.set(-1, 1, 0);
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.target.set(0, 0, -0.2);
      controls.update();

      const loader = new GLTFLoader();
      let model;
      loader.load(
        '../models/scene.gltf',
        (gltf) => {
          model = gltf.scene;
          model.position.set(-4.5, 1.5, -0.5);
          model.scale.set(0.5, 0.5, 0.5);
          scene.add(model);
        }
      );

      const animate  = () => {
        requestAnimationFrame(animate);
        // model.rotation.y += 0.002;        
        renderer.render(scene, camera);
      };

      animate();

    //   window.addEventListener('resize', () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //   });
    }
  }
};
</script>