import Vue from 'vue'
import Contact from './components/Contact.vue'
import DataContact from './components/DataContact'
import Card from './components/Card';
import App from './App.vue'

Vue.component('contact', Contact);
Vue.component('data-contact', DataContact);
Vue.component('card', Card);

new Vue({
  el: '#app',
  render: h => h(App)
})
