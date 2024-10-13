<template>
    <v-container>
        <div>
            Select Your Components
        </div>

        <v-row>
            <v-col>

                <div class="border rounded-lg pa-4 border-4 animated-border-box product-container mb-2"
                    style="max-width: 100%; height: 550px;">


                    <div class="product-list">

                        <!-- Search Bar -->
                        <v-text-field v-model="searchTerm" label="Search parts..." outlined full-width
                            class="mb-2 rounded-lg animated-border-box" :prepend-inner-icon="'mdi-magnify'"
                            color="grey">
                        </v-text-field>

                        <v-col>
                            <div v-for="(item, index) in products" :key="index"
                                :class="['border rounded-lg mb-2', {'animated-border-box': item.showDescription}]"
                                style=" transition: all 0.5s ease;">

                                <v-row no-gutters>

                                    <v-btn icon @click="handleRemoveRow(item.id)" color="white">
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                    <v-btn icon @click="handleAddRow" color="white">
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>

                                    <v-spacer></v-spacer>
                                    <v-col cols="auto">
                                        <v-card-title style="margin-right: 500px;">Product {{ index + 1
                                            }}</v-card-title>
                                    </v-col>

                                    <v-spacer></v-spacer>
                                    <v-col cols="auto">
                                        <v-card-text>
                                            ${{ item.price }}
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="auto">
                                        <v-switch style="padding-right: 10px;" v-model="item.showDescription"
                                            @change="updateDescription(index)"></v-switch>
                                    </v-col>
                                </v-row>
                                <v-expand-transition>
                                    <div v-if="item.showDescription" class="px-4 pb-2">
                                        <p>{{ item.description }}</p>
                                        <AmendButton />
                                    </div>
                                </v-expand-transition>
                            </div>
                        </v-col>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AmendButton from './AmendButton.vue';

export default {
    data() {
        return {
            products: [
                { price: 100, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
                { price: 200, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
                { price: 150, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
                { price: 300, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
                { price: 250, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
                { price: 180, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut ligula eget lacus dignissim porta. Duis urna enim, fringilla sed erat non, consectetur convallis dolor. Etiam sapien elit, varius et dignissim sit amet, vulputate in turpis. Integer tincidunt sollicitudin tincidunt. Sed ligula velit, ultrices vel augue vitae, volutpat aliquam velit. Etiam dictum ultricies tellus et pulvinar. Sed eu dolor congue, ultrices libero a, congue felis.", showDescription: false },
            ],
        };
    },
    computed: {
        totalPrice() {
            return this.products.reduce((total, product) => total + product.price, 0);
        },
    },
    methods: {
        updateDescription(index) {
            // This method is called when the switch is toggled
            // You can add any additional logic here if needed
        },
    },
    components: {
    AmendButton
  }
};
</script>

<style scoped>



</style>