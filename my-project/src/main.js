import Vue from 'vue'
// import App from './App.vue'
import myApp from './myApp.vue'
import VueResource from 'vue-resource'
// Vue.use(VueHighcharts);
Vue.use(VueResource);

new Vue({
  el: '#myApp',
  render: h => h(myApp)
})
