import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import NewArray from './NewArray.vue'
window.axios = require('axios');

Vue.component('newArray', NewArray)

new Vue({
  el: '#app',
  render: h => h(App)
})
