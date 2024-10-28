import { defineStore } from "pinia";
import useApi from "../composables/useApi";

interface Profits{
    order_month: string;
    total_order_cost: number;
    total_sales_price: number;
}

interface Orders{
    average_order_value: number;
}

interface Conversions{
    conversion_rate: number;
}

interface Ratings{
    satisfaction_rating: number;
}

interface Brands{
    category: string;
    brand: string;
    count: number;
}

interface Stocks{
    product_name: string;
    stock_count: number;
}

interface Traffics{
    visit_date: Date;
    number_of_visits: number;
}

interface Sources{
    platform: string;
    platform_count: number;
}

export const useDashboardStore = defineStore("dashboardstore", {
    state : () => ({
        profits : [] as Profits [],
        orders : [] as Orders [],
        conversions : [] as Conversions[],
        ratings: [] as Ratings[],
        brands: [] as Brands[],
        stocks: [] as Stocks[],
        traffics: [] as Traffics[],
        sources: [] as Sources[],
    }),

    actions: {
      async fetchData<T>(endpoint: string): Promise<T[]> {
        try {
            const api = useApi();
            const response = await api.get(endpoint);
            return response.data as T[];
        } catch (err) {
            console.log(err);
            throw err; // Optional: Rethrow the error if you want to handle it elsewhere
        } 
      },
      
      async fetchAllData(){
        try {
          await Promise.all([
            this.fetchProfits(),
            this.fetchOrders(),
            this.fetchConversions(),
            this.fetchRatings(),
            this.fetchBrands(),
            this.fetchStocks(),
            this.fetchTraffics(),
            this.fetchSources()
          ])
        } catch(err){
          console.log(err)
        }
      },

      // Individual fetch functions (optional, if you want to fetch separately)
      async fetchProfits() {
        this.profits = await this.fetchData<Profits>('/profits');
      },
      async fetchOrders() {
        this.orders = await this.fetchData<Orders>('/orders');
      },
      async fetchConversions() {
        this.conversions = await this.fetchData<Conversions>('/conversions');
      },
      async fetchRatings() {
        this.ratings = await this.fetchData<Ratings>('/ratings');
      },
      async fetchBrands() {
        this.brands = await this.fetchData<Brands>('/brands');
      },
      async fetchStocks() {
        this.stocks = await this.fetchData<Stocks>('/stocks');
      },
      async fetchTraffics() {
        this.traffics = await this.fetchData<Traffics>('/traffics');
      },
      async fetchSources() {
        this.sources = await this.fetchData<Sources>('/sources');
      },
    },
  });

// export default useDashboardStore


          // Fetch all data and update state
      // async fetchAllData() {
      //   try {
      //     // Run all fetches in parallel
      //     const [profits, orders, conversions, ratings, brands, stocks, traffics, sources] = await Promise.all([
      //       this.fetchData<Profits>('/profits'),
      //       this.fetchData<Orders>('/orders'),
      //       this.fetchData<Conversions>('/conversions'),
      //       this.fetchData<Ratings>('/ratings'),
      //       this.fetchData<Brands>('/brands'),
      //       this.fetchData<Stocks>('/stocks'),
      //       this.fetchData<Traffics>('/traffics'),
      //       this.fetchData<Sources>('/sources'),
      //     ]);

      //     // Update the state with fetched data
      //     this.profits = profits;
      //     this.orders = orders;
      //     this.conversions = conversions;
      //     this.ratings = ratings;
      //     this.brands = brands;
      //     this.stocks = stocks;
      //     this.traffics = traffics;
      //     this.sources = sources;
      //   } catch (err) {
      //     console.error("Error fetching all data:", err);
      //   }
      // },