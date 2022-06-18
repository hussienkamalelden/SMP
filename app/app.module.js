import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import filterTable from './components/vue-components/filter-table.vue';
import page404 from './pages/page-404.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('filterTable', (createVueComponent) => {
  return createVueComponent(Vue.component('filterTable', filterTable));
});

angular.module('appModule').directive('page404', (createVueComponent) => {
  return createVueComponent(Vue.component('page404', page404));
});
