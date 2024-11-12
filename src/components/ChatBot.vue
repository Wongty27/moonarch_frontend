<template>
  <div class="chatbot-container">
    <!-- Simplified chat button without draggable wrapper -->
    <v-btn
      class="chat-button"
      icon
      elevation="5"
      color="#E324BD"
      @click="toggleChat"
    >
      <v-icon color="white" size="30">
        {{ isOpen ? 'mdi-close' : 'mdi-message' }}
      </v-icon>
    </v-btn>

    <!-- Chat Window -->
    <v-dialog
      v-model="isOpen"
      max-width="400"
      persistent
      transition="dialog-bottom-transition"
      class="chat-dialog"
    >
      <v-card class="chat-window">
        <!-- Chat Header -->
        <v-card-title class="chat-header">
          <span class="header-text">MoonArch Assistant</span>
          <v-spacer></v-spacer>
          <v-btn icon class="close-button" @click="toggleChat">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <!-- Chat Messages -->
        <v-card-text class="chat-messages" ref="messageContainer">
          <div v-for="(message, index) in messages" :key="index" 
               :class="['message', message.sender]">
            <div class="message-content">
              {{ message.text }}
            </div>
          </div>
        </v-card-text>

        <!-- Chat Input -->
        <v-card-actions class="chat-input">
          <v-text-field
            v-model="userInput"
            placeholder="Type a message..."
            @keyup.enter="sendMessage"
            dense
            outlined
            hide-details
          >
            <template #append>
              <v-btn
                icon
                small
                @click="sendMessage"
                :disabled="!userInput.trim()"
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

// State
const isOpen = ref(false)
const userInput = ref('')
const messageContainer = ref<HTMLElement | null>(null)

const messages = ref([
  {
    text: 'Hi! I\'m MoonArch Assistant. How can I help you today?',
    sender: 'bot'
  }
])

// Methods
const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const getBotResponse = async (userMessage: string) => {
  // Implement your chatbot logic here
  return `I received your message: "${userMessage}". This is a demo response.`
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  // Add user message
  messages.value.push({
    text: userInput.value,
    sender: 'user'
  })

  // Store user input and clear it
  const userMessageText = userInput.value
  userInput.value = ''

  // Simulate bot thinking
  setTimeout(async () => {
    // Add bot response
    messages.value.push({
      text: await getBotResponse(userMessageText),
      sender: 'bot'
    })
    
    // Scroll to bottom
    await nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight
      }
    })
  }, 1000)
}

// Add window resize handler to maintain position
const updatePosition = () => {
  // Implement your resize logic here
}

// Add resize listener
onMounted(() => {
  window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePosition)
})
</script>

<style scoped>
@import url('../assets/BitStreamFont/stylesheet.css');
@import url('../assets/BPdotsFont/stylesheet.css');

.chatbot-container {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  font-family: 'bitstream';
}

.chat-button {
  position: fixed !important;
  bottom: 80px !important;
  right: 20px !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 30px !important;
  pointer-events: auto !important;
  z-index: 9999 !important;
  background-color: #E324BD !important;
}

.chat-dialog {
  pointer-events: auto;
}

.chat-window {
  display: flex;
  flex-direction: column;
  height: 500px;
  background: #000033;
}

.chat-header {
  background: #E324BD;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
}

.header-text {
  font-family: 'bitstream';
  font-size: 1.2em;
}

.close-button {
  position: absolute !important;
  right: 5px !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #000033;
  font-family: 'bitstream';
}

.message {
  max-width: 80%;
  margin: 4px 0;
}

.message.user {
  align-self: flex-end;
}

.message.bot {
  align-self: flex-start;
}

.message-content {
  padding: 10px 15px;
  border-radius: 15px;
  background: #E324BD;
  color: white;
}

.user .message-content {
  background: #4A4A4A;
}

.chat-input {
  padding: 10px;
  background: #000033;
}

/* Custom scrollbar */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #000033;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #E324BD;
  border-radius: 3px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .chat-button {
    bottom: 70px !important;
    right: 10px !important;
  }
  
  .chat-window {
    height: 100vh;
    max-height: 100vh;
  }
}
</style>
