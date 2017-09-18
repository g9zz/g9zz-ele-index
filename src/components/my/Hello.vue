<template>
  <div class="home">
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
              <el-button :plain="true" type="success">哎哟</el-button>
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

    <el-row class="page-middle" type="flex" justify="center">

      <el-col :span="15">
        <div class="content">
          <div class="content-node">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">叶落</el-menu-item>
              <el-menu-item index="3">山城</el-menu-item>
              <el-menu-item index="14">秋天</el-menu-item>
              <el-menu-item index="24">秋天</el-menu-item>
              <el-menu-item index="34">秋天</el-menu-item>
              <el-menu-item index="44">秋天</el-menu-item>
              <el-menu-item index="54">秋天</el-menu-item>
              <el-menu-item index="64">秋天</el-menu-item>
              <el-menu-item index="74">秋天</el-menu-item>
            </el-menu>
          </div>
          <div class="content-list">
            <div class="post-list">
              <a href="#">
                <img class="avatar" src="https://oe9nbfytu.qnssl.com/user/b618677591aa49b3972ece0c7d26b473/thumb" alt="头像">
              </a>
              <div class="post-title">
                <a href="#"><span> 叶落山城秋叶落山城秋叶落山城秋叶落山城秋叶落山城秋</span></a>
              </div>
              <div class="post-msg">
                <span>发表于2017-08-30</span>
              </div>
              <div class="post-reply" >
                <svg aria-hidden="true" class="octicon octicon-comment v-align-middle" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                  <path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
                </svg>
                <span class="reply-num">8</span>
              </div>
            </div>
            <div class="post-list">
              <a href="#">
                <img class="avatar" src="https://oe9nbfytu.qnssl.com/user/b618677591aa49b3972ece0c7d26b473/thumb" alt="头像">
              </a>
              <div class="post-title">
                <a href="#"><span> 叶落山城秋叶落山城秋叶落山城秋叶落山城秋叶落山城秋</span></a>
              </div>
              <div class="post-msg">
                <span class="post-node">默认分类</span>
                •
                <span class="post-author">叶落山城</span>
                •
                <span>发表于2017-08-30</span>
              </div>
              <div class="post-reply" >
                <svg aria-hidden="true" class="octicon octicon-comment v-align-middle" height="16" version="1.1" viewBox="0 0 16 16" width="16">
                  <path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
                </svg>
                <span>8</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="4" >
        <div class="sidebar">
          这是个啥
        </div>
      </el-col>
    </el-row>

    <div class="footer">

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
  .page-middle {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
  }

  .content {
    min-height: 300px;
    background-color: lightsteelblue;
    margin-right: 20px;
    border: 1px solid #d1dbe5;
    border-radius: 4px;
  }
  .sidebar {
    min-height:300px;
    background-color: cornflowerblue;
    margin-left: 20px;
    border: 1px solid #d1dbe5;
    border-radius: 4px;
  }
  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 3px;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .post-list {
    border: 1px solid #d1dbe5;
    overflow: hidden;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }
  .post-title {
    position: absolute;
    top: 1px;
    left: 64px;
    text-align: left;
    line-height: 2em;
    font-size: 15px;
  }
  .post-msg {
    position: absolute;
    bottom: 1px;
    left: 64px;
    text-align: left;
    line-height: 2em;
    font-size: 8px;
  }
  .post-reply {
    position: absolute;
    top: 18px;
    right: 20px;
    text-align: left;
  }
  [class^="el-icon-my"], [class*=" el-icon-my"] {
    font-family:"your-font-family" !important;

    /* 以下内容参照第三方图标库本身的规则 */
    font-size: inherit;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .reply_num {
    font-weight: 600 !important;
    margin-top: 10px;
  }
  .post-node {
    background-color: #e5e5e5;
    color: #999;
    padding: 1px 2px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 10px;
  }
  .post-author{
    color: #999;
  }
</style>

