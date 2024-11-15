<template>
    <!-- Left sidebar with icons -->
    <v-navigation-drawer
      permanent
      width="50"
      class="left-sidebar"
    >
      <v-list nav>
        <v-list-item>
          <v-btn
            @click="drawer = !drawer"
            icon
            variant="text"
          >
            <v-icon>{{ drawer ? 'mdi-chevron-left' : 'mdi-chevron-right' }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
    <!-- Right info drawer -->
    <v-navigation-drawer
      v-model="infoDrawer"
      location="right"
      width="300"
      class="info-drawer"
      floating
      :scrim="false"
      persistent
    >
      <!-- Info Panel -->
      <div v-if="!showProducts">
        <v-card color="#3e0054" flat class="pa-4">
          <v-row no-gutters align="center">
            <v-col cols="10">
              <p class="text-subtitle-1 text-white text-center bitstream">What is this?</p>
            </v-col>
            <v-col cols="2" class="text-right">
              <v-btn
                icon="mdi-chevron-right"
                variant="text"
                color="white"
                @click="infoDrawer = false"
              ></v-btn>
            </v-col>
          </v-row>
        </v-card>
  
        <div v-if="selectedPart" class="pa-4">
          <div class="text-h6 mb-4 bitstream">{{ selectedPart.title }}</div>
          <v-img
            :src="selectedPart.image"
            height="200"
            cover
            class="rounded-lg mb-4"
          ></v-img>
          <p class="text-body-1 mb-4 description-text bitstream">{{ selectedPart.description }}</p>
          
          <v-btn
            color="#e324bd"
            block
            class="mb-4 bitstream"
            @click="showProducts = true"
          >
            Show Products
          </v-btn>
        </div>
        <!-- Add scroll space -->
        <div class="drawer-scroll-space"></div>
      </div>
  
      <!-- Choose Products Panel -->
      <div v-else>
        <v-card color="#3e0054" flat class="pa-4">
          <v-row no-gutters align="center">
            <v-col cols="2">
              <v-btn
                icon="mdi-arrow-left"
                variant="text"
                color="white"
                @click="showProducts = false"
              ></v-btn>
            </v-col>
            <v-col cols="8">
              <p class="text-subtitle-1 text-white text-center bitstream">Our Selection</p>
            </v-col>
            <v-col cols="2" class="text-right">
              <v-btn
                icon="mdi-chevron-right"
                variant="text"
                color="white"
                @click="infoDrawer = false"
              ></v-btn>
            </v-col>
          </v-row>
        </v-card>
  
        <div class="pa-4">
          <v-card
            v-for="(stock, index) in selectedPart.stockList"
            :key="index"
            class="mb-4 "
            variant="outlined"
          >
            <v-card-text>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="text-body-1 font-weight-medium bitstream">{{ stock.stockName }}</div>
                  <div class="text-subtitle-2 bitstream">RM{{ stock.stockPrice }}</div>
                  <div class="text-caption text-grey bitstream">Stock left: {{ stock.stockQuantity }}</div>
                  <div class="text-caption text-grey bitstream" v-if="getSavedQuantity(stock)">
                    In Cart: {{ getSavedQuantity(stock) }}
                  </div>
                </div>
                <div class="d-flex align-center">
                  <v-btn
                    color="#FFFFFF"
                    variant="text"
                    density="comfortable"
                    icon="mdi-minus"
                    size="small"
                    class="quantity-btn"
                    @click="decrementStockQuantity(stock)"
                    :disabled="!getStockQuantity(stock)"
                  ></v-btn>
                  <span class="mx-2">{{ getStockQuantity(stock) }}</span>
                  <v-btn
                    color="#FFFFFF"
                    variant="text"
                    density="comfortable"
                    icon="mdi-plus"
                    size="small"
                    class="quantity-btn"
                    @click="incrementStockQuantity(stock)"
                  ></v-btn>
                </div>
              </div>
              <v-btn
                v-if="getStockQuantity(stock) > 0"
                color="#e324bd"
                class="mt-2 bitstream"
                size="small"
                block
                @click="addToCart(stock)"
              >
                Add to Build
              </v-btn>
            </v-card-text>
          </v-card>
        </div>
        <!-- Add scroll space -->
        <div class="drawer-scroll-space"></div>
      </div>
    </v-navigation-drawer>
  
    <!-- Main expandable drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :width="300"
      class="main-drawer"
      :temporary="false"
      location="left"
      :style="{ left: '50px' }"
      :permanent="false"
      :visibility="drawer"
      :scrim="false"
      persistent
    >
      <v-card color="#3e0054" flat class="pa-4">
        <p class="text-subtitle-1 text-white text-center bitstream">Your Build</p>
      </v-card>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="px-4 py-2"
        >
          <div class="d-flex flex-column">
            <div class="d-flex justify-space-between align-center mb-2">
              <div>
                <div class="text-body-1 font-weight-medium bitstream">{{ item.name }}</div>
                <div class="text-caption text-grey bitstream">{{ item.model || 'T0ASB-2S' }}</div>
              </div>
              <div class="text-body-1 bitstream">RM{{ item.unitPrice.toFixed(2) }}</div>
            </div>
  
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-btn
                  color="#FFFFFF"
                  variant="text"
                  density="comfortable"
                  icon="mdi-minus"
                  size="small"
                  class="quantity-btn"
                  @click="decrementQuantity(index)"
                >
                </v-btn>
                
                <span class="mx-4 text-body-1">{{ item.quantity.toString().padStart(2, '0') }}</span>
                
                <v-btn
                  color="#FFFFFF"
                  variant="text"
                  density="comfortable"
                  icon="mdi-plus"
                  size="small"
                  class="quantity-btn"
                  @click="incrementQuantity(index)"
                >
                </v-btn>
              </div>
              <div class="text-body-1">RM{{ calculateSubtotal(item,index) }}</div>
            </div>
          </div>
          <v-divider class="mt-4"></v-divider>
        </v-list-item>
  
        <v-card color="#001655" class="pa-4">
          <v-row no-gutters align="center" class="mb-2">
            <v-col cols="6">
              <span class="text-subtitle-1 text-grey bitstream">Sub-Total</span>
              <div class="text-caption text-grey bitstream">{{ items.length }} items</div>
            </v-col>
            <v-col cols="6" class="text-right">
              <span class="text-h5 bitstream">RM{{ calculateTotal().toFixed(2) }}</span>
            </v-col>
          </v-row>
          
          <v-btn 
            color="#e324bd" 
            block 
            class="mt-2 bitstream"
            @click="navigateToCart"
            :disabled="items.length === 0"
          >
            Save Build to Cart
          </v-btn>
          <!-- Add scroll space -->
          <div class="drawer-scroll-space"></div>
        </v-card>
      </v-list>
    </v-navigation-drawer>
  
    <!-- Main content area -->
    <div :class="{ 
      'drawer-open': drawer,
      'info-drawer-open': infoDrawer 
    }" class="pa-0">
      <Canvas 
        :drawer="drawer" 
        :items="items"
        class="fill-height"
        @point-clicked="handlePointClick"
        @item-added="handleItemAdded"
      >
      </Canvas>
    </div>
  </template>
  
  <script>
  import Canvas from '@/components/ThreeCanvas.vue';
  import { ref, reactive, watch } from 'vue'
  import { useCart } from '@/composables/useCart';
  import { useRouter } from 'vue-router';
  
  export default {
  name: 'Customise',
  components: {
    Canvas
  },

  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      drawer: false,
      infoDrawer: false,
      selectedPart: null,
      items: [],
      hasError: false,
      errorMessages: [],
      showProducts: false,
      stockQuantities: reactive({}),
      savedQuantities: reactive({}),
    };
  },
  created() {
    // Load saved items when component is created
    const savedItems = localStorage.getItem('customBuildItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
      // Sync savedQuantities with items
      this.items.forEach(item => {
        const key = `${item.name}-${item.model}`;
        this.savedQuantities[key] = item.quantity;
      });
    }
  },

  methods: {
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].quantity > 0 && this.items[i].quantity < 100) {
          total += this.items[i].quantity * this.items[i].unitPrice;
        }
      }
      return total;
    },
    calculateSubtotal(item) {
      let subTotal = 0;
      if (item.quantity > 0 && item.quantity <= 99) {
        subTotal = (item.unitPrice * item.quantity).toFixed(2);
        return subTotal;
      }
    },
    updateError(message) {
      this.hasError = true;
      this.errorMessages = [message];
      return message;
    },
    addItem() {
      const newItem = { 
        name: "New Item vdvasvdafvvfdsvdfvdvsdvdf", 
        quantity: 1, 
        unitPrice: 20.20 
      };
      this.items.push(newItem);
    },
    incrementQuantity(index) {
      if (this.items[index].quantity >= 99) {
        this.items[index].quantity = 99;
      } else {
        this.items[index].quantity++;
        // Update savedQuantities when main drawer quantity changes
        const key = `${this.items[index].name}-${this.items[index].model}`;
        this.savedQuantities[key] = this.items[index].quantity;
      }
    },
    decrementQuantity(index) {
      if (this.items[index].quantity > 1) {
        this.items[index].quantity--;
        // Update savedQuantities when main drawer quantity changes
        const key = `${this.items[index].name}-${this.items[index].model}`;
        this.savedQuantities[key] = this.items[index].quantity;
      } else {
        // Remove item and its saved quantity
        const key = `${this.items[index].name}-${this.items[index].model}`;
        delete this.savedQuantities[key];
        this.items.splice(index, 1);
        
        // Update localStorage
        localStorage.setItem('customBuildItems', JSON.stringify(this.items));
      }
    },
    updateQuantity(index) {
      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1;
      }
      else if (this.items[index].quantity > 99) {
        this.items[index].quantity = 99;
      }
      // Update savedQuantities after quantity validation
      const key = `${this.items[index].name}-${this.items[index].model}`;
      this.savedQuantities[key] = this.items[index].quantity;
    },
    navigateToCart() {
    // Convert items to the format expected by the cart
      this.items.forEach(item => {
        const cartItem = {
          id: `${item.name}-${item.model}`, // Use existing item properties
          name: `${item.name} - ${item.model}`,
          price: item.unitPrice,
          quantity: item.quantity,
          imageUrl: item.image || 'default-image-url.jpg', // Use item's image directly
          description: item.description || '' // Use item's description directly
        };
        
        // Add to cart using the useCart composable
        const { addToCart } = useCart();
        addToCart(cartItem);
      });

      // Save current build to localStorage before navigation
      localStorage.setItem('customBuildItems', JSON.stringify(this.items));

      // Navigate to cart page
      this.router.push('/cart');
    },

    addToCart(stock) {
      if (!this.selectedPart) return; // Guard clause for when selectedPart is null
      
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      const quantity = this.stockQuantities[key];
      
      if (quantity > 0 && stock.stockQuantity >= quantity) {
        const existingItemIndex = this.items.findIndex(item => 
          item.name === this.selectedPart.title && 
          item.model === stock.stockName
        );

        if (existingItemIndex !== -1) {
          // Update quantity instead of adding
          this.items[existingItemIndex].quantity = quantity;
          this.savedQuantities[key] = quantity;
        } else {
          this.items.push({
            name: this.selectedPart.title,
            model: stock.stockName,
            unitPrice: parseFloat(stock.stockPrice),
            quantity: quantity,
            image: this.selectedPart.image,
            description: this.selectedPart.description // Save description with item
          });
          this.savedQuantities[key] = quantity;
        }
        
        this.drawer = true;
        stock.stockQuantity -= quantity;
        this.stockQuantities[key] = 0;
      }
      
      localStorage.setItem('customBuildItems', JSON.stringify(this.items));
    },

    handlePointClick(pointData) {
      this.selectedPart = pointData;
      this.showProducts = false;
      this.infoDrawer = !!pointData;
    },
    incrementStockQuantity(stock) {
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      if (!this.stockQuantities[key]) {
        this.stockQuantities[key] = 0;
      }
      if (this.stockQuantities[key] < stock.stockQuantity) {
        this.stockQuantities[key]++;
      }
    },
    decrementStockQuantity(stock) {
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      if (this.stockQuantities[key] > 0) {
        this.stockQuantities[key]--;
      }
    },
    getStockQuantity(stock) {
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      return this.stockQuantities[key] || 0;
    },
    getSavedQuantity(stock) {
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      return this.savedQuantities[key] || 0;
    },
    addToCart(stock) {
      const key = `${this.selectedPart.title}-${stock.stockName}`;
      const quantity = this.stockQuantities[key];
      
      if (quantity > 0 && stock.stockQuantity >= quantity) {
        const existingItemIndex = this.items.findIndex(item => 
          item.name === this.selectedPart.title && 
          item.model === stock.stockName
        );
  
        if (existingItemIndex !== -1) {
          this.items[existingItemIndex].quantity += quantity;
          this.savedQuantities[key] = this.items[existingItemIndex].quantity;
        } else {
          this.items.push({
            name: this.selectedPart.title,
            model: stock.stockName,
            unitPrice: parseFloat(stock.stockPrice),
            quantity: quantity,
            image: this.selectedPart.image
          });
          this.savedQuantities[key] = quantity;
        }
        
        // Open left drawer when item is added
        this.drawer = true;
        
        // Deduct from stock quantity
        stock.stockQuantity -= quantity;
        this.stockQuantities[key] = 0;
      }
      
      // After adding/updating items, save to localStorage
      localStorage.setItem('customBuildItems', JSON.stringify(this.items));
    },
    // Add method to handle direct quantity input in main drawer
    handleQuantityInput(index, event) {
      const value = parseInt(event.target.value);
      if (!isNaN(value)) {
        this.items[index].quantity = value;
        this.updateQuantity(index);
      }
    },
    handleItemAdded() {
      this.drawer = true;
    },
    // Add method to clear saved items (optional)
    clearSavedBuild() {
      localStorage.removeItem('customBuildItems');
      this.items = [];
    }
  },
  watch: {
    drawer(newVal) {
      // Queue multiple resize events to ensure proper updating
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
        // Queue additional resize checks
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
    },
    infoDrawer(newVal) {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
        // Queue additional resize checks
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
    },
    items: {
      handler(newItems) {
        localStorage.setItem('customBuildItems', JSON.stringify(newItems));
      },
      deep: true
    }
  }
  };
  </script>
  
  <style >
  @import url('../assets/BitStreamFont/stylesheet.css');
  @import url('../assets/BPdotsFont/stylesheet.css');

  .left-sidebar {
  background-color: #f5f5f5;
  z-index: 3;
  position: fixed !important;
  left: 0 !important;
  top: 0 !important;
  height: 100vh !important;
  border-right: 0px solid rgba(0, 0, 0, 0.12);
  padding-top: 85px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1) !important;
  border-right: none !important;
  }
  
  .main-drawer {
  z-index: 4 !important;
  background-color: white;
  position: fixed !important;
  top: 0 !important;
  height: 100vh !important;
  padding-top: 85px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1) !important;
  border-left: none !important;
  }
  
  .fill-height {
  height: 100vh;
  width: calc(100vw - 50px);
  position: relative;
  overflow: visible;
  padding-top: 85px;
  min-height: 100vh;
  margin-left: 50px;
  transition: none; /* Remove transition */
  z-index: 1;
  background-color: #f8f9fa;
  transition: width 0.2s ease-in-out, margin 0.2s ease-in-out !important;
  }
  
  .drawer-open .fill-height,
  .info-drawer-open .fill-height,
  .drawer-open.info-drawer-open .fill-height {
  transition: width 0.2s ease-in-out, margin 0.2s ease-in-out !important;
  }
  
  .v-navigation-drawer {
  transition: none !important;
  }
  
  .v-text-field input {
  font-size: 0.8em;
  }
  
  .v-list-item {
  padding: 12px;
  }
  
  .row {
  margin: 0;
  }
  
  .quantity-btn {
  border: 1px solid rgba(0, 0, 0, 0.12) !important;
  height: 32px !important;
  width: 32px !important;
  }
  
  canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
  margin: 0 !important;
  z-index: 1;
  }
  
  .info-drawer {
  z-index: 4 !important;
  background-color: white;
  position: fixed !important;
  top: 0 !important;
  height: 100vh !important;
  padding-top: 85px;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1) !important;
  border-left: none !important;
  }
  
  .drawer-open.info-drawer-open .fill-height {
  width: calc(100vw - 650px);
  margin-left: 350px;
  margin-right: 300px;
  }
  
  .info-drawer-open .fill-height {
  width: calc(100vw - 350px);
  margin-right: 300px;
  }
  
  /* Keep all existing styles and add/modify these */
  
  /* Ensure proper stacking context */
  .v-main {
    position: relative;
    z-index: 1;
  }
  
  /* Update z-index hierarchy */
  .left-sidebar {
    z-index: 1000 !important;
  }
  
  .main-drawer {
    z-index: 999 !important;
  }
  
  .info-drawer {
    z-index: 999 !important;
  }
  
  /* Add pointer-events handling */
  .fill-height {
    pointer-events: auto !important;
    z-index: 1;
  }
  
  /* Ensure canvas and its container can receive events */
  canvas {
    pointer-events: auto !important;
  }
  
  /* Add styles for drawer content */
  .v-navigation-drawer__content {
    pointer-events: auto !important;
  }
  
  /* Remove any overlay that might block interactions */
  /* .v-overlay {
    display: none !important;
  } */
  
  .v-navigation-drawer__scrim {
    display: none !important;
  }
  
  /* Add styles for quantity input */
  :deep(.v-text-field) {
    .v-field__input {
      text-align: center;
      padding: 0;
    }
    .v-field__outline {
      --v-field-border-width: 1px !important;
    }
  }
  
  /* Scene container should exactly match parent size */
  .scene-container {
    position: relative;
    width: 100% !important; /* Force full width */
    height: 100%;
    overflow: hidden;
    left: 0 !important; /* Prevent any automatic margins */
    margin: 0 !important; /* Remove any margins */
  }
  
  .description-text {
    white-space: pre-line;
  }
  
  /* Update transition duration to match the setTimeout delay */
  .fill-height {
    height: 100vh;
    width: calc(100vw - 50px);
    position: relative;
    overflow: visible;
    padding-top: 85px;
    min-height: 100vh;
    margin-left: 50px;
    transition: none; /* Remove transition */
    z-index: 1;
  }
  
  /* Make sure all drawer-related transitions use the same duration */
  .drawer-open .fill-height,
  .info-drawer-open .fill-height,
  .drawer-open.info-drawer-open .fill-height {
    transition: none; /* Remove transition */
  }
  
  /* Add new styles for the points container */
  .points-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  
  .point {
    position: absolute;
    transform-origin: center;
    pointer-events: auto;
    z-index: 11;
    cursor: pointer;
  }
  
  /* Add this to your styles */
  .drawer-scroll-space {
    height: 100px; /* Adjust this value to control scroll space */
    flex-shrink: 0; /* Prevent space from shrinking */
  }
  
  /* Update drawer content styles */
  .v-navigation-drawer__content {
    height: 100%;
    overflow-y: auto
  }
  
  /* Add these styles to your existing <style> section */
  
  /* Padding for Choose Your Parts header card */
  .main-drawer .v-card {
    padding: 24px 20px !important;
  }
  
  /* Padding for items in the main drawer */
  .main-drawer .v-list-item {
    padding: 16px 20px !important;
  }
  
  /* Padding for Sub-Total card */
  .main-drawer .v-card[color="#001655"] {
    padding: 24px 20px !important;
    margin-top: 16px;
  }
  
  /* Padding for Part Information header and content */
  .info-drawer .v-card {
    padding: 24px 20px !important;
  }
  
  .info-drawer .pa-4 {
    padding: 24px 20px !important;
  }
  
  /* Padding for product cards in info drawer */
  .info-drawer .v-card-text {
    padding: 16px 20px !important;
  }
  
  /* Adjust list container padding */
  .v-list {
    padding: 0 !important;
  }
  
  /* Remove any conflicting padding classes */
  .pa-4 {
    padding: 24px 20px !important;
  }
  
  /* Add subtle border radius to cards */
  .v-card {
    border-radius: 8px !important;
    overflow: hidden;
  }
  
  /* Add subtle border radius to buttons */
  .v-btn {
    border-radius: 6px !important;
  }
  
  /* Add subtle hover effect to interactive elements */
  .v-btn:hover {
    transform: translateY(-1px);
    transition: transform 0.2s ease;
  }
  
  /* Add smooth scrolling to drawers */
  .v-navigation-drawer__content {
    scroll-behavior: smooth;
  }
  </style>