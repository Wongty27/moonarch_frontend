<template>
  <v-snackbar
    v-model="visible"
    :timeout="3000"
    top
    color="#E324BD"
    style="opacity: 0.85;"
  >
  <v-row>
    <span class="pa-2">{{ message }}</span>
    <v-btn
      @click="closeSnackbar"
      small
      text
      class="close-btn"
    >
      close
    </v-btn>
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
  margin-left:80%;
  color: white;
  text-transform: none;
  background-color: transparent;
  box-shadow: none;
}
</style>
