<template>
  <v-text-field
    class="mt-3"
    label="Your Bill"
    type="number"
    :value="null"
    @input="value => $emit('input', Number(value))"
    outlined
  ></v-text-field>
</template>

<script>
export default {};
</script>
