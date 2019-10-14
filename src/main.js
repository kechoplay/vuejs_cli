import Vue from 'vue'
import Contact from './Contact.vue'
import DataContact from './DataContact'
import App from './App.vue'

Vue.component('contact', Contact);
Vue.component('data-contact', DataContact);

new Vue({
  el: '#app',
  render: h => h(App)
})
