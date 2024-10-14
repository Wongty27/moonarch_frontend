<template>
    <div class="container">
        <div class="centered-div">
            <FormKit type="form">
                <FormKit type="multi-step">
                    <FormKit type="step" name="contactInformation">
                        <!-- collect name, email, and company info -->
                        <FormKit 
                        type="text" 
                        label="Your Name" 
                        validation="required"
                        />
                        <FormKit 
                        type="email" 
                        label="Your Email" 
                        validation="required|email" 
                        />
                        <FormKit 
                        type="text" 
                        label="Your Company (optional)"
                        help="Are speaking on behalf of an organization?"
                        />
                    </FormKit>
            
                    <FormKit type="step" name="talkDetails">
                        <!-- Get talk title, brief, and track -->
                        <FormKit 
                        type="text" 
                        label="Talk Title" 
                        validation="required"
                        />
                        <FormKit 
                        type="textarea" 
                        label="Talk Brief" 
                        validation="required|length:100"
                        help="What is your talk about?"
                        />
                        <FormKit 
                        type="radio" 
                        label="Talk Track"
                        help="Which track are you submitting for?"
                        :options="['Development', 'Testing', 'Leadership']"
                        />
                    </FormKit>
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>

<script>
//
</script>

<!-- <style>
.container {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh; /* This ensures the container takes up the full viewport height */
}


</style> -->