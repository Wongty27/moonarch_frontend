import { defineStore } from "pinia";
import useApi from "../composables/useApi";

interface UserInfo {
    email: string;
    full_name: string;
    phone_number: string;
    address: string;
}

interface PasswordInfo {
    old_password: string;
    new_password: string;
    confirm_password: string;
}

interface Feedback {
    rating: number;
    platform: string;
}

interface OrdersInfo {
    order_id: string;
    order_time: string;
    order_status: string;
    items: string[];
    feedback?: Feedback; // Add this field
}

export const useUserProfileStore = defineStore("userprofile", {
    state: () => ({
        userInfo: {} as UserInfo,
        ordersInfo: [] as OrdersInfo[],
        passwordInfo: {
            old_password: '',
            new_password: '',
            confirm_password: ''
        } as PasswordInfo,
        ratingInfo: {
            rating: 0,
            platform: ''
          } as Feedback
    }),

    actions: {
        async fetchUserInfo(): Promise<UserInfo> {
            try {
                const api = useApi();
                const response = await api.get("/user/profile");
                this.userInfo = response.data as UserInfo;
                return this.userInfo;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async updateUserInfo(userInfo: UserInfo): Promise<void> {
            try {
                const api = useApi();
                await api.put("/user/profile", userInfo);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async updateUserPassword(passwordInfo: PasswordInfo): Promise<void> {
            try {
                const api = useApi();
                await api.put("/user/change-password", passwordInfo);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async fetchOrders(): Promise<OrdersInfo[]> {
            try {
                const api = useApi();
                const response = await api.get("/user/orders");
                this.ordersInfo = response.data as OrdersInfo[];
                return this.ordersInfo;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async submitOrderRating(orderId: string, ratingInfo: Feedback): Promise<void> {
            try {
                const api = useApi();
                await api.post(`/user/orders/feedback/${orderId}`, ratingInfo);
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
})

