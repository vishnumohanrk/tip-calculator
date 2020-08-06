<template>
  <div>
    <v-slider
      :min="min"
      :max="max"
      :step="1"
      :value="0"
      @input="inp"
      thumb-label
      hide-details
    />
    <app-info-flex :name="name" :value="value + unit" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    min: Number,
    max: Number,
  },

  data() {
    return {
      value: 0,
    };
  },

  computed: {
    unit() {
      return this.max === 100 ? ' %' : this.value === 1 ? ' Person' : ' People';
    },
  },

  methods: {
    inp(e) {
      this.value = e;
      this.$emit('input', e);
    },
  },
};
</script>
