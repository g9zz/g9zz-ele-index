<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body{
    margin:0;
    background-color: rgb(255, 255, 255);
  }
  #app {
    height: 100%;
  }
</style>
