<template>
  <div :id="mapId" class="map-container"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGoogleMaps } from '@/composables/useGMap.js'

const props = defineProps({
  mapId: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const { initMap } = useGoogleMaps()

onMounted(() => {
  initMap(props.mapId, props.address, props.options)
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.map-container:hover {
  opacity: 0.9;
}
</style>
