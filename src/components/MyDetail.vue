<template>
  <div class="card block-setting-main block-profile-setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">
        <div class="content">
          <dl class="clearfix">
            <dt>头像</dt>
            <dd class="user-avatar">
              <img
                :src="my_avatar"
                class="avatar">
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>名字</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">{{ my_name }}</span>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>邮箱</dt>
            <dd>
              <div class="setting_show_one">
                <span class="c">{{ my_email }}</span>
                <el-button type="info" @click="verifyEmail()">验证邮箱</el-button>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>关联账号</dt>
            <dd>
              <div class="setting_show_one">
                <img src="../assets/images/github.png" v-show="githubShow" class="c" alt="github">
                <img src="../assets/images/qq.png" v-show="qqShow" class="c" alt="qq">
                <img src="../assets/images/weibo.png" v-show="weiboShow" class="c" alt="weibo">
                <img src="../assets/images/weixin.png" v-show="weixinShow" class="c" alt="weixin">
                <img src="../assets/images/xcx.png" v-show="xcxShow" class="c" alt="miniprograms">
                <img src="../assets/images/google.png" v-show="googleShow" class="c" alt="google">
                <!--<span class="c">叶落山城</span>-->
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

    </el-tabs>


  </div>

</template>

<script>
  import axios from '../utils/fetch.js'
  import cookie from '../utils/cookie.js'
  import { Message } from 'element-ui';

  export default {
    data () {
      return {
        activeName: 'first',
        my_name: '',
        my_email: '',
        my_avatar: '',
        githubShow: false,
        qqShow: false,
        weiboShow: false,
        weixinShow: false,
        googleShow: false,
        xcxShow: false
      }
    },
    mounted() {
      this.getMyDetail();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      getNoticeDetail(){
          
      },


      verifyEmail() {
          axios({
            method:'get',
            url:'/user/verify'
          }).then((res) => {
            Message({
              message: '已成功发送,请检查邮箱邮件',
              type: 'success',
              duration: 5 * 1000
            });
          })
      },

      /** 获取用户详情 */
      getMyDetail() {
        var hid = cookie.getCookie('hid')
        axios({
          method: 'get',
          url: '/user/' + hid,
        }).then((res) => {
          this.my_name = res.data.data.name;
          this.my_email = res.data.data.email;
          this.my_avatar = res.data.data.avatar;
          if (res.data.data.xcx) {
            this.xcxShow = true;
          }
          if (res.data.data.github) {
            this.githubShow = true;
          }
          if (res.data.data.google) {
            this.googleShow = true;
          }
          if (res.data.data.weixin) {
            this.weixinShow = true;
          }
          if (res.data.data.weibo) {
            this.weiboShow = true;
          }
          if (res.data.data.qq) {
            this.qqShow = true;
          }

        })
      },


    }
  }
</script>

<style scoped>
  .setting_show_one > img {
    width: 30px;
    height: 30px;
  }
</style>
