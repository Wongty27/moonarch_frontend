import { ref, Ref } from 'vue';

// Define interfaces
interface CartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  quantity: number;
}

interface NewCartItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface CartOperations {
  cartItems: Ref<CartItem[]>;
  addToCart: (item: NewCartItem) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, change: number) => void;
  clearCart: () => void;
}

// Create a ref to hold cart items
const cartItems = ref<CartItem[]>([]);

export const useCart = (): CartOperations => {
  const addToCart = (item: NewCartItem): void => {
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

  const removeItem = (itemId: number): void => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
  };

  const updateQuantity = (itemId: number, change: number): void => {
    const item = cartItems.value.find(item => item.id === itemId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeItem(itemId);
      }
    }
  };

  const clearCart = (): void => {
    cartItems.value = [];
  };

  return {
    cartItems,
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
  };
};