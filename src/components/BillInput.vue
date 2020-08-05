<template>
  <label for="bill">
    Bill
    <input
      type="number"
      id="bill"
      placeholder="Enter Bill Amount"
      :value="null"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {};
</script>
