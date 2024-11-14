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
            <p class="text-subtitle-1 text-white text-center">Part Information</p>
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
        <div class="text-h6 mb-4">{{ selectedPart.title }}</div>
        <v-img
          :src="selectedPart.image"
          height="200"
          cover
          class="rounded-lg mb-4"
        ></v-img>
        <p class="text-body-1 mb-4 description-text">{{ selectedPart.description }}</p>
        
        <v-btn
          color="#e324bd"
          block
          class="mb-4"
          @click="showProducts = true"
        >
          Show Products
        </v-btn>

        <v-btn
          :href="selectedPart.website"
          target="_blank"
          color="#e324bd"
          block
        >
          Learn More
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
            <p class="text-subtitle-1 text-white text-center">Choose Products</p>
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
          class="mb-4"
          variant="outlined"
        >
          <v-card-text>
            <div class="d-flex justify-space-between align-center">
              <div>
                <div class="text-body-1 font-weight-medium">{{ stock.stockName }}</div>
                <div class="text-subtitle-2">RM{{ stock.stockPrice }}</div>
                <div class="text-caption text-grey" v-if="getSavedQuantity(stock)">
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
              class="mt-2"
              size="small"
              block
              @click="addToCart(stock)"
            >
              Save to Cart
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
      <p class="text-subtitle-1 text-white text-center">Choose Your Parts</p>
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
              <div class="text-body-1 font-weight-medium">{{ item.name }}</div>
              <div class="text-caption text-grey">{{ item.model || 'T0ASB-2S' }}</div>
            </div>
            <div class="text-body-1">${{ item.unitPrice.toFixed(2) }}</div>
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
            <span class="text-subtitle-1 text-grey">Sub-Total</span>
            <div class="text-caption text-grey">{{ items.length }} items</div>
          </v-col>
          <v-col cols="6" class="text-right">
            <span class="text-h5">${{ calculateTotal().toFixed(2) }}</span>
          </v-col>
        </v-row>
        
        <v-btn 
          color="#e324bd" 
          block 
          class="mt-2"
          @click="navigateToCart"
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
      class="fill-height"
      @point-clicked="handlePointClick">
    </Canvas>
  </div>
</template>

<script>
import Canvas from '../components/Canvas.vue';
import { ref, reactive, watch } from 'vue'

export default {
name: 'Customise',
components: {
  Canvas
},
data() {
  return {
    drawer: false,
    infoDrawer: true,
    selectedPart: null,
    items: [],
    hasError: false,
    errorMessages: [],
    showProducts: false,
    stockQuantities: reactive({}),
    savedQuantities: reactive({}),
  };
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
      this.savedQuantities[key] = 0;
      this.items.splice(index, 1);
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
    // Add cart navigation logic
  },
  handlePointClick(pointData) {
    this.selectedPart = pointData;
    this.showProducts = false;
    this.infoDrawer = !!pointData;
    
    if (pointData) {
      pointData.stockList.forEach(stock => {
        const key = `${pointData.title}-${stock.stockName}`;
        this.stockQuantities[key] = 0;
      });
    }
  },
  incrementStockQuantity(stock) {
    const key = `${this.selectedPart.title}-${stock.stockName}`;
    if (!this.stockQuantities[key]) {
      this.stockQuantities[key] = 0;
    }
    this.stockQuantities[key]++;
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
    
    if (quantity > 0) {
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
          quantity: quantity
        });
        this.savedQuantities[key] = quantity;
      }
      
      this.stockQuantities[key] = 0;
    }
  },
  // Add method to handle direct quantity input in main drawer
  handleQuantityInput(index, event) {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      this.items[index].quantity = value;
      this.updateQuantity(index);
    }
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
  }
}
};
</script>

<style>
.left-sidebar {
background-color: #f5f5f5;
z-index: 3;
position: fixed !important;
left: 0 !important;
top: 0 !important;
height: 100vh !important;
border-right: 0px solid rgba(0, 0, 0, 0.12);
padding-top: 85px;
}

.main-drawer {
z-index: 4 !important;
background-color: white;
position: fixed !important;
top: 0 !important;
height: 100vh !important;
padding-top: 85px;
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
}

.drawer-open .fill-height,
.info-drawer-open .fill-height,
.drawer-open.info-drawer-open .fill-height {
transition: none; /* Remove transition */
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
.v-overlay {
  display: none !important;
}

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
</style>
