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
        labels: [ '1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15'],
        datasets: [ { 
          label: "Visits",
          backgroundColor: '#8479f8',
          borderColor: '#8479f8',
          data: [30, 26, 28, 31, 29, 27, 45, 10, 25, 36, 14, 23, 12, 40, 110] 
          } ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio:1,
        layout: {
            padding: {
                left: 30,
                right: 30,
                top: 10,
                bottom: 10
            }
        },
        scales: {
          x:{
              display: true,
              title: {
                  display: true,
                  text: 'Day',
                  color: "white"
              },
              ticks : { color: 'white'}
          },
          y:{
              type: 'linear',
              display: true,
              title: {
                  display: true,
                  text: 'Number of visits',
                  color: "white"
              },
              ticks : { color : "white"}         
          },
        },
        plugins: {
            title: {
                    display: true,
                    text: 'Website daily visits',
                    color: 'white'
            },
            legend : {
              labels: { color : 'white'}
            }
        }
      }
    };
  }
};
</script>

