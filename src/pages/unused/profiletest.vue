<template>
    <div class="profile-container">
      <div class="profile-content">
        <!-- Vertical Tabs -->
        <div class="tabs">
          <button 
            :class="['tab-btn', { active: activeTab === 'account' }]"
            @click="activeTab = 'account'"
          >
            Account Information
          </button>
          <button 
            :class="['tab-btn', { active: activeTab === 'orders' }]"
            @click="activeTab = 'orders'"
          >
            Order History
          </button>
        </div>
  
        <!-- Tab Content -->
        <div class="tab-content">
          <!-- Account Information Tab -->
          <div v-if="activeTab === 'account'" class="account-info">
            <h1>Account Information</h1>
            <form @submit.prevent="updateProfile">
              <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="user.email" readonly>
              </div>
              <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model="user.fullName">
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" v-model="user.phone">
              </div>
              <div class="form-group">
                <label>Address</label>
                <textarea v-model="user.address" rows="3"></textarea>
              </div>
              <button type="submit" class="save-btn">Save Changes</button>
            </form>
          </div>
  
          <!-- Order History Tab -->
          <div v-if="activeTab === 'orders'" class="order-history">
            <h1>Order History</h1>
            <div v-if="orders.length === 0" class="no-orders">
              No orders found
            </div>
            <div v-else class="orders-list">
              <div v-for="order in orders" :key="order.id" class="order-card">
                <div class="order-header">
                  <span class="order-id">Order #{{ order.id }}</span>
                  <span class="order-date">{{ order.date }}</span>
                  <span :class="['order-status', order.status]">{{ order.status }}</span>
                </div>
                <div class="order-items">
                  <div v-for="item in order.items" :key="item.id" class="order-item">
                    <img :src="item.image" :alt="item.name">
                    <div class="item-details">
                      <h4>{{ item.name }}</h4>
                      <p>Quantity: {{ item.quantity }}</p>
                      <p>Price: ${{ item.price }}</p>
                    </div>
                  </div>
                </div>
                <div class="order-total">
                  Total: ${{ order.total }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const activeTab = ref('account')
  const user = ref({
    email: 'user@example.com',
    fullName: 'John Doe',
    phone: '',
    address: ''
  })
  
  const orders = ref([
    {
      id: '1001',
      date: '2024-01-15',
      status: 'delivered',
      total: 299.99,
      items: [
        {
          id: 1,
          name: 'Gaming Mouse',
          quantity: 1,
          price: 299.99,
          image: '/path-to-image.jpg'
        }
      ]
    }
    // Add more orders as needed
  ])
  
  const updateProfile = () => {
    // Implement profile update logic here
    console.log('Profile updated:', user.value)
  }
  
  onMounted(() => {
    // Fetch user data and orders
  })
  </script>
  
  <style scoped>
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');
  
  .profile-container {
    min-height: 92vh;
    padding: 2rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), 
                url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  
  .profile-content {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background: #3e0054;
    padding: 2rem;
    border-radius: 30px;
    box-shadow: 0px 0px 15px #E324BD;
    backdrop-filter: blur(5px);
  }
  
  .tabs {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'bitstream';
  }
  
  .tab-btn {
    padding: 1rem;
    text-align: left;
    background: none;
    border: none;
    border-left: 3px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
    color: #ffffff;
    font-size: 1.2rem;
  }
  
  .tab-btn.active {
    border-left-color: #E324BD;
    background: rgba(76, 175, 80, 0.1);
    color: #E324BD;
  }
  
  .tab-content {
    flex: 1;
    padding: 0 1rem;
    font-family: 'bitstream';
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.8rem;
    color: #ffffff;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'bitstream';
  }
  
  .save-btn {
    background: #001655;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
    box-shadow: 0 0px 5px #E324BD;
  }
  
  .save-btn:hover {
    background: #E324BD;
  }
  
  .order-card {
    border: 1px solid #ffffff;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  
  .order-status {
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    font-size: 0.875rem;
  }
  
  .order-status.delivered {
    background: #e8f5e9;
    color: #2e7d32;
  }
  
  .order-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .order-item {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
  
  .order-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .order-total {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
    text-align: right;
    font-weight: bold;
  }
  
  .no-orders {
    text-align: center;
    padding: 2rem;
    color: #666;
  }
  </style>