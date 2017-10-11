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
              <a href="#" >叶落</a>
            </li>
            <li class="pc-nav-food">
              <a href="#">Github</a>
            </li>
            <li class="pc-nav-char">
              <a href="#">微博</a>
            </li>
            <!--<li class="pc-nav-join">-->
              <!--<a href="#">招商加盟</a>-->
            <!--</li>-->
            <!--<li class="pc-nav-ente">-->
              <!--<a href="p#">企业概况</a>-->
            <!--</li>-->
            <!--<li class="pc-nav-menn">-->
              <!--<a href="#">联系我们</a>-->
            <!--</li>-->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import my from '../assets/js/my.js'
  import cookie from '../utils/cookie.js'
  export default {
    data () {
      return {
      }
    },
    mounted(){
      my.core();
      my.navbar();
      this.syncAuth();

    },
    methods: {
      syncAuth() {
        let token =  this.$route.query.secret;
        let hid = this.$route.query.secretId;
        if (token && hid) {
          cookie.setCookie('token',token);
          cookie.setCookie('hid',hid);
          this.$router.push({
            path: '/?hello=授权登录成功'
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/home.css";
  @import "../assets/css/icon.css";
</style>
