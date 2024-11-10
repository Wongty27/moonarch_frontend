<template>
  <v-footer class="custom-footer d-flex">
    <span class="footer-text">MoonArch -- Dream Builders for Your Desires</span>
    <v-spacer />
    <span class="footer-text">@{{ new Date().getFullYear() }} MoonArch Tech PC SDN. BHD. All Rights Reserved.</span>
  </v-footer>
</template>

<style scoped>
.custom-footer {
  height: 40px !important; /* Reduced height */
  color: white !important;
  display: flex !important;
  align-items: center !important; /* Vertical centering */
  justify-content: center !important; /* Horizontal centering */
}

.footer-text {
  font-family: 'BPdots', sans-serif;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .custom-footer {
    height: 80px !important; /* Taller on mobile for text wrapping */
    padding: 10px 15px !important;
  }

  .footer-text {
    font-size: 0.75rem;
  }
}
</style>
