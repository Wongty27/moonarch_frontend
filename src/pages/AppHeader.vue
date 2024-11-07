<template>
    <v-app-bar
      class="d-flex flex-column"
      height="85"
      scroll-behavior="elevate"
      scroll-threshold="90"
      :elevation="scrolled ? 4 : 0"
      fixed
    >
      <div>
        <v-img
          aspect-ratio="1"
          src="../assets/moonarch.png"
          width="100"
        />
      </div>
  
      <v-spacer />
      <v-btn-toggle
        v-model="toggle"
        color="#3e0054"
      >
        <v-btn
          href=""
          size="large"
        >
          About
        </v-btn>
  
        <v-btn
          href=""
          size="large"
        >
          Shop Now
        </v-btn>
  
        <v-btn
          href=""
          size="large"
        >
          Customise
        </v-btn>
      </v-btn-toggle>
  
      <v-spacer />
  
      <v-btn
        href=""
        icon="mdi-cart"
        size="x-large"
      />
  
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon="mdi-account" size="x-large" v-bind="props" />
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>
              <v-btn v-bind:prepend-icon="item.icon">
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
  
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script>
    export default {
      data () {
        return {
          toggle: null,
          scrolled: false,
          items: [
            { title: 'Login/Signup', icon: 'mdi-login' },
            { title: 'Profile', icon: 'mdi-account-cog' },
            { title: 'Logout', icon: 'mdi-logout' },
          ],
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
      },
      methods: {
        handleScroll() {
          this.scrolled = window.scrollY > 0;
        }
      }
    }
  </script>
  
  <style>
    .v-app-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
  </style>
  