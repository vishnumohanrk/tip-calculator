<template>
  <p
    class="d-flex justify-space-between mt-2"
    :class="bold ? `font-weight-black text-h5` : `subtitle-1`"
    style="width:100%"
  >
    <span>{{ name }}</span>
    <span>{{ valueString }}</span>
  </p>
</template>

<script>
export default {
  props: {
    name: String,
    value: [String, Number],
    bold: Boolean,
  },

  computed: {
    valueString() {
      return this.name !== 'Tip Percent' && this.name !== 'Split'
        ? this.value.toFixed(2) + ' $'
        : this.value;
    },
  },
};
</script>
