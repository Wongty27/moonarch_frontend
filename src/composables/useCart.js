import { ref } from 'vue';

// Create a ref to hold cart items
const cartItems = ref([]);

export const useCart = () => {
  const addToCart = (item) => {
    console.log('Adding item to cart:', item);
    const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.value.push({ 
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        description: item.description,
        quantity: 1 
      });
    }
    console.log('Current cart items:', cartItems.value);
  };

  const removeItem = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
  };

  const updateQuantity = (itemId, quantity) => {
    const item = cartItems.value.find(item => item.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  };

  return {
    cartItems,
    addToCart,
    removeItem,
    updateQuantity,
  };
};