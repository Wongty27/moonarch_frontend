<template>
  <div :id="mapId" class="map-container"></div>
</template>

<script>
export default {
  name: 'GMap',
  props: {
    mapId: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const geocoder = new google.maps.Geocoder();
      
      geocoder.geocode({ address: this.address }, (results, status) => {
        if (status === 'OK') {
          const location = results[0].geometry.location;
          
          const map = new google.maps.Map(document.getElementById(this.mapId), {
            center: location,
            zoom: 15,
            disableDefaultUI: true,
            gestureHandling: 'none',
            zoomControl: false,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [{ "color": "#1a1a2e" }]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#242f3e" }]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#746855" }]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#38414e" }]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#212a37" }]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9ca5b3" }]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#17263c" }]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#515c6d" }]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#283d6a" }]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{ "color": "#2f3948" }]
              }
            ]
          });

          // Custom purple pointer marker
          const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
              path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
              fillColor: "#e324bd",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
              scale: 2,
              anchor: new google.maps.Point(12, 24)
            }
          });

          // Add click handler
          map.addListener('click', () => {
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`, '_blank');
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
