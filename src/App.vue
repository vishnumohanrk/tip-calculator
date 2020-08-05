<template>
  <div>
    <bill-input v-model.number="bill" />
    <div>
      <app-slider
        id="tipPercent"
        :min="0"
        :max="100"
        v-model.number="tipPercent"
      />
      <p>Tip Percent {{ tipPercent }}%</p>
    </div>
    <p>Tip: {{ tipAmt }}</p>
    <p>Total: {{ totalAmt }}</p>
    <div>
      <app-slider id="split" :min="1" :max="10" v-model.number="split" />
      <p>Split {{ split }} person</p>
      <p>Tip Each: {{ tipAmt / split }}</p>
      <p>Bill Each: {{ totalAmt / split }}</p>
    </div>
  </div>
</template>

<script>
import BillInput from './components/BillInput.vue';
import AppSlider from './components/Slider.vue';

export default {
  components: {
    BillInput,
    AppSlider,
  },

  data() {
    return {
      bill: 0,
      tipPercent: 0,
      split: 1,
    };
  },

  computed: {
    tipAmt() {
      return (this.tipPercent / 100) * this.bill;
    },

    totalAmt() {
      return this.bill + this.tipAmt;
    },
  },
};
</script>
