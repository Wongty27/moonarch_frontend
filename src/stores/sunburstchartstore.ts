import { defineStore } from 'pinia';
import { useDashboardStore } from './dashboardstore';

// Define types for Plotly.js
interface SunburstTrace {
    type: string;
    labels: string[];
    parents: string[];
    values: number[];
    outsidetextfont: { size: number; color: string };
    leaf: { opacity: number };
    marker: { line: { width: number } };
  }
  
  interface ChartLayout {
    margin: { l: number; r: number; b: number; t: number };
    paper_bgcolor: string;
    font: { size:number; color:string};
    autosize: boolean;
  }
  
  interface ChartConfig {
    responsive: boolean;
    displayModeBar: boolean;
    autosizable: boolean;
    fillFrame: boolean;
  }

export const useSunburstStore = defineStore('sunburst', {
  state: () => ({
    labels: ["PC Components"] as string[],
    parents: [""] as string[],
    values: [0] as number[],
  }),

  actions: {
    async loadSunburstData() {
      const dashboardStore = useDashboardStore();
      await dashboardStore.fetchBrands();
      const brandsList = dashboardStore.brands;

      // Reset the arrays
      this.labels = ["PC Components"];
      this.parents = [""];
      this.values = [0];

      brandsList.forEach((item) => {
        if (!this.labels.includes(item.category)) {
          this.labels.push(item.category);
          this.parents.push("");
          this.values.push(0);
        }
        this.labels.push(item.brand);
        this.parents.push(item.category);
        this.values.push(item.count);
      });

    },
  },

  getters: {
    chartData(): SunburstTrace[] {
      return [{
        type: "sunburst",
        labels: this.labels,
        parents: this.parents,
        values: this.values,
        outsidetextfont: { size: 20, color: "#ffffff" },
        leaf: { opacity: 0.7 },
        marker: { line: { width: 2 } },
      }];
    },
    chartLayout(): ChartLayout {
      return {
        margin: { l: 50, r: 200, b: 40, t: 40 },
        paper_bgcolor: 'black',
        font: { size: 16, color: "white" },
        autosize: true,
      };
    },
    chartConfig(): ChartConfig {
      return {
        responsive: true,
        displayModeBar: false,
        autosizable: true,
        fillFrame: true
      };
    }
  }
});




