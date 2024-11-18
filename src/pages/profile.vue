<template>
  <v-card class="ma-15 border-primary">
    <v-toolbar color="primary" title="User Profile" class="text-center mb-5"></v-toolbar>

    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        color="primary"
        direction="vertical"
        class="my-6"
      >
        <v-tab prepend-icon="mdi-account" text="User Information" value="info"></v-tab>
        <v-tab prepend-icon="mdi-history" text="Order History" value="orders"></v-tab>
      </v-tabs>

      <v-window 
        v-model="tab" 
        class="flex-grow-1"
        transition="slide-x-transition"
        reverse-transition="slide-x-reverse-transition"
      >
        <!-- User Information Tab -->
        <v-window-item value="info">
          <ProfileForm 
            :isProfilePage="true"
            v-model:showSuccessAlert="showSuccessAlert"
            @showPasswordModal="showPasswordModal = true"
          />
        </v-window-item>

        <!-- Order History Tab -->
        <v-window-item value="orders">
          <v-alert
            v-if="showRatingSuccessAlert"
            type="success"
            class="mt-4"
            closable
            @click:close="showRatingSuccessAlert = false"
          >
            Rating submitted successfully!
          </v-alert>

          <v-card flat>
            <v-card-text>
              <div v-if="ordersInfo.length">
                <v-expansion-panels>
                  <v-expansion-panel
                    v-for="order in ordersInfo"
                    :key="order.order_id"
                  >
                    <v-expansion-panel-title>
                      <v-row align="center" no-gutters>
                        <v-col cols="6">
                          <span>Order #{{ order.order_id }}</span>
                        </v-col>
                        
                        <v-col cols="2">
                          <span>{{ formatDate(order.order_time) }}</span>
                        </v-col>
                        
                        <v-col cols="2">
                          <v-chip
                            :color="getStatusColor(order.order_status)"
                            text-color="white"
                          >
                            {{ order.order_status }}
                          </v-chip>
                        </v-col>
                        
                        <v-col cols="2">
                          <v-btn
                            :color="order.feedback ? 'success' : 'primary'"
                            v-if="order.order_status === 'Completed'" 
                            @click.stop="openRatingDialog(order)"
                            size="small"
                          >
                            {{ order.feedback ? 'View Rating' : 'Rate Order' }}
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                      <OrderItemsTable v-if="order.items && order.items.length" :items="order.items" />
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              <v-alert
                v-else
                type="info"
                text="No orders found"
              ></v-alert>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>

      <!-- Add Rating Dialog -->
    <v-dialog v-model="showRatingDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-center ma-3">{{ currentOrder?.feedback ? 'Your Rating' : 'Rate Your Order' }}</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submitRating" v-if="!currentOrder?.feedback">
            <div class="d-flex align-center mb-4 justify-center">
              <span class="mr-4">Rating:</span>
              <v-rating
                v-model="ratingInfo.rating"
                color="warning"
                hover
                :readonly="!!currentOrder?.feedback"
              ></v-rating>
            </div>

            <v-select
              v-model="ratingInfo.platform"
              :items="platforms"
              label="How did you hear about us?"
              :readonly="!!currentOrder?.feedback"
              required
            ></v-select>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" type="button" @click="showRatingDialog = false">Cancel</v-btn>
              <v-btn 
                color="primary" 
                :disabled="!ratingInfo.rating || !ratingInfo.platform"
                type="submit"
              >
                Submit Rating
              </v-btn>
            </v-card-actions>
          </v-form>

          <!-- View only mode -->
          <div v-else>
            <div class="d-flex align-center mb-4 justify-space-around">
              <span class="mr-4">Your Rating:</span>
              <v-rating
                v-model="currentOrder.feedback.rating"
                color="warning"
                readonly
              ></v-rating>
            </div>

            <div class="d-flex align-center justify-space-around">
              <span class="mr-4">Platform:</span>
              <v-select
                v-model="currentOrder.feedback.platform"
                :items="platforms"
                readonly
                variant="outlined"
                density="compact"
                hide-details
                class="max-width-200" 
              ></v-select>
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="showRatingDialog = false">Close</v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>


<script setup>
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useUserProfileStore } from '@/stores/profile'
  import OrderItemsTable from '@/components/OrderItemsTable.vue'
  import ProfileForm from '@/components/ProfileForm.vue'

  const platforms = [
    'Facebook',
    'Youtube',
    'Twitter',
    'Instagram',
    'Tiktok'
  ]

  const userProfileStore = useUserProfileStore();
  const { ordersInfo, ratingInfo } = storeToRefs(userProfileStore);
  const tab = ref('info')

  //Feedback dialog 
  const showRatingDialog = ref(false)
  const currentOrder = ref(null)
  const showRatingSuccessAlert = ref(false)

  const openRatingDialog = async (order) => {
    currentOrder.value = order
    showRatingDialog.value = true
    
    if (!order.feedback) {
      // Reset rating data for new rating
      ratingInfo.value = {
        rating: 0,
        platform: ''
      }
    }
  }

  const submitRating = async () => {
    try {
      await userProfileStore.submitOrderRating(currentOrder.value.order_id, ratingInfo.value)
      await userProfileStore.fetchOrders()

      showRatingDialog.value = false
      showRatingSuccessAlert.value = true

      setTimeout(() => {
        showRatingSuccessAlert.value = false
      }, 3000)
    } catch (error) {
      console.error('Failed to submit rating:', error)
      }
    }

  // Functionality of page
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  const getStatusColor = (status) => {
    if (!status) return 'grey' 

    const colors = {
      'pending': 'warning',
      'processing': 'info',
      'completed': 'success',
      'cancelled': 'error'
    }
    return colors[status.toLowerCase()] || 'grey'
  }

  onMounted(async() => {
    await userProfileStore.fetchOrders()
  })

</script>

<style scoped>
  .v-window {
    height: 100%;
  }

  .max-width-200 {
    max-width: 200px;
  }
</style>