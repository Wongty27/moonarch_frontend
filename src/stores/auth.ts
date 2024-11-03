import { defineStore } from 'pinia'
import useApi from '@/composables/useApi'

interface UserState {
  token: string | null
  user: {
    email: string | null
    id: string | null
    user_type: string | null
  } | null
}

export const useAuthStore = defineStore('auth', {
  state: (): UserState => ({
    token: localStorage.getItem('token'),
    user: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
    getToken: (state) => state.token,
    getUserType: (state) => state.user?.user_type,
    isMaster: (state) => state.user?.user_type === 'master',
    isCustomer: (state) => state.user?.user_type === 'customer'
  },

  actions: {
    decodeToken(token: string) {
      try {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        return JSON.parse(window.atob(base64))
      } catch (error) {
        console.error('Error decoding token:', error)
        return null
      }
    },

    async login(email: string, password: string) {
      try {
        const api = useApi()
        const formData = new URLSearchParams()
        formData.append('username', email)
        formData.append('password', password)

        const response = await api.post('/token', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        
        const token = response.data.access_token
        const payload = this.decodeToken(token)
        
        if (!payload) {
          throw new Error('Invalid token received')
        }

        this.token = token
        localStorage.setItem('token', token)

        this.user = {
          email: payload.sub,
          id: payload.id,
          user_type: payload.user_type
        }

        return true
      } catch (error) {
        console.error('Login error:', error)
        this.logout()
        throw error
      }
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },

    checkAuth() {
      const token = this.token
      if (!token) {
        this.logout()
        return false
      }

      const payload = this.decodeToken(token)
      if (!payload) {
        this.logout()
        return false
      }

      // Check if token is expired
      const expTime = payload.exp * 1000
      if (Date.now() >= expTime) {
        this.logout()
        return false
      }

      // Restore user state
      this.user = {
        email: payload.sub,
        id: payload.id,
        user_type: payload.user_type
      }

      return true
    }
  }
})