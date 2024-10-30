import { computed } from 'vue';

export function useCartTotals(cartItems, shippingCost) {
  const subtotal = computed(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  });

  const total = computed(() => {
    return subtotal.value + shippingCost;
  });

  return {
    subtotal,
    total,
  };
}