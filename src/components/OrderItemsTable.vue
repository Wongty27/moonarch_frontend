<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    hover
    density="compact"
  >
    <template v-slot:item.unit_price="{ item }">
      ${{ item.price.toFixed(2) }}
    </template>
    <template v-slot:item.quantity="{ item }">
      x{{ item.quantity }}
    </template>
    <template v-slot:item.total_price="{ item }">
      ${{ (item.price * item.quantity).toFixed(2) }}
    </template>
    
    <template v-slot:bottom>
      <div class="d-flex pa-4">
        <div style="flex: 1;" class="text-h6"> Total: </div>
        <div style="flex: 1;"></div>
        <div class="text-h6 text-align-left mr-16">
          x{{ calculateTotalQuantity(items) }}
        </div>
        <div class="text-h6 text-right">
          ${{ calculateTotal(items).toFixed(2) }}
        </div>
      </div>
    </template>
  </v-data-table>
</template>

<script setup>
import { defineProps } from 'vue'

const headers = [
  {
    title: 'Product Name',
    key: 'product_name',
    align: 'start',
  },
  {
    title: 'Category',
    key: 'category',
    align: 'start',
  },
  {
    title: 'Unit Price',
    key: 'unit_price',
    align: 'end',
  },
  {
    title: 'Quantity',
    key: 'quantity',
    align: 'end',
  },
  {
    title: 'Total Price',
    key: 'total_price',
    align: 'end',
  },
]

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

const calculateTotalQuantity = (items) => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}
</script>

<style scoped>
.v-data-table {
  margin: 16px 0;
}
</style>