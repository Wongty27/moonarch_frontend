<template>
    <div>
      <!-- Your item description content here -->
      <v-btn
        icon
        color="black"
        @click="toggleChatbox"
        class="floating-button animated-border-box"
      >
      <svg-icon type="mdi" :path="path"></svg-icon>
    </v-btn>
  
      <v-dialog
        v-model="showChatbox"
        max-width="400px"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-card-title class="headline">
            Explore Other Items
            <v-spacer></v-spacer>
            <v-btn style="left: 80%;" icon @click="toggleChatbox">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="userInput"
                    label="Eg. Give me a cheaper GPU to play retro games"
                    outlined
                    dense
                    @keyup.enter="sendMessage"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="chat-messages">
                  <div v-for="(message, index) in chatMessages" :key="index" class="message">
                    {{ message }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="sendMessage">
                <v-icon>mdi-send</v-icon>
            </v-btn>
            <v-btn color="primary" text @click="">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  // magic wand icon
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiAutoFix } from '@mdi/js';

  export default {
    data() {
      return {
        showChatbox: false,
        userInput: '',
        chatMessages: [],
        path: mdiAutoFix,
      }
    },
    methods: {
        
      toggleChatbox() {
        this.showChatbox = !this.showChatbox
      },
      sendMessage() {
        if (this.userInput.trim() !== '') {
          this.chatMessages.push(`You: ${this.userInput}`)
          // Here you would typically send the message to your backend or process it
          // For this example, we'll just echo the message back
          setTimeout(() => {
            this.chatMessages.push(`Assistant: You asked about "${this.userInput}". Here's some information...`)
          }, 1000)
          this.userInput = ''
        }
      },
    },
    name: "my-component",
    components: {
    SvgIcon
    },
  }
  </script>
  
  <style scoped>
  .floating-button {
    position: relative;
    left: 90%;
  }
  
  .chat-messages {
    max-height: 300px;
    overflow-y: auto;
  }
  
  .message {
    margin-bottom: 10px;
  }
  </style>