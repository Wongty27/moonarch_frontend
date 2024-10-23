<template>
    <div class="container">
        <div class="centered-div">
            <FormKit type="form">
                <FormKit type="multi-step">
                    <FormKit type="step" name="Contact">
                        <!-- collect name, email, and company info -->
                        <FormKit 
                        type="text" 
                        label="First Name" 
                        />
                        <FormKit 
                        type="text" 
                        label="Last Name" 
                        />
                        <FormKit 
                        type="text" 
                        label="Phone number" 
                        validation="required|regex:/^\+60\d{9}$/"
                        validation-messages="{ regex: 'Phone number must be in the format +60xxxxxxxxx (e.g., +60123456789).' }"
                        placeholder="+60123456789" />
                        <FormKit 
                        type="email" 
                        label="Email" 
                        validation="required|email" 
                        />
                        <FormKit 
                        type="password" 
                        label="Password"
                        validation="required"
                        />
                    </FormKit>
            
                    <FormKit type="step" name="Shipping">
                        <!-- Get talk title, brief, and track -->
                        <FormKit 
                        type="textarea" 
                        label="Street Address" 
                        validation="required"
                        />
                        <FormKit 
                        type="text" 
                        label="City" 
                        validation="required|length:100"
                        />
                        <FormKit 
                        type="number" 
                        label="Postcode" 
                        validation="required|length:100"
                        />

                        <FormKit
                          type="select"
                          name="framework"
                          label="Choose your favorite frontend framework"
                          :options="frameworks"
                          input-class="custom-select"

                        />

                        <FormKit 
                        type="radio" 
                        label="State"
                        :options='["Malaysia"]'
                        v-model="selectedState"
                        />
                    </FormKit>
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>

<script>
import { FormKit } from '@formkit/vue';

export default {
  components: { FormKit },
  data() {
    return {
      selectedState: 'Malaysia',
      frameworks : [
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
        { label: 'Putrajaya', value: 'putrajaya'}
      ]
    };
  },
};
</script>

<style>

.formkit-input {
  color: #ffffff; /* Set input text color to white */
}

.custom-select {
  background-color: #000000; /* Change to desired color */
}

.formkit-form{
  width: 100%;
}

.centered-div {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;    /* Vertically center */
  height: 100vh;          /* Full viewport height */
}


</style>


