<template>
  <TresCanvas width="" preset="realistic" clear-color="#82dbc5">
    <TresPerspectiveCamera :position="[-10, 0, 15]" :look-at="[0,0,0]"/>
    <CameraControls />
    
    <Suspense>
      <GLTFModel path="../models/scene.gltf" />
    </Suspense>
    <TresAxesHelper />
    <TresGridHelper />
    <TresAmbientLight :intensity="1" />
    <TresDirectionalLight :intensity="2" :position="[0, 2, 4]" />
    </TresCanvas>
  </template>
  
<script setup lang="ts">
import { TresCanvas, useRenderer, TresCamera } from '@tresjs/core';
import { CameraControls, GLTFModel } from '@tresjs/cientos';

</script>
