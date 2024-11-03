<template>
  <v-app-bar class="d-flex flex-column" height="85" scroll-behavior="hide" scroll-threshold="90">
    <div>
      <v-img aspect-ratio="1" src="../assets/moonarch_logo.png" width="100" />
    </div>

    <v-spacer />
    <v-btn-toggle v-model="toggle" color="#3e0054">
      <v-btn href="" size="large">About</v-btn>
      <v-btn href="" size="large">Shop Now</v-btn>
      <v-btn href="" size="large">Customise</v-btn>
    </v-btn-toggle>

    <v-spacer />

    <!-- Show these buttons based on user type -->
    <template v-if="authStore.isAuthenticated">
      <v-btn
        v-if="authStore.isMaster"
        to="/dashboard"
        icon="mdi-view-dashboard"
        size="x-large"
        class="mr-2"
      />
      <v-btn
        v-if="authStore.isCustomer"
        to="/cart"
        icon="mdi-cart"
        size="x-large"
        class="mr-2"
      />
    </template>

    <v-menu>
      <template #activator="{ props }">
        <v-btn icon="mdi-account" size="x-large" v-bind="props" />
      </template>

      <!-- Dynamic menu items based on authentication state -->
      <v-list>
        <template v-if="!authStore.isAuthenticated">
          <v-list-item to="/login">
            <v-list-item-title>
              <v-btn prepend-icon="mdi-login">Login/Signup</v-btn>
            </v-list-item-title>
          </v-list-item>
        </template>

        <template v-else>
          <v-list-item to="/profile" v-if="authStore.isCustomer">
              <v-list-item-title>
              <v-btn prepend-icon="mdi-account-cog">Profile</v-btn>
              </v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title>
              <LogoutButton :icon="false" prepend-icon="mdi-logout" />
              </v-list-item-title>
          </v-list-item>
      </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'
  import LogoutButton from '@/components/LogoutButton.vue'

  
  const router = useRouter()
  const authStore = useAuthStore()
  const toggle = ref(null)

</script>