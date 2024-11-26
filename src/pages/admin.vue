<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="pa-4">
            <h1 class="text-h4 mb-4 bitstream">Welcome back, Admin!</h1>
            <p class="text-body-1 bitstream">Here's your admin dashboard. You can manage products, view analytics, and monitor system performance.</p>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- Add some quick stats cards -->
      <v-row class="mt-4">
        <v-col cols="12" md="4">
          <v-card class="pa-4" color="#3e0054">
            <h3 class="text-h6 bitstream text-white">Total Products</h3>
            <p class="text-h4 bitstream text-white">150</p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4" color="#001655">
            <h3 class="text-h6 bitstream text-white">Active Users</h3>
            <p class="text-h4 bitstream text-white">45</p>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4" color="#e324bd">
            <h3 class="text-h6 bitstream text-white">Total Orders</h3>
            <p class="text-h4 bitstream text-white">28</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  //
  </script>``