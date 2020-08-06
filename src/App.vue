<template>
  <app-layout>
    <app-card-title />
    <v-card-text>
      <v-form>
        <app-bill-input v-model.number="billValue" />
        <app-slider
          v-model.number="tipPercent"
          name="Tip Percent"
          :min="0"
          :max="100"
        />
        <app-info-flex name="Tip Amount" :value="tipAmt" />
        <v-divider class="mb-3" />
        <app-info-flex bold name="Grand Total" :value="totalAmt" />

        <app-slider
          v-model.number="split"
          name="Split"
          :min="1"
          :max="10"
          class="mt-8"
        />
        <app-info-flex name="Tip Each" :value="tipAmt / split" />
        <app-info-flex name="Bill Each" :value="totalAmt / split" />
      </v-form>
    </v-card-text>
  </app-layout>
</template>

<script>
import AppLayout from './components/BaseComp/Layout.vue';
import AppCardTitle from './components/BaseComp/CardTitle.vue';
import AppBillInput from './components/BillInput.vue';
import AppSlider from './components/Slider.vue';

export default {
  components: {
    AppLayout,
    AppCardTitle,
    AppBillInput,
    AppSlider,
  },

  data() {
    return {
      billValue: 0,
      tipPercent: 0,
      split: 1,
    };
  },

  computed: {
    tipAmt() {
      return (this.tipPercent / 100) * this.billValue;
    },

    totalAmt() {
      return this.tipAmt + this.billValue;
    },
  },
};
</script>
