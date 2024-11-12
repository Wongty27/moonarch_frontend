<template>
  <div>
    <AppHeader />
    <v-main>
      <!-- This slot will receive the router-view content -->
      <slot></slot>
      <ChatBot />
    </v-main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ChatBot from '@/components/ChatBot.vue'
</script>

<style scoped>
/* Ensure proper stacking context for the app */
:deep(.v-app) {
  position: relative;
  z-index: 1;
}

/* Ensure footer stays above main content but below chatbot */
:deep(.v-footer) {
  position: relative;
  z-index: 2;
}

/* Ensure main content has proper stacking */
:deep(.v-main) {
  position: relative;
  z-index: 1;
}

/* Ensure ChatBot stays on top */
:deep(.chatbot-container) {
  z-index: 9999 !important;
}

:deep(.chat-button) {
  z-index: 9999 !important;
}
</style>
