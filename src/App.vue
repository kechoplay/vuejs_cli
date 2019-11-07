<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="selectComponent = 'card'">Card</button>
    <button @click="selectComponent = 'appContact'">Contact</button>
    <button @click="selectComponent = 'appDataContact'">Data Contact</button>
    <div>
      <p>{{ selectComponent }}</p>
    </div>
    <keep-alive>
      <component :is="selectComponent"></component>
    </keep-alive>
  </div>
  
</template>

<script>
import Contact from './components/Contact';
import DataContact from './components/DataContact';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectComponent: 'card'
    }
  },
  components: {
    appContact: Contact,
    appDataContact: DataContact,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
