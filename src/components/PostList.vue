<template>
  <div class="card block-list block-feed-list">
    <div class="head">
      <el-menu :default-active="activeIndex2" class="el-menu-demo"  mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2"><a href="#" >哎哟</a></el-menu-item>
        <el-menu-item index="3"><a href="#" >订单管理</a></el-menu-item>
      </el-menu>
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
            <router-link to="/post_detail/1">最近重新恢复了数据?</router-link>
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
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2:'1'
      }
    },
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

<style scoped>


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
  .reply-count{
    color: #00a2ae;
    height:100%;
    vertical-align:middle;
    line-height:60px;
  }
</style>
