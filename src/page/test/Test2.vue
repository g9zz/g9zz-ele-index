<template>
  <div id="my-all">
    <div class="app">
      <div class="navigation hide-nav">
        <div class="top-head">
          <div class="top-nav-musk" style="opacity: 1;"></div>
          <div class="top-head-content">
            <div class="navbar-brand size-small mobile-hide"><a class="tha" href="/"><span class="logo"></span></a>
            </div>
            <div class="top-head-right">
              <ul class="top-nav-ul">
                <li class="dot"><el-dropdown @command="handleCommand">
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
                </el-dropdown></li>
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
                    <el-badge  is-dot class="item">
                      <i class="el-icon-message" style="color: #fff"></i>
                    </el-badge>
                  </a>
                </li>
                <li class="user-li">
                  <a class="tha user ant-dropdown-link" href="javascript:;">
                    <img src="//cdn.static.jianda.com/upload/avatar/27/5d/275dae1680450c693395a48ec842409fb443d6f73023db9cb5417f64f5f51c6a.jpg" class="avatar">
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        叶落山城<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
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

        <div>
          <div class="top-nav top-nav-empty mobile-show">
            <div class="top-nav-musk"></div>
            <div class="clearfix">
              <div class="brand-name brand-jianda">
                <div class="left-menu-btn mobile-show"><a class="">
                  <div class="nav-icon">
                    <div></div>
                  </div>
                </a></div>
                <div class="navbar-brand"><a href="/"><span class="mobile-logo"></span><span
                  class="site-logo"></span></a></div>
              </div>
            </div>
          </div>
          <div class="top-nav-space-holder mobile-hide"></div>
        </div>
      </div>



      <div class="r-content">
        <div>
          <div class="block-site-recommand">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2>热门节点</h2>
                  <div class="content">
                    <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                      <div class="musk"></div>
                      <a href="#">
                        <div class="ctt">
                          <div class="name">全部分类</div>
                        </div>
                      </a>
                    </div>
                    <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                      <div class="musk"></div>
                      <a href="/site/591c22a9b29b6765c5499798">
                        <div class="ctt">
                          <div class="name">全部分类</div>
                        </div>
                      </a>
                    </div>
                    <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                      <div class="musk"></div>
                      <a href="/site/591c22a9b29b6765c5499798">
                        <div class="ctt">
                          <div class="name">全部分类</div>
                        </div>
                      </a>
                    </div>
                    <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                      <div class="musk"></div>
                      <a href="/site/591c22a9b29b6765c5499798">
                        <div class="ctt">
                          <div class="name">全部分类</div>
                        </div>
                      </a>
                    </div>
                    <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                      <div class="musk"></div>
                      <a href="/site/591c22a9b29b6765c5499798">
                        <div class="ctt">
                          <div class="name">全部分类</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card block-list block-feed-list">
                  <div class="head">
                    <!--<div class="block-tab2 clearfix">-->
                      <el-menu :default-active="activeIndex2" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-menu-item index="2"><a href="#" >哎哟</a></el-menu-item>
                        <el-menu-item index="3"><a href="#" >订单管理</a></el-menu-item>
                      </el-menu>
                    <!--</div>-->
                  </div>
                  <div class="content">
                    <div class="list-one block-question-two clearfix">
                      <div class="l1 up-count">
                        <a href="#">
                          <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px" src="https://oe9nbfytu.qnssl.com/user/b618677591aa49b3972ece0c7d26b473/thumb" alt="头像">
                        </a>
                      </div>
                      <div class="l2">
                        <h3 style="margin-top: 10px">
                          <a href="#">最近重新恢复了数据?</a>
                        </h3>
                        <div class="ct">

                          <span class="d post-node">
                            默认分类
                          </span>
                          <i>•</i>
                          <span class="d post-author">
                            叶落山城
                          </span>
                          <span class="d update-time"><i>•</i>
                            最后回答
                          在 8月29日 16:14
                          </span>
                        </div>
                      </div>
                      <div class="l3">
                        <span class="reply-count"><a href="">4784</a> </span>
                      </div>
                    </div>
                    <div class="list-one block-question-two clearfix">
                      <div class="l1 up-count">
                        <a href="#">
                          <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px" src="https://oe9nbfytu.qnssl.com/user/b618677591aa49b3972ece0c7d26b473/thumb" alt="头像">
                        </a>
                      </div>
                      <div class="l2">
                        <h3 style="margin-top: 10px">
                          <a href="#">最近重新恢复了数据?</a>
                        </h3>
                        <div class="ct">

                          <span class="d post-node">
                            默认分类
                          </span>
                          <i>•</i>
                          <span class="d post-author">
                            叶落山城
                          </span>
                          <span class="d update-time"><i>•</i>
                            最后回答
                          在 8月29日 16:14
                          </span>
                        </div>
                      </div>
                      <div class="l3">
                        <span class="reply-count"><a href="">4784</a> </span>
                      </div>
                    </div>
                    <div class="list-one block-question-two clearfix">
                      <div class="l1 up-count">
                        <a href="#">
                          <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px" src="https://oe9nbfytu.qnssl.com/user/b618677591aa49b3972ece0c7d26b473/thumb" alt="头像">
                        </a>
                      </div>
                      <div class="l2">
                        <h3 style="margin-top: 10px">
                          <a href="#">最近重新恢复了数据?</a>
                        </h3>
                        <div class="ct">

                          <span class="d post-node">
                            默认分类
                          </span>
                          <i>•</i>
                          <span class="d post-author">
                            叶落山城
                          </span>
                          <span class="d update-time"><i>•</i>
                            最后回答
                          在 8月29日 16:14
                          </span>
                        </div>
                      </div>
                      <div class="l3">
                        <span class="reply-count"><a href="">4784</a> </span>
                      </div>
                    </div>

                  </div>
                  <div class="ft">
                    <el-pagination
                      layout="prev, pager, next"
                      :total="1000">
                    </el-pagination>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <Sidebar></Sidebar>
              </div>

            </div>
          </div>

        </div>

        <div class="beian">
          ©2017 简答. <a href="/misc/page/about.html" target="_blank">关于我们</a>
          <a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备16028850号-4</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from '../../components/Sidebar.vue'

  export default {
    data() {
      return {
        activeIndex2:'1'
      }
    },
    components: {Sidebar},
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  @import "../../assets/css/test1.css";
  .el-dropdown-link {
    color: #fff;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
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
  .post-author {
    color: #999;
  }
  .reply-count{
    color: #00a2ae;
    height:100%;
    vertical-align:middle;
    line-height:60px;
  }
</style>
