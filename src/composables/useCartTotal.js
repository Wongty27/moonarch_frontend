import { computed } from 'vue';

export function useCartTotals(cartItems) {
  const subtotal = computed(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  });

  return {
    subtotal,
  };
}