<template>
    <div class="header">
      <div class="nav">
        <el-row :gutter="10" type="flex" justify="center">
          <el-col :xs="12" :sm="4" :md="4" :lg="4">
            <div><img class="logo" src="../../assets/logo-vue.png" alt="LOGO"></div>
          </el-col>
          <el-col :xs="8" :sm="16" :md="16" :lg="16">
            <div></div>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <div class="login-button">
              <!--<el-button :plain="true" type="success">哎哟</el-button>-->
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  叶落山城秋<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="nav-bottom" >
        <el-row type="flex" justify="center">

          <el-col class="nav-card" :span="3">
            <el-card class="box-card">
              <div>叶落</div>
            </el-card>
          </el-col>
          <el-col class="nav-card" :span="3" offset="1">
            <el-card class="box-card">
              <div>叶落</div>
            </el-card>
          </el-col>
          <el-col class="nav-card" :span="3" offset="1">
            <el-card class="box-card">
              <div>叶落</div>
            </el-card>
          </el-col>
          <el-col class="nav-card" :span="3" offset="1">
            <el-card class="box-card">
              <div>叶落</div>
            </el-card>
          </el-col>
          <el-col class="nav-card" :span="3" offset="1">
            <el-card class="box-card">
              <div>叶落</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .header {
    min-height: 260px;
    background-color: aliceblue;
  }
  @media (min-width: 1200px){
    .nav-bottom .el-col-lg-4 {
      width: 20%!important;
    }
  }
  @media (min-width: 768px){
    .nav-bottom .el-col-sm-4 {
      width: 20%!important;
    }
  }
  .nav-bottom {
    padding-left: 40px;
    padding-right: 40px;
  }

  .nav {
    min-height: 60px;
    box-shadow: 15px 6px 11px #dad3d2;
    background-color: rgba(176, 196, 222, 0.29);
    /*filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;*/
  }
  .logo{
    width: 60px;
    height:60px;
    margin-left: 15px;
    margin-top: 5px;
  }
  .login-button {
    margin-top: 15px;
  }
  .nav-card {
    margin-top: 55px;

  }

  .box-card {
    min-height: 85px;
    background-image: url("//cdn.static.jianda.com/upload/image/b1/fc/b1fc8a71fb8aa23de5ad4d4d3b15438324c876f73fed2cb40a2244303353e811.jpg");
  }
</style>

