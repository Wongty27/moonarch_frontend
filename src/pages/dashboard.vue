<template>
    <h1 class="text-center my-5"> Business Dashboard </h1>
    <div class="mb-0">
      <h2 class='text-center mb-5'> Sales Management </h2>
        <v-row>
            <v-col cols="11" class="mx-auto mb-10">
                <v-card border="opacity-50 lg" class="pa-5">
                    <MultipleLineChart/>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-space-around">
            <v-col cols="3">
                <h2 class="text-center mb-5"> Average Order Value </h2>

                <v-card border="opacity-50 lg">
                    <PlotlyGauge />
                </v-card>
            </v-col>

            <v-col cols="3">
                <h2 class="text-center mb-5"> Order Conversion Rate </h2>

                <v-card border="opacity-50 lg">
                    <PlotlyGauge />
                </v-card>
            </v-col>

            <v-col cols="3">
                <h2 class="text-center mb-5"> Customer Satisfaction Rating </h2>

                <v-card border="opacity-50 lg">
                    <PlotlyGauge />
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mt-15 d-flex justify-space-around mt-0">
            <v-col cols="11" class="mb-10">
                <h2 class="text-center mb-5"> PC Components Sales Number By Parts and Brands </h2>
                <v-card border="opacity-50 lg">
                    <SunburstChart />
                </v-card>
            </v-col>
        </v-row>
    </div>

    <div class="mt-0">
        <v-row class="d-flex justify-space-around">
            <v-col lg="3" xs="12" class="my-auto">
                <h2 class="text-center mb-5"> Inventory management</h2>
                <v-card border="opacity-50 lg" class="chart-card">
                    <BarChart/>
                </v-card>
            </v-col>

            <v-col lg="3" xs="12" class="my-auto">
                <h2 class="text-center mb-5"> Traffic engagement</h2>
                <v-card border="opacity-50 lg" class="chart-card">
                    <LineChart/>
                </v-card>
            </v-col>

            <v-col lg="3" xs="12" class="my-auto" >
                <h2 class="text-center mb-5"> Traffic Source</h2>
                <v-card border="opacity-50 lg" class="chart-card" >
                    <PieChart/>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
  
  <script setup>
    import MultipleLineChart from '@/components/MultipleLineChart'
    import LineChart from '@/components/LineChart'
    import PieChart from '@/components/PieChart'
    import VueGauge from '@/components/VueGauge'
    import SunburstChart from '@/components/SunburstChart'
    import PlotlyGauge from '@/components/PlotlyGauge.vue'
    import BarChart from '@/components/BarChart.vue'
  </script>

<style scoped>
    .chart-card {
    height: 300px; /* Fixed height for consistent chart size */
    min-height: 300px;
    width: 100%
    }
</style>