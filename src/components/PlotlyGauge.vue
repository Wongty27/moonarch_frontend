<template>
    <div ref="gaugeElement"></div>
</template>

<script>

import Plotly from 'plotly.js-dist'
  
export default {
  name: 'PlotlyChart',

  data() {
    return {
      chartData: [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: 270,
            // title: { text: "Conversion rate" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
              bar: { thickness: 0.6 },
              axis: { range: [null, 500] },
              steps: [
                  { range: [0, 250], color: "lightgray" },
                  { range: [250, 400], color: "gray" }
              ],
              threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: 490
              }
            }
	      }],

      chartLayout: {
        // width: 600, 
        height: 300,
        margin: { t: 0, b: 0, pad:0 },
        paper_bgcolor:'black',
        font: {
          color: "white"
        }

        },

      config : {
        responsive: true,
        displayModeBar: false,
        autosizable: true,
        // fillContainer: true
        // fillFrame: true
      }
    }
  },

  mounted() {
    this.renderChart();
  },

  methods: {
    renderChart() {
      Plotly.newPlot(this.$refs.gaugeElement, this.chartData, this.chartLayout, this.config);
    }
  },

  watch: {
    data: 'renderChart',
    layout: 'renderChart'
  }
}

</script>
