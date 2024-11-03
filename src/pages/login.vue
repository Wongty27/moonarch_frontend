<template>
    <v-container class="fill-height">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="elevation-12">
            <v-card-title class="text-center text-h5 py-4">
              Login
            </v-card-title>
            
            <v-card-text>
              <v-form @submit.prevent="handleLogin" ref="form">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  required
                  :rules="[rules.required, rules.email]"
                  prepend-icon="mdi-email"
                />
  
                <v-text-field
                  v-model="password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  :rules="[rules.required]"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
  
                <v-alert
                  v-if="error"
                  type="error"
                  class="mb-4"
                >
                  {{ error }}
                </v-alert>
  
                <v-btn
                  type="submit"
                  color="primary"
                  block
                  class="mt-4"
                  :loading="loading"
                >
                  Login
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const authStore = useAuthStore()
  
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const loading = ref(false)
  const error = ref('')
  const form = ref<any>(null)
  
  const rules = {
    required: (v: string) => !!v || 'This field is required',
    email: (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email'
  }
  
  const handleLogin = async () => {
    const isValid = await form.value?.validate()
    
    if (!isValid.valid) return  
  
    loading.value = true
    error.value = ''
  
    try {
      await authStore.login(email.value, password.value)
      
      // Redirect based on user type
      if (authStore.isMaster) {
        router.push('/')
      } else if (authStore.isCustomer) {
        router.push('/')
      }
    } catch (err: any) {
      error.value = err.response?.data?.detail || 'Login failed. Please try again.'
    } finally {
      loading.value = false
    }
  }
  </script>
  
<route lang="yaml">
    name: login
    meta:
        layout: auth
        guest: true
</route>