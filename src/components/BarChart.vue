<template>
    <Bar
      :options="chartOptions"
      :data="chartData"
    />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, 
  BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ "Motherboard", "Intel - MSI", "Intel - Gigabyte", "Intel - Asus", "Ryzen - MSI", "Ryzen - Gigabyte", "Ryzen - Asus", "AMD-Sapphire","Nvidia-Zotac","Nvidia-Asus"],
        datasets: [ { 
          label: 'PC Components',
          backgroundColor: '#f87979',
          data: [50, 44, 42, 41, 38, 35, 30, 15, 7, 2] 
          } ]
      },
      chartOptions: {
        responsive: true,
          maintainAspectRatio: false,
          aspectRatio:1,
        scales: {
          x:{
              display: true,
              title: {
                  display: true,
                  text: 'PC Components',
                  color: "white"
              },
              ticks : { color: 'white'}
          },
          y:{
              display: true,
              title: {
                  display: true,
                  text: 'Stock Count',
                  color: "white"
              },
              ticks : { color: 'white'}                
          }
        },
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 10,
                bottom: 10
            }
        },
        plugins: {
              title: {
                      display: true,
                      text: 'Top 10 Item Less in Stock',
                      color: "white"
              },
              legend : { labels: { color : 'white'} }
          },
      }
    }
  }
}
</script>