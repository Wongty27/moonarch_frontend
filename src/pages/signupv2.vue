<template>
    <div class="container">
        <div class="centered-div">
          <h1 class="text-center mb-10">Sign Up Form</h1>
          <FormKit type="form" @submit="submituserForm(userForm)">
            <FormKit 
              type="multi-step"
              :validation-behavior="{ timing: 'live' }"
              :preserve-errors="true"
              tab-style="progress"
              :allow-incomplete="false"
            >
              <FormKit type="step" 
                name="Contact"   
                :validation-rules="{ required: true }"
                :validation-messages="{ required: 'Please complete all required fields before proceeding.' }">
                  <!-- collect name, email, and company info -->
                  <FormKit 
                  type="text" 
                  label="First Name" 
                  v-model = nameForm.first_name
                  validation="required|max_length:127" 
                  validation-messages="{ required: 'Full name is required.', max_length: 'Must be at most 127 characters.' }" 
                  />
                  <FormKit 
                  type="text" 
                  label="Last Name" 
                  v-model = nameForm.last_name
                  validation="required|max_length:128" 
                  validation-messages="{ required: 'Full name is required.', max_length: 'Must be at most 128 characters.' }" 
                  />

                  <FormKit 
                  type="text" 
                  label="Phone number" 
                  validation="required|regex:/^\+60\d{9}$/|max_length:20"
                  validation-messages="{ regex: 'Phone number must be in the format +60xxxxxxxxx (e.g., +60123456789) and not more than2 0 characters.' }"
                  placeholder="+60123456789"
                  v-model = userForm.phone_number
                  />
                  <FormKit 
                  type="email" 
                  label="Email" 
                  validation="required|email|max_length:255" 
                  validation-messages="{ required: 'Email is required.', email: 'Must be a valid email address.', max_length: 'Must be at most 255 characters.' }" 
                  v-model = userForm.email
                  />
                  <FormKit 
                    type="password" 
                    label="Password"
                    validation="required|length:6,255" 
                    :validation-visibility="'live'"
                    :validation-messages="{ 
                      required: 'Password is required.', 
                      length: 'Password must be between 6 and 255 characters.' 
                    }" 
                    v-model="userForm.password"
                  />
              </FormKit>
      
              <FormKit type="step" 
                name="Shipping" 
                :validation-rules="{ required: true }"
                :validation-messages="{ required: 'Please complete all required fields before proceeding.' }">
                  <!-- Get talk title, brief, and track -->
                  <FormKit 
                    type="textarea" 
                    label="Street Address" 
                    validation="required"
                    v-model = addressForm.street
                  />
                  <FormKit 
                    type="text" 
                    label="City" 
                    validation="required|length:1"
                    v-model = addressForm.city
                  />
                  <FormKit 
                    type="number" 
                    label="Postcode" 
                    validation="required|length:5,5" 
                    v-model = addressForm.postcode
                  />

                  <FormKit
                    type="select"
                    name="framework"
                    label="State"
                    :options="frameworks"
                    input-class="custom-select"
                    v-model = addressForm.state
                  />

                  <FormKit 
                    type="radio" 
                    label="State"
                    :options='["Malaysia"]'
                    v-model="addressForm.country"
                  />
              </FormKit>
            </FormKit>
          </FormKit>
        </div>
    </div>
</template>

<script setup>
  import { FormKit } from '@formkit/vue';
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/formstore';

  const UserStore = useUserStore();

  const frameworks = ref([
    { label: 'Johor', value: 'johor' },
    { label: 'Kedah', value: 'kedah' },
    { label: 'Kelantan', value: 'kelantan' },
    { label: 'Melaka', value: 'melaka' },
    { label: 'Negeri Sembilan', value: 'negeri_sembilan' },
    { label: 'Pahang', value: 'pahang' },
    { label: 'Penang', value: 'penang' },
    { label: 'Perak', value: 'perak' },
    { label: 'Perlis', value: 'perlis' },
    { label: 'Sabah', value: 'sabah' },
    { label: 'Sarawak', value: 'sarawak' },
    { label: 'Selangor', value: 'selangor' },
    { label: 'Terengganu', value: 'terengganu' },
    { label: 'Kuala Lumpur', value: 'kuala_lumpur' },
    { label: 'Labuan', value: 'labuan' },
    { label: 'Putrajaya', value: 'putrajaya' }
  ]);

  const nameForm = reactive({
    first_name: "",
    last_name: ""
  })

  const full_name = computed (() => `${nameForm.first_name.trim()} ${nameForm.last_name.trim()}`);

  const addressForm = reactive ({
    street: '',
    city: '',
    postcode: null,
    state: '',
    country: 'Malaysia'
  })

  const address = computed (() => `${addressForm.street.trim()}, ${addressForm.city.trim()}, ${addressForm. postcode}, ${addressForm.state.trim()}, ${addressForm.country.trim()}`);

  const userForm = reactive ({
    email: '',
    password : '',
    phone_number: '',
    user_type: 'customer'
  })

  const resetUserForm  = () => {
    nameForm.first_name =  "",
    nameForm.last_name =  "",
    addressForm.street =  "",
    addressForm.city = "",
    addressForm.postcode = null,
    addressForm.state = "",
    addressForm.country = "Malaysia",
    userForm.email = "",
    userForm.password = "",
    userForm.phone_number = "",
    userForm.user_type = "Customer"
  }

  const submituserForm = async(form_obj) => {
    console.log(full_name.value);
    const finalFormData = {
      full_name: full_name.value,
      address: address.value,
      ...form_obj
    }

    await UserStore.addUsers(finalFormData);
    resetUserForm();
  }

</script>

<style>

.formkit-input {
  color: #ffffff; /* Set input text color to white */
}

.custom-select {
  background-color: #000000; /* Change to desired color */
}

.formkit-form {
  width: 100%;
}

.container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  min-height: 100vh; /* Full viewport height for centering */
}

.centered-div {
  width: 100%;
  max-width: 500px; /* Limits the form width */	
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

</style>
