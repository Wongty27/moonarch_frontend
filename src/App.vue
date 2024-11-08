<template>
  <v-app>
    <AppHeader class="bpdots"/>
    <v-main>
      <router-view></router-view>
    <AppFooter class="bpdots"/>
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
@import url('@/assets/BitStreamFont/stylesheet.css');
@import url('@/assets/BPdotsFont/stylesheet.css');
</style>
