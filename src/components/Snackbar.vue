<template>
  <v-snackbar
    v-model="visible"
    :timeout="3000"
    top
    color="#E324BD"
    style="opacity: 0.85;"
  >
    {{ message }}
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

    watch(() => props.show, (newVal) => {
      console.log('Show prop changed:', newVal);
      visible.value = newVal;
    });

    watch(visible, (newVal) => {
      if (!newVal) {
        emit('update:show', false);
      }
    });

    watch(() => props.message, (newVal) => {
      console.log('Message prop changed:', newVal);
    });

    return {
      visible,
    };
  },
};
</script>
