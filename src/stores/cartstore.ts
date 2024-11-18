import { defineStore } from "pinia";
import useApi from "../composables/useApi";

export type CartItem = {
    cart_item_id: number;
    type: 'product' | 'prebuilt';
    item_id: number; 
    product_name: string;
    category: string;
    quantity: number;
    price: number;
    total_price: number;
    img_url: string | null;
};

export type CartResponse = {
    user_id: string;
    items: CartItem[];
    total_items: number;
    cart_total: number;
};

interface CartItemCreate {
    product_id?: number | null;
    build_id?: number | null;
    quantity: number;
}

export const useCartStore = defineStore("cart", {
    state: () => ({
        cartItems: [] as CartItem[],
        cartTotal: 0,
        totalItems: 0
    }),

    actions: {
        async fetchCartItems() {
            const api = useApi();
            const response = await api.get<CartResponse>("/cart");
            this.cartItems = response.data.items;
            this.cartTotal = response.data.cart_total;
            this.totalItems = response.data.total_items;
        },

        async addToCart(item: CartItemCreate) {
            try {
                const api = useApi();
                const response = await api.post("/cart", item);
                await this.fetchCartItems(); // Refresh cart after adding
                return response.data; // Return the response data
            } catch (error) {
                console.error('Error adding to cart:', error);
                throw error; // Rethrow the error to be caught by the component
            }
        },

        async updateCartItemQuantity(cartItemId: number, quantity: number) {
            const api = useApi();
            await api.put(`/cart/item/${cartItemId}`, null, {
                params: { quantity }
            });
            await this.fetchCartItems(); // Refresh cart after update
        },

        async removeCartItem(cartItemId: number) {
            const api = useApi();
            await api.delete(`/cart/item/${cartItemId}`);
            await this.fetchCartItems(); // Refresh cart after removal
        },

        async clearCart() {
            const api = useApi();
            await api.delete("/cart");
            this.cartItems = [];
        }
    }
});