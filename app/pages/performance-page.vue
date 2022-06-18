<template>
  <div class="c-dashboard">
    <form class="c-filters__container">
      <label class="start-date-label" for="start">Start date:</label>
      <input type="date" id="start-date" name="start" :min="min" :max="max" @input="startDate()">
      <label class="end-date-label" for="end">End date:</label>
      <input type="date" id="end-date" name="end" :min="endMin" :max="max" @input="endDate()" disabled>
    </form>
    <div class="c-dashboard__header">
      <performance-chart-component :currMin="currMin" :currMax="currMax" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from 'axios';
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  data() {
    return {
      min: "2017- 01-01",
      max: "2017-12-31",
      endMin: "2017- 01-01",
      currMin: "2017- 01-01",
      currMax: "2017-12-31",
    }
  },
  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("YYYY-MM-DD");
    },
    startDate() {
      this.currMin = document.getElementById("start-date").value;
      document.getElementById("end-date").disabled = false;
      this.endMin = this.currMin;
      console.log(this.endMin)
    },
    endDate() {
      this.currMax = document.getElementById("end-date").value;
    },
  },
  mounted() {
    axios.get('https://fe-task.getsandbox.com/performance', {})
      .then(response => {
        this.min = this.formatDate(response.data[0].date_ms);
        this.endMin = this.min;
        this.max = this.formatDate(response.data[response.data.length - 1].date_ms);
      })
  }
};
</script>
