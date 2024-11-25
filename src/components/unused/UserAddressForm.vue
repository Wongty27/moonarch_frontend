<template>
    <v-card :style="cardStyle" :class="cardClass">
        <v-divider v-if="showDivider" class="border-opacity-75" :thickness="4" color="#E324BD"></v-divider>
        <v-form ref="form" @submit.prevent="handleSubmit">
            <!-- Email Field -->
            <v-row class="ma-auto pa-2">
                <v-text-field
                    v-model="formData.email"
                    label="Email address*"
                    type="email"
                    placeholder="user_id@domain.com"
                    :disabled="isProfile"
                    clearable
                    required
                ></v-text-field>
            </v-row>

            <v-divider v-if="showDivider" class="border-opacity-25 mb-3 mx-2"></v-divider>

            <!-- Name Fields -->
            <v-row>
                <v-col cols="6" class="ma-auto pa-5">
                    <v-text-field
                        v-model="formData.firstName"
                        label="First Name*"
                        placeholder="John"
                        clearable
                        required
                        :rules="[v => !!v || 'First name is required']"
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="ma-auto pa-5">
                    <v-text-field
                        v-model="formData.lastName"
                        label="Last Name*"
                        placeholder="Doe"
                        clearable
                        required
                        :rules="[v => !!v || 'Last name is required']"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- Phone Number -->
            <v-row class="ma-auto pa-2">
                <v-text-field
                    v-model="formData.phoneNumber"
                    label="Phone Number*"
                    placeholder="Enter phone number"
                    clearable
                    required
                    :rules="[v => !!v || 'Phone number is required']"
                ></v-text-field>
            </v-row>

            <!-- Company Name - Optional for billing -->
            <v-row v-if="!isProfile" class="ma-auto pa-2">
                <v-text-field
                    v-model="formData.companyName"
                    label="Company Name"
                    placeholder="optional"
                    clearable
                ></v-text-field>
            </v-row>

            <!-- Address -->
            <v-row class="ma-auto pa-2">
                <v-textarea
                    v-model="formData.address"
                    label="Address*"
                    placeholder="Enter Address"
                    clearable
                    required
                    :rules="[v => !!v || 'Address is required']"
                ></v-textarea>
            </v-row>
            
            <!-- City, Postcode -->
            <v-row>
                <v-col cols="6" class="ma-auto pa-5">
                    <v-text-field
                        v-model="formData.city"
                        label="City*"
                        placeholder="City"
                        required
                        :rules="[v => !!v || 'City is required']"
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="ma-auto pa-5">
                    <v-text-field
                        v-model="formData.postcode"
                        :rules="postCodeRules"
                        label="Postcode/ZIP*"
                        placeholder="Enter Postcode/ZIP"
                        maxlength="5"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- State, Country -->
            <v-row>
                <v-col cols="6" class="ma-auto pa-5">
                    <v-select
                        v-model="formData.state"
                        label="State/Province*"
                        :items="states"
                        required
                    ></v-select>
                </v-col>

                <v-col cols="6" class="ma-auto pa-5">
                    <v-text-field
                        v-model="formData.country"
                        readonly
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- Submit Button - Optional -->
            <v-row v-if="showSubmitButton" class="ma-auto pa-2">
                <v-btn
                    color="primary"
                    type="submit"
                    block
                    :loading="loading"
                >
                    {{ submitButtonText }}
                </v-btn>
            </v-row>
        </v-form>
        
        <v-divider v-if="showDivider" class="border-opacity-75" :thickness="4" color="#E324BD"></v-divider>
    </v-card>
</template>

<script setup lang="ts">
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  companyName: string;
  address: string;
  city: string;
  postcode: string;
  state: string;
  country: string;
}

interface Props {
  isProfile?: boolean;
  initialData?: Partial<FormData>;
  showDivider?: boolean;
  showSubmitButton?: boolean;
  submitButtonText?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isProfile: false,
  initialData: () => ({}),
  showDivider: true,
  showSubmitButton: false,
  submitButtonText: 'Submit',
  loading: false
});

const emit = defineEmits<{
  (e: 'submit', data: FormData): void;
  (e: 'update:modelValue', value: FormData): void;
}>();

const states = [
  'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Melaka', 
  'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya', 
  'Sabah', 'Sarawak', 'Selangor'
] as const;

const postCodeRules = [
  (v: string) => !!v || 'Postcode is required',
  (v: string) => /^.{5}$/.test(v) || 'Postcode must be 5 digits',
];

const formData = ref<FormData>({
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  companyName: '',
  address: '',
  city: '',
  postcode: '',
  state: '',
  country: 'Malaysia',
  ...props.initialData
});

const cardStyle = computed(() => 
  props.isProfile ? {} : { 'background-color': '#001655' }
);

const cardClass = computed(() => 
  props.isProfile ? '' : 'ma-5 bitstream'
);

const form = ref<any>(null);

const handleSubmit = async () => {
  const { valid } = await form.value?.validate();
  if (valid) {
    emit('submit', formData.value);
  }
};

// Watch for changes in initialData
watch(
  () => props.initialData,
  (newValue) => {
    formData.value = {
      ...formData.value,
      ...newValue
    };
  },
  { deep: true }
);
</script>

<style scoped>
.bitstream {
    font-family: 'Bitstream Vera Sans Mono', monospace;
}
</style>