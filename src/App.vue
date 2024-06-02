<!-- src/App.vue -->
<template>
  <div id="app" class="main">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/MainNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style>
@import '/src/assets/global.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
