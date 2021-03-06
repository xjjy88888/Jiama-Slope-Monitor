import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './plugins/element.js'
import VueAMap from 'vue-amap';
import VCharts from 'v-charts'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '原 KEY 由于误公开，已置换',
  plugin: ['AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.14'
});

Vue.use(VCharts);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
