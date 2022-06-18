<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <label for="start">Start date:</label>
      <input type="date" id="start-date" name="start">
      <label for="end">End date:</label>
      <input type="date" id="end-date" name="end">
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
};
</script>
