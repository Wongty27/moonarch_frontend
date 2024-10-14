import { ref } from 'vue';

export function useShopItems() {
  const shopItems = ref([
    { id: 1, name: 'Item 1', imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', imageUrl: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', imageUrl: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 5, name: 'Item 5', imageUrl: 'https://my-files.apjonlinecdn.com/landingpages/category-family/hp-gaming-family-v2/images/desktops/w100_omendesktops_desktop_hover.png', description: 'Description for Item 3' },
    { id: 6, name: 'Item 6', imageUrl: 'https://p7.hiclipart.com/preview/686/544/832/computer-cases-housings-graphics-cards-video-adapters-computer-system-cooling-parts-video-game-gaming-computer-blackstone.jpg', description: 'Description for Item 3' },
    { id: 1, name: 'Item 1', imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', imageUrl: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', imageUrl: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 5, name: 'Item 5', imageUrl: 'https://my-files.apjonlinecdn.com/landingpages/category-family/hp-gaming-family-v2/images/desktops/w100_omendesktops_desktop_hover.png', description: 'Description for Item 3' },
    { id: 6, name: 'Item 6', imageUrl: 'https://p7.hiclipart.com/preview/686/544/832/computer-cases-housings-graphics-cards-video-adapters-computer-system-cooling-parts-video-game-gaming-computer-blackstone.jpg', description: 'Description for Item 3' },
    { id: 1, name: 'Item 1', imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', imageUrl: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', imageUrl: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 5, name: 'Item 5', imageUrl: 'https://my-files.apjonlinecdn.com/landingpages/category-family/hp-gaming-family-v2/images/desktops/w100_omendesktops_desktop_hover.png', description: 'Description for Item 3' },
    { id: 6, name: 'Item 6', imageUrl: 'https://p7.hiclipart.com/preview/686/544/832/computer-cases-housings-graphics-cards-video-adapters-computer-system-cooling-parts-video-game-gaming-computer-blackstone.jpg', description: 'Description for Item 3' },
    { id: 1, name: 'Item 1', imageUrl: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=600", description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', imageUrl: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', imageUrl: 'https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', imageUrl: 'https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Description for Item 3' },
    { id: 5, name: 'Item 5', imageUrl: 'https://my-files.apjonlinecdn.com/landingpages/category-family/hp-gaming-family-v2/images/desktops/w100_omendesktops_desktop_hover.png', description: 'Description for Item 3' },
    { id: 6, name: 'Item 6', imageUrl: 'https://p7.hiclipart.com/preview/686/544/832/computer-cases-housings-graphics-cards-video-adapters-computer-system-cooling-parts-video-game-gaming-computer-blackstone.jpg', description: 'Description for Item 3' },
  ]);

  return shopItems;
}
