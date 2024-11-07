<template>
    <div :id="mapId" class="map-container"></div>
</template>
  
<script>
import L from 'leaflet';

export default {
    props: {
        mapId: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    mounted() {
        // Wait for DOM to be ready
        this.$nextTick(() => {
            this.initMap();
        });
    },
    methods: {
        initMap() {
            // Make sure the container exists
            const container = document.getElementById(this.mapId);
            if (!container) return;

            // Initialize map
            const map = L.map(this.mapId).setView([this.latitude, this.longitude], 14);
            
            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Add marker
            const marker = L.marker([this.latitude, this.longitude]).addTo(map);
            
            // Add tooltip
            marker.bindTooltip(`(${this.latitude}, ${this.longitude})`, {
                direction: 'bottom',
                permanent: false
            });
        }
    }
};
</script>

<style scoped>
.map-container {
    height: 300px;
    width: 100%;
}
</style>