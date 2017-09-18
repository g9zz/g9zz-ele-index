<template>
  <div class="card block-setting-main block-profile-setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">
        <div class="content">
          <dl class="clearfix">
            <dt>头像</dt>
            <dd class="user-avatar">
              <img
                src="//cdn.static.jianda.com/upload/avatar/27/5d/275dae1680450c693395a48ec842409fb443d6f73023db9cb5417f64f5f51c6a.jpg"
                class="avatar">
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">叶落山城</span>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">叶落山城</span>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">叶落山城</span>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">叶落山城</span>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">叶落山城</span>
              </div>
            </dd>
          </dl>
        </div>

      </el-tab-pane>
      <el-tab-pane label="个人动态" name="second">
        <div class="block-list block-feed-list">
          <div class="content">
            <div class="ft clearfix" style="border-bottom: 1px solid rgb(228, 231, 234)">
              <el-button type="success">一键全部标记已读</el-button>
            </div>
            <div class="content">
              <div class="list-one userfeed-one">
                  <p class="feed-type">
                  提出了问题
                  <span class="feed-time">8月29日 16:10</span>
                </p>
                <div class="list-one block-question-one clearfix">
                  <div class="ct">
                    <h3>
                      <a href="/question/59a521655f1a624eea2a9da0">最近重新恢复了数据?</a>
                    </h3>
                  </div>
                  <div class="content">
                    <div class="summary clearfix">
                      <div class="text">
                        <span>我记得我之前就注册过了..前几天登录发现页面500了今天再登录..感觉 我是新注册的...</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              <div class="list-one userfeed-one">
                <p class="feed-type">
                  提出了问题
                  <span class="feed-time">8月29日 16:10</span>
                </p>
                <div class="list-one block-question-one clearfix">
                  <div class="ct">
                    <h3>
                      <a href="/question/59a521655f1a624eea2a9da0">最近重新恢复了数据?</a>
                    </h3>
                  </div>
                  <div class="content">
                    <div class="summary clearfix">
                      <div class="text">
                        <span>我记得我之前就注册过了..前几天登录发现页面500了今天再登录..感觉 我是新注册的...</span>
                      </div>
                    </div>
                  </div>
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
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>


  </div>

</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>

</style>
