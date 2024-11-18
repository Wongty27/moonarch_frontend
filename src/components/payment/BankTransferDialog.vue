<template>
    <v-dialog v-model="show" max-width="500px">
        <v-card class="pa-4">
            <v-card-title class="text-h5 mb-4">Bank Transfer Payment</v-card-title>
            
            <!-- Bank Details Section -->
            <v-card-text>
                <v-alert
                    type="info"
                    variant="tonal"
                    class="mb-4"
                >
                    Please transfer the exact amount to the following bank account:
                </v-alert>

                <v-list lines="one">
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-bank"></v-icon>
                        </template>
                        <v-list-item-title>Bank Name</v-list-item-title>
                        <v-list-item-subtitle>MoonArch Bank</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-card"></v-icon>
                        </template>
                        <v-list-item-title>Account Number</v-list-item-title>
                        <v-list-item-subtitle class="d-flex align-center">
                            1234-5678-9012
                            <v-btn
                                density="compact"
                                variant="text"
                                icon="mdi-content-copy"
                                size="small"
                                @click="copyToClipboard('1234-5678-9012')"
                            ></v-btn>
                        </v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account"></v-icon>
                        </template>
                        <v-list-item-title>Account Name</v-list-item-title>
                        <v-list-item-subtitle>MoonArch Enterprise</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cash"></v-icon>
                        </template>
                        <v-list-item-title>Amount to Transfer</v-list-item-title>
                        <v-list-item-subtitle class="font-weight-bold">
                            RM {{ total.toFixed(2) }}
                        </v-list-item-subtitle>
                    </v-list-item>
                </v-list>

                <!-- Upload Payment Proof -->
                <v-divider class="my-4"></v-divider>
                
                <div class="mb-4">
                    <div class="text-subtitle-1 mb-2">Upload Payment Proof</div>
                    <v-file-input
                        v-model="paymentProof"
                        :rules="proofRules"
                        accept="image/*"
                        placeholder="Select your payment receipt"
                        prepend-icon="mdi-camera"
                        label="Payment Receipt"
                        :show-size="true"
                        density="compact"
                    ></v-file-input>
                </div>

                <!-- Reference Number -->
                <v-text-field
                    v-model="referenceNumber"
                    :rules="referenceRules"
                    label="Transfer Reference Number"
                    placeholder="Enter your bank transfer reference"
                    density="compact"
                ></v-text-field>
            </v-card-text>

            <!-- Action Buttons -->
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    bg-color="#E324BD"
                    color="white"
                    @click="closeDialog"
                >
                    Cancel
                </v-btn>
                <v-btn 
                    bg-color="#3E0054"
                    color="white"
                    :disabled="!isValid"
                    @click="confirmTransfer"
                >
                    Confirm Transfer
                </v-btn>
            </v-card-actions>

            <!-- Success Snackbar -->
            <v-snackbar
                v-model="showSnackbar"
                color="success"
                timeout="3000"
            >
                {{ snackbarMessage }}
            </v-snackbar>
        </v-card>
    </v-dialog>
</template>

<script setup>
    import { ref, watch, computed } from 'vue'

    const props = defineProps({
        modelValue: Boolean,
        total: Number
    })

    const emit = defineEmits(['update:modelValue', 'payment-processed'])

    const show = ref(props.modelValue)
    const paymentProof = ref(null)
    const referenceNumber = ref('')
    const showSnackbar = ref(false)
    const snackbarMessage = ref('')

    // Validation rules
    const proofRules = [
        v => !!v || 'Payment proof is required',
        v => !v || v.size < 5000000 || 'File size should be less than 5MB'
    ]

    const referenceRules = [
        v => !!v || 'Reference number is required',
        v => v.length >= 6 || 'Reference number should be at least 6 characters'
    ]

    // Computed property for form validation
    const isValid = computed(() => {
        return paymentProof.value && referenceNumber.value.length >= 6
    })

    // Watch for dialog state changes
    watch(() => props.modelValue, (newVal) => {
        show.value = newVal
    })

    watch(show, (newVal) => {
        emit('update:modelValue', newVal)
    })

    // Methods
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            snackbarMessage.value = 'Account number copied to clipboard'
            showSnackbar.value = true
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    const closeDialog = () => {
        show.value = false
        paymentProof.value = null
        referenceNumber.value = ''
    }

    const confirmTransfer = async () => {
        try {
            // Simulate processing
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            emit('payment-processed', {
                status: 'success',
                method: 'bank_transfer',
                refnum: referenceNumber.value
            })
            
            snackbarMessage.value = 'Transfer confirmation submitted successfully'
            showSnackbar.value = true
            
            setTimeout(() => {
                closeDialog()
            }, 1000)
        } catch (error) {
            console.error('Transfer confirmation failed:', error)
        }
    }
</script>

<style scoped>
    .v-list-item-subtitle {
        opacity: 1 !important;
    }
</style>