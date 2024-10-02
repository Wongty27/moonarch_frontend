<template>
  <div
    ref="SceneContainer"
    class="scene-container"
    style="width:200 px; height:200 px">
  </div>
  <TresCanvas clear-color="#ffffff">
    
  </TresCanvas>
</template>

<script setup type="module" lang="ts">
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TresCanvas, useRenderer, TresCamera } from '@tresjs/core';
import { CameraControls, useGLTF } from '@tresjs/cientos';

const { scene: model } = await useGLTF(
    '../models/scene.gltf',
    { draco: true }
)
// export default {
//   name: 'ThreeCanvas',
//   mounted() {
//     this.init();
//     window.addEventListener('resize', this.onWindowResize);
//   },

//   beforeUnmount() {
//     window.removeEventListener('resize', this.onWindowResize);
//   },

//   methods: {
//     init() {
//       this.scene = new THREE.Scene();
//       this.camera = new THREE.PerspectiveCamera( 75, this.$refs.SceneContainer.clientWidth / this.$refs.SceneContainer.clientHeight, 0.1, 1000 );
//       this.camera.position.set(-10, 5, 2);
//       this.camera.lookAt(0, 0, 0);

//       this.renderer = new THREE.WebGLRenderer({
//         antialias: true
//       });
//       this.renderer.setSize(this.$refs.SceneContainer.clientWidth, this.$refs.SceneContainer.clientHeight);
//       this.renderer.setClearColor('#ffffff');
//       this.renderer.setPixelRatio( this.$refs.SceneContainer.devicePixelRatio );
//       this.$refs.SceneContainer.appendChild(this.renderer.domElement);

//       const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
//       this.scene.add(ambientLight);

//       const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
//       directionalLight.position.set(-1, 1, 0);
//       this.scene.add(directionalLight);

//       this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//       this.controls.minDistance = 2;
//       this.controls.maxDistance = 10;
//       this.controls.target.set(0, 0, -0.2);
//       this.controls.update();

//       const loader = new GLTFLoader();
//       try {
//         loader.load('../public/models/scene.gltf', (gltf) => {
//           console.log("Gltf loaded,", gltf);
//           gltf.scene.position.set(0, 0, 0);
//           this.scene.add(gltf.scene);
//           this.animate();
//         })
      
//       } catch(err) {
//           console.error(err.message);
//         }
//     },

//     onWindowResize() {
//         this.camera.aspect = this.$refs.SceneContainer.clientWidth / this.$refs.SceneContainer.clientHeight;
//         this.camera.updateProjectionMatrix();
//         this.renderer.setSize(this.$refs.sceneContainer.clientWidth, this.$refs.sceneContainer.clientHeight);
//     },

//     animate() {
//       requestAnimationFrame(this.animate);
//       this.renderer.render(this.scene, this.camera);
//     },
//   },
// };
</script>
