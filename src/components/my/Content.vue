<template>
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
    <div class="paginate">
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
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

  .content {
    min-height: 100px;
    background-color: #fff;
    margin-right: 20px;
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
  .paginate {
    border: 1px solid #d1dbe5;
    overflow: hidden;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
  }
</style>
