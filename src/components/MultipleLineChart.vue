<template>
    <Line
      :options="chartOptions"
      :data="chartData"
    />
</template>
  
<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, 
  LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
  
export default {
  name: 'LineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [ 'Jan', 'Feb', 'Mac', 'Apr', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [ { 
            label: "Revenue",
            backgroundColor: '#8479f8',
            borderColor: '#8479f8',
            data: [100, 126, 218, 314, 229, 217, 451, 120, 245, 366, 145, 223] 
          },
          { 
            label: "Cost",
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: [70, 26, 128, 311, 209, 127, 245, 50, 125, 136, 114, 203] 
          },]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio:0.8,
      
        scales: {
          x:{
              display: true,
              title: {
                  display: true,
                  text: 'Months',
                  color: "white"
              },
              ticks: { color : 'white' },   
          },
          y:{
              display: true,
              title: {
                  display: true,
                  text: 'Dollar ($)',
                  color: "white"
              },
              ticks: { color : 'white' }                
          }
        },

        plugins:{
          title:{
              display: true,
              text: 'Revenue versus Cost over past 12 months',
              color: 'white',
              font: {size: 18}
              
          },

          legend: {
              position: 'top',
              labels: {color:'white'}
          }
        },
      }
    }
  }
}
</script>