import { ref, watch } from 'vue';

// Create a ref to hold cart items and initialize from localStorage
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems') || '[]'));

export const useCart = () => {
  // Watch for changes to cart items and update localStorage
  watch(
    cartItems,
    (newItems) => {
      localStorage.setItem('cartItems', JSON.stringify(newItems));
    },
    { deep: true }
  );

  const addToCart = (item) => {
    console.log('Adding item to cart:', item);
    const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity instead of adding to it
      existingItem.quantity = item.quantity;
    } else {
      cartItems.value.push({ 
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        description: item.description,
        quantity: item.quantity || 1
      });
    }
    
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    console.log('Current cart items:', cartItems.value);
  };

  const removeItem = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
    // Also remove from customBuildItems in localStorage
    const customBuildItems = JSON.parse(localStorage.getItem('customBuildItems') || '[]');
    const updatedBuildItems = customBuildItems.filter(item => {
      const buildItemId = `${item.name}-${item.model}`;
      return buildItemId !== itemId;
    });
    localStorage.setItem('customBuildItems', JSON.stringify(updatedBuildItems));
  };

  const updateQuantity = (itemId, change) => {
    const item = cartItems.value.find(item => item.id === itemId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeItem(itemId);
        
        // Update savedQuantities in customise page
        const customBuildItems = JSON.parse(localStorage.getItem('customBuildItems') || '[]');
        const updatedBuildItems = customBuildItems.filter(buildItem => {
          const buildItemId = `${buildItem.name}-${buildItem.model}`;
          return buildItemId !== itemId;
        });
        localStorage.setItem('customBuildItems', JSON.stringify(updatedBuildItems));
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    }
  };
  const clearCart = () => {
    cartItems.value = [];
    localStorage.setItem('cartItems', JSON.stringify([]));
    // Also clear customBuildItems when cart is cleared
    localStorage.removeItem('customBuildItems');
  };

  // Add a method to get cart count
  const getCartCount = () => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
    getCartCount,
  };
};