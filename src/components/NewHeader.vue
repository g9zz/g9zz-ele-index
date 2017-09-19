<template>
  <header id="header" class="">
    <div class="container">
      <div class="global-nav">
        <button class="navbar-toggle">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="brand" href="#">烤天下</a>
        <nav class="navbar">
          <ul class="nav">
            <li class="pc-nav-home">
              <a href="#">首页</a>
            </li>
            <li class="pc-nav-food">
              <a href="#">招牌美食</a>
            </li>
            <li class="pc-nav-char">
              <a href="#">特色活动</a>
            </li>
            <li class="pc-nav-join">
              <a href="#">招商加盟</a>
            </li>
            <li class="pc-nav-ente">
              <a href="p#">企业概况</a>
            </li>
            <li class="pc-nav-menn">
              <a href="#">联系我们</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import my from '../assets/js/my.js'
  export default {
    data () {
      return {
      }
    },
    mounted(){
      my.core();
      my.navbar();

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/home.css";
  @import "../assets/css/icon.css";
</style>
