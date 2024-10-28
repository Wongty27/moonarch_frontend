<template>
    <v-container class="hero d-flex align-items-center my-4" >
      <v-row align="center" justify="center">
        <v-icon class="mx-5" size=60> mdi-account-circle </v-icon>
        <v-text class="font-weight-bold text-h3"> User ID's Profile </v-text> 
      </v-row>
    </v-container>

    <v-container>
      <v-row class="mb-2">
        <v-col cols="6" class="text-center">
          <v-text class="text-h5"> Customer Information </v-text>
        </v-col>

        <v-col  cols="6" class="text-center">
          <v-text class="text-h5"> Shipping Information </v-text>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="6">
          <v-text-field v-model="Name" label="First Name"></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field v-model="State" label="State"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="6">
          <v-text-field v-model="Phone" label="Last Name"></v-text-field>
        </v-col>  

        <v-col cols="6"> 
          <v-text-field v-model="City" label="City"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="6">
          <v-text-field v-model="Email" label="Email"></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field v-model="postal" label="Postal Code"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="6">
          <v-date-input v-model="dob" label="Date of Birth" ></v-date-input>
        </v-col>

        <v-col cols="6">
          <v-text-field v-model="street" label="Street Address"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mb-2">
        <v-col cols="12">
          <v-btn class="mt-2 bg-primary" type="submit" block v-model="button">Edit Information & Save </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
 
<script>
//
</script>   

<style scoped>
.hero {
  background: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/223e6792880429.5e569ff84ebef.gif');
  background-size: cover;
  height: 200px;
  width : 100%
}

h1 {
  height: 100%;
}

</style>
