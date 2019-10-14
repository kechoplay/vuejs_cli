<template>
  <div id="data-contact">
    <h1>{{ msg }}</h1>
    <p>My address: {{ address }}</p>
    <hr>
    <button v-on:click="changePhone()">Show my phone</button>
  </div>
</template>

<script>
export default {
  name: 'data-contact',
  data () {
    return {
      msg: 'Welcome to data contact',
      address: 'Xuan dinh bac tu liem'
    }
  },
  methods: {
      changePhone() {
          this.address = 'Xuan tao bac tu liem';
      }
  }
}
</script>

<style>

</style>
