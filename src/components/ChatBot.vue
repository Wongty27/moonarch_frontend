<template>
  <div class="chatbot-container">
    <!-- Fixed chat button -->
    <v-btn
      class="chat-button"
      icon="mdi-message"
      size="x-large"
      elevation="2"
      color="transparent"
      @click="toggleChat"
    >
      <v-icon color="#E324BD" size="30">
        {{ isOpen ? 'mdi-close' : 'mdi-message' }}
      </v-icon>
    </v-btn>

    <!-- Chat Window -->
    <transition name="slide">
      <div v-if="isOpen" class="side-chat">
        <v-card class="chat-window">
          <!-- Chat Header - Removed close button -->
          <v-card-title class="chat-header d-flex align-center">
            <span class="header-text">MoonArch Assistant</span>
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
          <div class="chat-input-container">
            <v-text-field
              v-model="userInput"
              placeholder="Type a message..."
              @keyup.enter="sendMessage"
              dense
              outlined
              hide-details
              class="input-field"
              bg-color="#000033"
            >
              <template #append>
                <v-btn
                  icon
                  small
                  @click="sendMessage"
                  :disabled="!userInput.trim()"
                  color="transparent"
                >
                  <v-icon color="#E324BD" size="20">mdi-send</v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </div>
        </v-card>
      </div>
    </transition>
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
  z-index: 9999;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.chat-button {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px !important;
  height: 50px !important;
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.9) !important;
  z-index: 9997;
}

.side-chat {
  position: fixed;
  bottom: 90px;
  right: 20px;
  height: 450px;
  width: 300px;
  pointer-events: auto;
  z-index: 9998;
  box-shadow: 0 0 20px rgba(227, 36, 189, 0.3);
}

.chat-window {
  height: 100%;
  margin: 0;
  border-radius: 12px !important;
  overflow: hidden;
}

/* Animation for side chat */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .chat-button {
    bottom: 40px;
    right: 10px;
    width: 40px !important;
    height: 40px !important;
  }

  .side-chat {
    width: 280px;
    height: 400px;
    bottom: 100px;
    right: 10px;
  }
}

.chat-header {
  background: #E324BD;
  color: white;
  padding: 12px 16px !important;
  min-height: unset !important;
}

.header-text {
  font-family: 'bitstream';
  font-size: 1.1em;
  line-height: 1;
}

.chat-input-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: #000033;
  border-top: 1px solid rgba(227, 36, 189, 0.2);
}

.input-field {
  margin: 0;
  background-color: #000033;
}

.input-field :deep(.v-field__input) {
  color: white !important;
  min-height: 36px !important;
  padding: 0 8px !important;
  font-size: 0.9rem;
}

.input-field :deep(.v-field__outline) {
  color: #E324BD !important;
}

.chat-messages {
  height: calc(100% - 110px);
  padding: 16px;
  overflow-y: auto;
  margin-bottom: 60px; /* Make space for input field */
}

/* Ensure the chat window has proper layout */
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #000033;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .chat-input-container {
    padding: 8px;
  }
  
  .input-field {
    font-size: 14px;
  }
}

.message-content {
  padding: 8px 12px;
  border-radius: 15px;
  margin: 4px 0;
  max-width: 85%;
  word-break: break-word;
}

.user .message-content {
  background: #4A4A4A;
  margin-left: auto;
  color: white;
}

.bot .message-content {
  background: #E324BD;
  margin-right: auto;
  color: white;
}
</style>
