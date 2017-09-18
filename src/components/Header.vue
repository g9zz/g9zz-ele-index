<template>

  <div class="navigation hide-nav">
      <div class="top-head">
        <div class="top-nav-musk" style="opacity: 0.3;"></div>
        <div class="top-head-content">
          <div class="navbar-brand size-small mobile-hide"><a class="tha" href="/"><span class="logo"></span></a>
          </div>
          <div class="top-head-right">
            <ul class="top-nav-ul">
              <li class="dot">
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    我加入的社区<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="dot"><a class="main" href="/explore">所有社区</a></li>
              <li class="dot"><a class="main" href="/site/intro">创建新社区</a></li>
            </ul>
            <ul class="nav-user">
              <li class="mobile-hide">
                <a class="tha">
                    <span class="ant-badge" title="0">
                      <i class="notice-icon"></i>
                    </span>
                </a>
              </li>
              <li class="mobile-hide">
                <a class="tha">
                  <el-badge is-dot class="item">
                    <i class="el-icon-message" style="color: #fff"></i>
                  </el-badge>
                </a>
              </li>
              <li class="user-li">
                <a class="tha user ant-dropdown-link" href="javascript:;">
                  <img
                    src="//cdn.static.jianda.com/upload/avatar/27/5d/275dae1680450c693395a48ec842409fb443d6f73023db9cb5417f64f5f51c6a.jpg"
                    class="avatar">
                  <el-dropdown>
                      <span class="el-dropdown-link">
                        叶落山城<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>黄金糕</el-dropdown-item>
                      <el-dropdown-item>狮子头</el-dropdown-item>
                      <el-dropdown-item>螺蛳粉</el-dropdown-item>
                      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                      <router-link to="/my">
                        <el-dropdown-item>我</el-dropdown-item>
                      </router-link>
                    </el-dropdown-menu>
                  </el-dropdown>
                </a>
              </li>
              <li class="mobile-show">
                <a class="tha" href="/notifications">
                    <span class="ant-badge" title="0">
                      <i class="anticon anticon-message"></i>
                    </span>
                </a>
              </li>
              <li class="mobile-show">
                <a class="tha active" href="/">
                  <i class="anticon anticon-home"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="left-nav" class="left-nav">
        <div class="logo-white mobile-show"><a href="/"><span class="icon"></span><span class="logo"></span></a></div>
        <div class="nav-all-site">
          <div class="home"><a href="/"><i class="anticon anticon-home"></i><!-- react-text: 48 --> 全站首页
            <!-- /react-text --></a></div>
          <div class="explore"><a href="/explore"><i class="anticon anticon-appstore"></i><!-- react-text: 52 --> 全部社区
            <!-- /react-text --></a></div>
          <div><h2>我加入的社区</h2>
            <ul>
              <li><a class="" href="/site/58ca90f53ead5c783f7bacf1"><span><img
                src="//cdn.static.jianda.com/upload/avatar/d7/08/d708e47ff44485ea66e1570c84c5a306b517cffb89764cc6cdc72ba83ffc1940.jpg"
                class="avatar"></span><!-- react-text: 60 -->简答官方社区<!-- /react-text --></a></li>
              <li><a class="" href="/site/591b12e0b29b6762ca71afb0"><span><img
                src="//cdn.static.jianda.com/upload/avatar/47/2e/472e32b69dacf180fa0d3268149075665553319a7208aeadcaf6665e13de2102.jpg"
                class="avatar"></span><!-- react-text: 65 -->程序猿<!-- /react-text --></a></li>
            </ul>
          </div>
          <div><h2>官方推荐社区</h2>
            <ul>
              <li><a class="" href="/site/591c22a9b29b6765c5499798"><span><img
                src="//cdn.static.jianda.com/upload/avatar/20/a9/20a964bc1bc919919d17d00252dc00966e081bf2ce66f2f2bf8c1dd80a641d90.jpg"
                class="avatar"></span><!-- react-text: 73 -->葡萄酒<!-- /react-text --></a></li>
              <li><a class="active" href="/site/58dfc9b911cff420007ea580"><span><img
                src="//cdn.static.jianda.com/upload/avatar/af/91/af91d15773c0de2581a948f867d28850ea4a7991f01b9b481cf74313c4ddbf22.jpg"
                class="avatar"></span><!-- react-text: 78 -->咖啡<!-- /react-text --></a></li>
              <li><a class="" href="/site/591bfd2ab29b67251e31bce7"><span><img
                src="//cdn.static.jianda.com/upload/avatar/5e/20/5e20a1ee0edd79da05d16955c4594eb8f580c9b52ba7ee691803364fd9e60825.jpg"
                class="avatar"></span><!-- react-text: 83 -->摄影<!-- /react-text --></a></li>
              <li><a class="" href="/site/58ca90f53ead5c783f7bacf1"><span><img
                src="//cdn.static.jianda.com/upload/avatar/d7/08/d708e47ff44485ea66e1570c84c5a306b517cffb89764cc6cdc72ba83ffc1940.jpg"
                class="avatar"></span><!-- react-text: 88 -->简答官方社区<!-- /react-text --></a></li>
              <li><a class="" href="/site/58eda777b29b672dc841c42d"><span><img
                src="//cdn.static.jianda.com/upload/avatar/c9/87/c987b232dc6db25c24982c2e32a9ca847e24e1ae1929b2fed2ad10a2f8d36714.jpg"
                class="avatar"></span><!-- react-text: 93 -->烘焙乐趣<!-- /react-text --></a></li>
            </ul>
          </div>
        </div>
      </div>
      <a class="close-nav show-nav"><i class="anticon anticon-close"></i></a>
    <HeaderNode></HeaderNode>
  </div>


</template>

<script>
  import HeaderNode from '../components/HeaderNode.vue'
  export default {
    data () {
      return {}
    },
    components:{HeaderNode},
    methods: {}
  }
</script>

<style scoped>
  is-dot {
    top: 14px;
  }

  .el-dropdown-link {
    color: #fff;
  }

  .item {
    /*margin-top: 10px;*/
    /*margin-right: 40px;*/
  }
</style>

