<template>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        image = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif"
        color="#3e0054"
        app
        width="500"
        rounded
        class="drawer"
        floating
      >
        <v-card
          color="#3e0054"
          dense
          dark
          align="center"
        >
          <p align="center">  Choose Your Parts  </p>
        </v-card>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row 
              align="center"
              no-gutters
              style="height: 100px;"
              class = "row"
              >
              <v-col cols="6" md="6">
                <h5>{{ item.name }}</h5>
              </v-col>

              <v-row 
                align="center"
                no-gutters
                class="ml-5 mr-0"
                style="height: 40px;"
              >
                <v-col  cols="1" md="2">
                  <v-btn color="#ab3131" max-height="25px" max-width="25px" icon @click="decrementQuantity(index)">
                    <v-icon size="x-small">mdi-minus</v-icon>
                  </v-btn>
                  
                </v-col>
                  
                <v-col cols="3" md="2.5">
                  <v-text-field 
                    bg-color="purple"
                    v-model.number="item.quantity"
                    :rules="[v => v > 0 || '>0']"
                    :error="hasError"
                    :error-messages="errorMessages"
                    type="number"
                    hide-details
                    @blur="updateQuantity(index)"
                    hide-spin-buttons
                    max-width="50"
                    variant="outlined"
                    density="compact"
                  ></v-text-field>
                </v-col>

                <v-col cols="1" md="2">
                  <v-btn color="#639754" max-height="25px" max-width="25px" icon @click="incrementQuantity(index)">
                    <v-icon size="x-small">mdi-plus</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3" md="2">
                  <h5>RM{{ calculateSubtotal(item,index) }}</h5>
                </v-col>

              </v-row>
            </v-row>
            <v-divider></v-divider>
          </v-list-item>
          <v-list-item>
            <v-btn color="#001655" @click="addItem">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-list-item-title>New Item</v-list-item-title>
          </v-list-item>"
          <v-card  color="#001655">
            <template v-slot:title>
                <v-row>
                  <v-col align="right">
                    <h1>Total:</h1>
                  </v-col>
                  <v-col align="center">
                    <h1>{{calculateTotal().toFixed(2)}}</h1>
                  </v-col>
                </v-row>
            </template>
            <template v-slot:subtitle>
                <v-row>
                  <v-col col="7" md="7" align="right">
                    <v-btn color="#001655" @click="navigateToCheckout">
                      Buy Now
                    </v-btn>
                  </v-col>
                  <v-col align = "left">
                    <v-btn color="#001655" @click="navigateToCart">
                      Add to cart
                    </v-btn>
                  </v-col>
                </v-row>
              </template>
          </v-card>
        </v-list>

      </v-navigation-drawer>

      <v-navigation-drawer 
        width = "50"
        image = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif"
        elevation = "23"
        class="drawer"
        floating
        >
        <div class="drawer-content">
          <v-row style="height: 80px;">
            <v-spacer></v-spacer>  
          </v-row>
          <v-btn
            @click="drawer = !drawer"
            min-height="400"
            variant="plain"
            top
            stacked
            block
          >
            <v-icon v-if="drawer" size="x-large">
              mdi-chevron-left-circle
            </v-icon>
            <v-icon v-if="!drawer" size="x-large">
              mdi-chevron-right-circle
            </v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>
      <v-main>
        <div class="container">
          <div id="three-canvas"></div>
          <div class="details-panel">
            <div v-if="selectedObject">
              <h2>{{ selectedObject.name || 'Selected Object' }}</h2>
              <p><b>ID:</b> {{ selectedObject.uuid }}</p>
              <p><b>Type:</b> {{ selectedObject.type }}</p>
              <!-- Add more details as needed -->
            </div>
            <div v-else>
              <h2>Click on parts of the 3D model</h2>
            </div>
          </div>
        </div>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        drawer: true,
      };
    },
    methods: {
      calculateTotal() {
        let total = 0;
          for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].quantity > 0 && this.items[i].quantity < 100 ){
              total += this.items[i].quantity * this.items[i].unitPrice;
            }
          }
        
        return total;
      },
      calculateSubtotal(item) {
        let subTotal = 0;
        if (item.quantity > 0 && item.quantity <= 99){
          subTotal = (item.unitPrice * item.quantity).toFixed(2);
          return subTotal;
        } else{
        }
        
      },
      updateError(message) {
        this.hasError = true;
        this.errorMessages = [message]; // Clear previous errors and add the new one
        return message; // Return the message to trigger the error state
      },
      addItem() {
        const newItem = { name: "New Item vfvdfvvdfvfdvfdvfvvdvdfvfdvfdvfdvdfvdf cdscsdcsc csdcs cdscs cc sdc", quantity: 1, unitPrice: 20.20 };
        this.items.push(newItem);
      },
      incrementQuantity(index) {
        if (this.items[index].quantity >= 99){
          this.items[index].quantity = 99;
        } else {
        this.items[index].quantity++;
        }
      },
      decrementQuantity(index) {
        if (this.items[index].quantity > 1) {
          this.items[index].quantity--;
        } else{
          this.items.splice(index, 1);
        }
      },
      updateQuantity(index) {
        // Ensure quantity is at least 1
        if (this.items[index].quantity < 1) {
          this.items[index].quantity = 1;
        }
        else if (this.items[index].quantity > 99){
          this.items[index].quantity = 99;
        }
      },
      navigateToCheckout() {
      // Replace this with your actual checkout logic
      // You can use router.push() to navigate to a checkout page
      // and pass the 'items' data as a query parameter or in the state
        console.log("Navigating to checkout with items:", this.items);
      // Example using router.push()
      // this.$router.push({ path: '/checkout', query: { items: this.items } });
    },
    navigateToCart(){

    }
    },
  };
</script>


<style>
.drawer {
  opacity: 0.5; /* Adjust the opacity value as needed */
}
.drawer2 {
  opacity: 0.7; /* Adjust the opacity value as needed */
}
.drawer-content {
  opacity: 1; /* Ensure content opacity is 1 (fully opaque) */
}
.v-text-field input {
    font-size: 0.8em;
  }
</style>
