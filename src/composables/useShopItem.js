import { ref } from 'vue';

export function useShopItems() {
  const shopItems = ref([
    { 
      id: 1, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
    { 
      id: 2, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
    { 
      id: 3, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
    { 
      id: 4, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
    { 
      id: 5, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
    { 
      id: 6, 
      name: 'woshishabi', 
      imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", 
      description: 'Description for Item 1',
      price: 99.99,
      stock: 10
    },
  ]);

  return shopItems;
}