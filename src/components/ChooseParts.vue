<template>
    <v-container>
        <v-data-table :headers="headers" :items="rows" class="border rounded-lg pa-1 animated-border-box">
            <template v-slot:item.actions="{ item }">
                <v-btn icon @click="handleRemoveRow(item.id)" color="white">
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
                <v-btn icon @click="handleAddRow" color="white">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </template>

            <template v-slot:item.part="{ item }">
                <v-select :value="item.part" :items="pcParts" item-text="name" item-value="name"
                    @change="(value) => handlePartChange(item.id, value)" color="white" style="width: 720px;"
                    class="border rounded-lg pa-1 animated-border-box"></v-select>
            </template>

            <template v-slot:item.quantity="{ item }">
                <v-text-field :value="item.quantity" type="number" :min="1"
                    @input="(value) => handleQuantityChange(item.id, value)" color="white" style="max-width: 120px;"
                    class="border rounded-lg pa-1 animated-border-box"></v-text-field>
            </template>

            <template v-slot:item.total="{ item }">
                RM{{ (item.price * item.quantity).toFixed(2) }}
            </template>
        </v-data-table>
        <div class="mt-8 text-right text-h4 font-weight-bold">
            Total: RM{{ totalPrice.toFixed(2) }}
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            rows: [
                { id: 1, part: '', quantity: 1, price: 0 }
            ],
            headers: [
                { text: 'Actions', value: 'actions', sortable: false },
                { text: 'Part', value: 'part' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Total', value: 'total', sortable: false }
            ],
            pcParts: [
                // Your pcParts data here
            ]
        }
    },
    computed: {
        totalPrice() {
            return this.rows.reduce((sum, row) => sum + row.price * row.quantity, 0);
        }
    },
    methods: {
        handleAddRow() {
            this.rows.push({ id: this.rows.length + 1, part: '', quantity: 1, price: 0 });
        },
        handleRemoveRow(id) {
            this.rows = this.rows.filter(row => row.id !== id);
        },
        handlePartChange(id, value) {
            const index = this.rows.findIndex(row => row.id === id);
            if (index !== -1) {
                const updatedRow = { ...this.rows[index], part: value, price: this.getRandomPrice() };
                this.$set(this.rows, index, updatedRow);
            }
        },
        handleQuantityChange(id, value) {
            const index = this.rows.findIndex(row => row.id === id);
            if (index !== -1) {
                const updatedRow = { ...this.rows[index], quantity: parseInt(value) || 1 };
                this.$set(this.rows, index, updatedRow);
            }
        },
        getRandomPrice() {
            return Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        }
    }
}
</script>

<style scoped></style>