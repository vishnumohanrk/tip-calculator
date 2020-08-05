<template>
  <label :for="id">
    {{ id }}
    <input
      type="range"
      :id="id"
      :min="min"
      :max="max"
      :step="1"
      :value="0"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    id: String,
    min: Number,
    max: Number,
  },
};
</script>
