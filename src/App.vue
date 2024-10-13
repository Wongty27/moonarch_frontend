<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <ChooseParts />
          </v-col>
         

    

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Border from './components/Border.vue';
import QuotationItem from './components/QuotationItem.vue';
import ThreeDDisplay from './components/ThreeDDisplay.vue'; // Assuming ThreeDDisplay.vue is in the same directory
import ChooseParts from './components/ChooseParts.vue';

export default {
  components: {
    QuotationItem,
    ThreeDDisplay,
    Border,
    ChooseParts,
  }
};
</script>
