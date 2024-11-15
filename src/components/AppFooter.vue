<template>
  <v-footer class="footer-container bpdots">
    <div class="footer-content">
      <span class="left-text">MOONARCH -- Dream Builders For Your Desires</span>
      <span class="right-text">{{ new Date().getFullYear() }} MOONARCH TECH PC SDN. BHD. ALL RIGHTS RESERVED.</span>
    </div>
  </v-footer>
</template>

<style scoped>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

.footer-container {
  background-color: black !important;
  padding: 8px 16px;
  width: 100%;
  height: 60px;
  z-index: 999;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem; /* Default for large screens */
  color: white;
  text-shadow: 0 0 10px #FF66FF;
}

.left-text, .right-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Medium screens */
@media (max-width: 1264px) {
  .footer-content {
    font-size: 1rem;
  }
}

/* Small screens */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 4px;
    font-size: 0.6rem;
  }
  
  .footer-container {
    height: auto;
    min-height: 60px;
    padding: 4px 8px;
  }
}
</style>
