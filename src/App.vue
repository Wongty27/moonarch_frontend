<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view></router-view>
    <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
/* Add any global styles here */
</style>
