<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-card-title class="text-center text-h5 py-4">
            <v-icon
              color="primary"
              class="mr-2"
              size="large"
            >
              {{ isLogin ? 'mdi-account-circle' : 'mdi-account-plus' }}
            </v-icon>
              {{ isLogin ? 'Login' : 'Sign Up' }}
          </v-card-title>
          
          <v-card-text>
            <v-form @submit.prevent="handleSubmit" ref="form">
              <v-text-field
                v-model="formData.email"
                label="Email"
                type="email"
                required
                :rules="[rules.required, rules.email]"
                prepend-icon="mdi-email"
                variant="outlined"
              />

              <v-text-field
                v-model="formData.password"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                required
                :rules="[rules.required, rules.password]"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                variant="outlined"
              />

              <v-alert
                v-if="error"
                type="error"
                class="mb-4"
                closable
                @click:close="error = ''"
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
                {{ isLogin ? 'Login' : 'Sign Up' }}
              </v-btn>

              <v-btn
                variant="text"
                block
                class="mt-2"
                @click="toggleMode"
              >
                {{ isLogin ? 'Need an account? Sign up' : 'Already have an account? Login' }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const authStore = useAuthStore()

  const isLogin = ref(true)
  const showPassword = ref(false)
  const loading = ref(false)
  const error = ref('')
  const form = ref<any>(null)

  const formData = reactive({
    email: '',
    password: ''
  })

  const rules = {
    required: (v: string) => !!v || 'This field is required',
    email: (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    password: (v: string) => v.length >= 4 || 'Password must be at least 6 characters'
  }

  const toggleMode = () => {
    isLogin.value = !isLogin.value
    error.value = ''
    formData.email = ''
    formData.password = ''
  }

  const handleSubmit = async () => {
    const isValid = await form.value?.validate()
    if (!isValid.valid) return

    loading.value = true
    error.value = ''

    try {
      if (isLogin.value) {
        await authStore.login(formData.email, formData.password)
      } else {
        await authStore.signup(formData)
      }
      
      // Redirect based on user type
      if (authStore.isMaster) {
        router.push('/admin')
      } else {
        router.push('/')
      }
    } catch (err: any) {
      error.value = err.response?.data?.detail || 
        `${isLogin.value ? 'Login' : 'Sign up'} failed. Please try again.`
    } finally {
      loading.value = false
    }
  }
</script>

<route lang="yaml">
  name: auth
  meta:
    layout: auth
    guest: true
</route>