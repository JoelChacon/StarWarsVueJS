import Vue from 'vue'
// import App from './App.vue'
import myApp1 from './components/myApp1.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);

new Vue({
    el: '#myApp1',
    render: h => h(myApp1)
})
