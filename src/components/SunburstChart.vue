<template>
  <div class="sbc-container">
    <div ref="plotElement"></div>
  </div>
</template>
   
<script>
  import Plotly from 'plotly.js-dist'
  
  export default {
    name: 'PlotlyChart',

    data() {
      return {
        chartData: [{
          type: "sunburst",
          labels: [   "PC Components",
                      "Processor","Intel","AMD",
                      "Memory","Gskill","Corsair-Mem","Kingston", 
                      "Storage","SSD-Kingston","SSD-Samsung","HDD-Seagate","HDD-WD",
                      "GPU","AMD-Sapphire","Nvidia-Zotac","Nvidia-Asus","Nvidia-Gigabyte", "Nvidia-MSI", 
                      "Motherboard", "Intel - MSI", "Intel - Gigabyte", "Intel - Asus", "Ryzen - MSI", "Ryzen - Gigabyte", "Ryzen - Asus",
                      "PSU", "Antec", "Lianli", "Corsair-PSU" , "Asus-PSU" , "MSI-PSU", "Coolermaster",
                      "Cooling", "EVGA", "Corsair-Cool", "Cooler Master", "Aigo", "Deepcool",
                      "PC Casing", "Silverstone", "Antec-Case", "Asus-Case", "Lianli-Case", "Gigabyte-Case", "MSI-Case"
                  ],
          parents: [  "",
                      "PC Components","Processor","Processor",
                      "PC Components","Memory","Memory","Memory",
                      "PC Components","Storage","Storage","Storage","Storage",
                      "PC Components","GPU", "GPU", "GPU", "GPU", "GPU",
                      "PC Components","Motherboard","Motherboard","Motherboard","Motherboard","Motherboard","Motherboard",
                      "PC Components","PSU","PSU","PSU","PSU","PSU","PSU",
                      "PC Components","Cooling","Cooling","Cooling","Cooling","Cooling",
                      "PC Components","PC Casing","PC Casing","PC Casing","PC Casing","PC Casing","PC Casing"
                  ],
          values:  [  0,
                      0, 5, 2,
                      0, 2, 7, 4,
                      0, 5, 2, 3, 8,
                      0, 6, 3, 4, 1, 2,
                      0, 3, 7, 2, 6, 9, 2,
                      0, 4, 5, 2, 6, 1, 2,
                      0, 2, 1, 4, 5, 9,
                      0, 5, 8, 1, 2, 4, 6
                  ],
          outsidetextfont: {size: 20, color: "#ffffff"},
          leaf: {opacity: 0.7},
          marker: {line: {width: 2}},
        }],

        chartLayout: {
            margin: {l: 50, r: 200, b: 20, t: 20},
            // height: 500,
            // width: 500,
            paper_bgcolor:'black',
            font: {size: 16, color: "white"},
            autosize: true
          },

        config : {
          responsive: true,
          displayModeBar: false,
          autosizable: true,
          // fillContainer: true
          fillFrame: true
        }
      }
    },

    mounted() {
      this.renderChart();
    },

    methods: {
      renderChart() {
        Plotly.newPlot(this.$refs.plotElement, this.chartData, this.chartLayout, this.config);
      }
    },

    watch: {
      data: 'renderChart',
      layout: 'renderChart'
    }
  }


</script>

<!-- <style>
  .sbc-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sbc-container > div {
    width: 100%;
    height: 100%;
  }

</style> -->