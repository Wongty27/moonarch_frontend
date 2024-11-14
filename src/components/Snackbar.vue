<template>
  <v-snackbar
    v-model="visible"
    :timeout="3000"
    top
    color="#E324BD"
    style="opacity: 0.8;"
  >
  <v-row >
    <v-col cols="9" class="mt-2">{{ message }}</v-col>
    <v-col cols="3">
    <v-btn
      @click="closeSnackbar"
      small
      text
      class="close-btn"
    >
      close
    </v-btn>
  </v-col>
  </v-row>
  </v-snackbar>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Snackbar',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const visible = ref(props.show);

    const closeSnackbar = () => {
      visible.value = false;
      emit('update:show', false);
    };

    watch(() => props.show, (newVal) => {
      visible.value = newVal;
    });

    watch(visible, (newVal) => {
      if (!newVal) {
        emit('update:show', false);
      }
    });

    return {
      visible,
      closeSnackbar,
    };
  },
};
</script>

<style>

.close-btn {
  color: white;
  text-transform: none;
  background-color: transparent;
  box-shadow: none;
}
</style>
