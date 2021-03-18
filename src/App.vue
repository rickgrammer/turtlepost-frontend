<template>
  <div id="app">
    <!-- <Getin msg="Welcome to Your Vue.js App"/>
    <Frame />
    <Wide /> -->
    <Navigator />
    <router-view> </router-view>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'

export default {
  name: 'App',
  components: {
    Navigator,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
