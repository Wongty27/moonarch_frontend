<template>
    <div>
      <div ref="sunburstChart" class="w-full h-[600px]"></div>
    </div>
  </template>
  
  <script>
  import Plotly from 'plotly.js-dist'
  
  export default {
    name: 'SunburstChart',
    data() {
      return {
        pcPartsData: [
          { "brand": "Fractal Design", "category": "case", "count": 1 },
          { "brand": "Lian Li", "category": "case", "count": 2 },
          { "brand": "Montech", "category": "case", "count": 1 },
          { "brand": "NZXT", "category": "case", "count": 10 },
          { "brand": "ARCTIC", "category": "cooler", "count": 3 },
          { "brand": "Cooler Master", "category": "cooler", "count": 3 },
          { "brand": "Corsair", "category": "cooler", "count": 1 },
          { "brand": "Deepcool", "category": "cooler", "count": 3 },
          { "brand": "NZXT", "category": "cooler", "count": 2 },
          { "brand": "Thermalright", "category": "cooler", "count": 3 },
          { "brand": "AMD", "category": "cpu", "count": 7 },
          { "brand": "Intel", "category": "cpu", "count": 6 },
          { "brand": "ARCTIC", "category": "fan", "count": 3 },
          { "brand": "Corsair", "category": "fan", "count": 2 },
          { "brand": "Lian Li", "category": "fan", "count": 2 },
          { "brand": "Noctua", "category": "fan", "count": 3 },
          { "brand": "Thermalright", "category": "fan", "count": 3 },
          { "brand": "ASRock", "category": "gpu", "count": 1 },
          { "brand": "Asus", "category": "gpu", "count": 1 },
          { "brand": "MSI", "category": "gpu", "count": 1 },
          { "brand": "PNY", "category": "gpu", "count": 3 },
          { "brand": "XFX", "category": "gpu", "count": 5 },
          { "brand": "Seagate", "category": "hdd", "count": 12 },
          { "brand": "Toshiba", "category": "hdd", "count": 1 },
          { "brand": "Asus", "category": "mobo", "count": 1 },
          { "brand": "Gigabyte", "category": "mobo", "count": 1 },
          { "brand": "MSI", "category": "mobo", "count": 11 },
          { "brand": "Asus", "category": "psu", "count": 1 },
          { "brand": "Corsair", "category": "psu", "count": 6 },
          { "brand": "MSI", "category": "psu", "count": 5 },
          { "brand": "Thermaltake", "category": "psu", "count": 1 },
          { "brand": "Corsair", "category": "ram", "count": 6 },
          { "brand": "G.Skill", "category": "ram", "count": 3 },
          { "brand": "TEAMGROUP", "category": "ram", "count": 2 },
          { "brand": "Crucial", "category": "SSD", "count": 2 },
          { "brand": "Samsung", "category": "SSD", "count": 3 },
          { "brand": "TEAMGROUP", "category": "SSD", "count": 2 },
          { "brand": "Western Digital", "category": "SSD", "count": 6 }
        ]
      }
    },
    mounted() {
      this.createSunburstChart()
    },
    methods: {
      createSunburstChart() {
        const labels = []
        const parents = []
        const values = []
  
        // Calculate total sum first
        const totalSum = this.pcPartsData.reduce((sum, item) => sum + item.count, 0)
  
        // Add center (root)
        labels.push("PC PARTS")
        parents.push("")
        values.push(totalSum)
  
        // Add categories with their totals
        const categoryTotals = {}
        this.pcPartsData.forEach(item => {
          if (!categoryTotals[item.category]) {
            categoryTotals[item.category] = 0
          }
          categoryTotals[item.category] += item.count
        })
  
        // Add first level (categories)
        Object.entries(categoryTotals).forEach(([category, total]) => {
          labels.push(category.toUpperCase())
          parents.push("PC PARTS")
          values.push(total)
        })
  
        // Add second level (brands)
        this.pcPartsData.forEach(item => {
          const brandLabel = `${item.brand}`
          labels.push(brandLabel)
          parents.push(item.category.toUpperCase())
          values.push(item.count)
        })
  
        const data = [{
          type: 'sunburst',
          labels: labels,
          parents: parents,
          values: values,
          outsidetextfont: { size: 12, color: "#377eb8" },
          insidetextfont: { size: 12, color: "#000000" },
          leaf: { opacity: 0.7 },
          marker: {
            line: { width: 1 },
            colors: labels.map((_, index) => {
              if (index === 0) return '#ffffff'
              const hue = (index * 137.508) % 360
              return `hsl(${hue}, 70%, ${index < Object.keys(categoryTotals).length + 1 ? 60 : 75}%)`
            })
          },
          branchvalues: 'total',
          hovertemplate: `
            <b>%{label}</b><br>
            Count: %{value}<br>
            Percentage of parent: %{percentParent:.1%}<br>
            Percentage of total: %{percentRoot:.1%}
            <extra></extra>
          `
        }]
  
        const layout = {
          margin: { l: 0, r: 0, t: 0, b: 0 },
          width: this.$refs.sunburstChart.clientWidth,
          height: this.$refs.sunburstChart.clientHeight,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)'
        }
  
        const config = {
          responsive: true,
          displayModeBar: false
        }
  
        Plotly.newPlot(this.$refs.sunburstChart, data, layout, config)
        window.addEventListener('resize', this.handleResize)
      },
      handleResize() {
        Plotly.relayout(this.$refs.sunburstChart, {
          width: this.$refs.sunburstChart.clientWidth,
          height: this.$refs.sunburstChart.clientHeight
        })
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
      Plotly.purge(this.$refs.sunburstChart)
    }
  }
  </script>






<!-- <template>
    <div>
      <div ref="sunburstChart" class="w-full h-[600px]"></div>
    </div>
  </template>
  
  <script>
  import Plotly from 'plotly.js-dist'
  
  export default {
    name: 'SunburstChart',
    data() {
      return {
        pcPartsData: [
          { "brand": "Fractal Design", "category": "case", "count": 1 },
          { "brand": "Lian Li", "category": "case", "count": 2 },
          { "brand": "Montech", "category": "case", "count": 1 },
          { "brand": "NZXT", "category": "case", "count": 10 },
          { "brand": "ARCTIC", "category": "cooler", "count": 3 },
          { "brand": "Cooler Master", "category": "cooler", "count": 3 },
          { "brand": "Corsair", "category": "cooler", "count": 1 },
          { "brand": "Deepcool", "category": "cooler", "count": 3 },
          { "brand": "NZXT", "category": "cooler", "count": 2 },
          { "brand": "Thermalright", "category": "cooler", "count": 3 },
          { "brand": "AMD", "category": "cpu", "count": 7 },
          { "brand": "Intel", "category": "cpu", "count": 6 },
          { "brand": "ARCTIC", "category": "fan", "count": 3 },
          { "brand": "Corsair", "category": "fan", "count": 2 },
          { "brand": "Lian Li", "category": "fan", "count": 2 },
          { "brand": "Noctua", "category": "fan", "count": 3 },
          { "brand": "Thermalright", "category": "fan", "count": 3 },
          { "brand": "ASRock", "category": "gpu", "count": 1 },
          { "brand": "Asus", "category": "gpu", "count": 1 },
          { "brand": "MSI", "category": "gpu", "count": 1 },
          { "brand": "PNY", "category": "gpu", "count": 3 },
          { "brand": "XFX", "category": "gpu", "count": 5 },
          { "brand": "Seagate", "category": "hdd", "count": 12 },
          { "brand": "Toshiba", "category": "hdd", "count": 1 },
          { "brand": "Asus", "category": "mobo", "count": 1 },
          { "brand": "Gigabyte", "category": "mobo", "count": 1 },
          { "brand": "MSI", "category": "mobo", "count": 11 },
          { "brand": "Asus", "category": "psu", "count": 1 },
          { "brand": "Corsair", "category": "psu", "count": 6 },
          { "brand": "MSI", "category": "psu", "count": 5 },
          { "brand": "Thermaltake", "category": "psu", "count": 1 },
          { "brand": "Corsair", "category": "ram", "count": 6 },
          { "brand": "G.Skill", "category": "ram", "count": 3 },
          { "brand": "TEAMGROUP", "category": "ram", "count": 2 },
          { "brand": "Crucial", "category": "SSD", "count": 2 },
          { "brand": "Samsung", "category": "SSD", "count": 3 },
          { "brand": "TEAMGROUP", "category": "SSD", "count": 2 },
          { "brand": "Western Digital", "category": "SSD", "count": 6 }
        ]
      }
    },
    mounted() {
      this.createSunburstChart()
    },
    methods: {
      createSunburstChart() {
        const labels = []
        const parents = []
        const values = []
  
        // Calculate category totals first
        const categoryTotals = {}
        this.pcPartsData.forEach(item => {
          const category = item.category.toUpperCase()
          if (!categoryTotals[category]) {
            categoryTotals[category] = 0
          }
          categoryTotals[category] += item.count
        })
  
        // First, add the root
        labels.push("All PC Parts")
        parents.push("")
        values.push(Object.values(categoryTotals).reduce((a, b) => a + b, 0))
  
        // Then add categories (they will be children of root)
        Object.entries(categoryTotals).forEach(([category, total]) => {
          labels.push(category)
          parents.push("All PC Parts")
          values.push(total)
        })
  
        // Finally add brands (they will be children of categories)
        this.pcPartsData.forEach(item => {
          labels.push(`${item.brand} (${item.count})`)
          parents.push(item.category.toUpperCase())
          values.push(item.count)
        })
  
        const data = [{
          type: 'sunburst',
          labels: labels,
          parents: parents,
          values: values,
          outsidetextfont: { size: 20, color: "#377eb8" },
          leaf: { opacity: 0.7 },
          marker: { 
            line: { width: 2 },
            colors: labels.map((_, index) => {
              const hue = (index * 137.508) % 360  // Golden angle approximation
              return index === 0 ? '#ffffff' : `hsl(${hue}, 70%, ${index < Object.keys(categoryTotals).length + 1 ? 60 : 75}%)`
            })
          },
          branchvalues: 'total',
          hovertemplate: `
            <b>%{label}</b><br>
            Count: %{value}<br>
            Percentage of parent: %{percentParent:.1%}<br>
            Percentage of total: %{percentRoot:.1%}
            <extra></extra>
          `
        }]
  
        const layout = {
          margin: { l: 0, r: 0, t: 0, b: 0 },
          width: this.$refs.sunburstChart.clientWidth,
          height: this.$refs.sunburstChart.clientHeight,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)'
        }
  
        const config = {
          responsive: true,
          displayModeBar: false
        }
  
        Plotly.newPlot(this.$refs.sunburstChart, data, layout, config)
  
        // Add window resize handler
        window.addEventListener('resize', this.handleResize)
      },
      handleResize() {
        Plotly.relayout(this.$refs.sunburstChart, {
          width: this.$refs.sunburstChart.clientWidth,
          height: this.$refs.sunburstChart.clientHeight
        })
      }
    },
    beforeDestroy() {
      // Clean up
      window.removeEventListener('resize', this.handleResize)
      Plotly.purge(this.$refs.sunburstChart)
    }
  }
  </script> -->