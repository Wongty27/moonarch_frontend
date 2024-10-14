<template>
    <Pie
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script>
    import {Pie} from 'vue-chartjs'
    import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
    ChartJS.register(ArcElement, Tooltip, Legend)

    export default{
        name: 'App',
        components: {Pie},
        data(){
            return{
                chartData:{
                    labels: ['Facebook','Instagram','Tiktok','Youtube','Others'],
                    datasets:[{
                        backgroundColor: ['#41B883','#E46651','#00D8FF','#DD1B16','#d1bee0'],
                        borderColor: 'black',
                        data:[200,500,300,1000,250]
                    }]
                },
                chartOptions:{
                    responsive: true,
                    maintainAspectRatio: false,
                    aspectRatio: 500,
                    layout: {
                        padding: {
                            left: 30,
                            right: 30,
                            top: 20,
                            bottom: 20
                        }
                    },
                    plugins:{
                        title:{
                            display: false,
                            text: 'Traffic source',
                            color: 'white'
                        },

                        legend: {
                            position: 'left',
                            labels: {color:'white'}
                        }
                    },

                }
            }
        }
    }
</script>