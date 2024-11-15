<template>
  <div class="login-container">
    <div class="login-card">
      <h1>{{ isLogin ? 'LOGIN' : 'SIGN UP' }}</h1>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            placeholder="Enter your email"
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required
            placeholder="Enter your password"
          >
        </div>

        <div class="form-group" v-if="!isLogin">
          <label for="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            required
            placeholder="Confirm your password"
          >
        </div>

        <button type="submit" class="submit-btn">
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </button>
      </form>

      <p class="toggle-text">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <a href="#" @click.prevent="toggleMode">
          {{ isLogin ? 'Sign Up' : 'Login' }}
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const toggleMode = () => {
  isLogin.value = !isLogin.value
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

const handleSubmit = () => {
  if (!isLogin.value && password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  
  // TODO: Implement actual login/signup logic here
  console.log('Form submitted:', {
    mode: isLogin.value ? 'login' : 'signup',
    email: email.value,
    password: password.value
  })
}
</script>

<style scoped>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

.login-container {
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), 
              url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.login-card {
  background-color: #3e0054;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 0px 15px #E324BD;
  border-radius: 30px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: 'bpdots';
  font-size: 3rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-family: 'bitstream';
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'bitstream';
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #001655;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: 'bitstream';
  box-shadow: 0 0px 5px #E324BD;
}

.submit-btn:hover {
  background-color: #E324BD;
}

.toggle-text {
  text-align: center;
  margin-top: 1rem;
  font-family: 'bitstream';
}

a {
  color: #E324BD;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
