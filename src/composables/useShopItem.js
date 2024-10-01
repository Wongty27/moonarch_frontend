import { ref } from 'vue';

export function useShopItems() {
  const shopItems = ref([
    { id: 1, name: 'Item 1', imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', imageUrl: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 3, name: 'Item 3', imageUrl: 'https://my-files.apjonlinecdn.com/landingpages/category-family/hp-gaming-family-v2/images/desktops/w100_omendesktops_desktop_hover.png', description: 'Description for Item 3' },
    { id: 3, name: 'Item 3', imageUrl: 'https://www.pngfind.com/pngs/m/239-2398572_intel-z390-2-way-gpu-tower-gaming-desktop.png', description: 'Description for Item 3' },
  ]);

  return shopItems;
}
