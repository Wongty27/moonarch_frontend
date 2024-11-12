<template>
  <v-app>
    <!-- Use the default layout as the main layout -->
    <default-layout>
      <router-view />
    </default-layout>
  </v-app>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue'
</script>

<style>
/* Global styles if needed */
</style>
