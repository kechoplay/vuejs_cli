<template>
  <div id="contact">
    <h1>{{ msg }}</h1>
    <button @click="counter++">Increment</button>
    <label>{{ counter }}</label>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to contact',
      counter: 0
    }
  },
  destroyed() {
    console.log('Destroyed');
  },
  deactivated() {
    console.log('Deactived')
  },
  activated() {
    console.log('Actived');
  }
}
</script>

<style>

</style>
