<template>
  <div class="card block-setting-main block-profile-setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="first">
        <div class="content">
          <dl class="clearfix">
            <dt>头像</dt>
            <dd class="user-avatar">
              <el-upload
                class="avatar-uploader"
                :action= "avatarUploadUrl"
                :show-file-list="false"
                :headers="avatarUploadHeaders"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="my_avatar" :src="my_avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
                <el-button type="info" :disabled="my_verified"  @click="verifyEmail()">验证邮箱</el-button>
              </div>
            </dd>
          </dl>
          <dl class="clearfix">
            <dt>关联账号</dt>
            <dd>
              <div class="setting_show_one">
                <img src="../../static/images/github.png" v-show="githubShow" class="c" alt="github">
                <img src="../../static/images/qq.png" v-show="qqShow" class="c" alt="qq">
                <img src="../../static/images/weibo.png" v-show="weiboShow" class="c" alt="weibo">
                <img src="../../static/images/weixin.png" v-show="weixinShow" class="c" alt="weixin">
                <img src="../../static/images/xcx.png" v-show="xcxShow" class="c" alt="miniprograms">
                <img src="../../static/images/google.png" v-show="googleShow" class="c" alt="google">
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
              <el-button type="success" @click="clickUnRead">一键全部标记已读</el-button>
            </div>
            <div class="content">
              <div v-for="item in notify_list">
                <div class="list-one userfeed-one" :style="item.readAt ? '' : '    background-color: aliceblue;'" >
                  <p class="feed-type">
                    <span v-if="item.type === 'reply'">提出了问题</span>
                    <span v-else>@了你</span>
                    <span class="feed-time">{{item.createdAt}}</span>
                  </p>
                  <div class="list-one block-question-one clearfix">
                    <div class="ct">
                      <h3>
                        <router-link  v-on:click.native="signRead(item.id)" :to="'post/'+item.post.hid">{{ item.post.title }}</router-link>
                      </h3>
                    </div>
                    <div class="content">
                      <div class="summary clearfix">
                        <div class="text" v-highlight v-html="item.body"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ft">
              <el-pagination
                layout="prev, pager, next"
                :page-size="20"
                :total="notifyPageTotal">
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
        my_verified: false,
        githubShow: false,
        qqShow: false,
        weiboShow: false,
        weixinShow: false,
        googleShow: false,
        xcxShow: false,

        avatarUploadUrl: '',
        avatarUploadHeaders: {},

        notify_list: [],//提醒列表
        notifyPageTotal:0,
      }
    },
    mounted() {
      this.getActivityPage();
      this.uploadUrl();
      this.uploadHeaders();
    },
    methods: {
      uploadUrl () {
        this.avatarUploadUrl = process.env.BASE_API+'/user/upload/avatar';
      },

      uploadHeaders() {
          this.avatarUploadHeaders = {
            'x-auth-token' : cookie.getCookie('token')
          }
      },


      handleClick(tab, event) {
          if (this.activeName === 'first') {
            this.getMyDetail();
          } else {
              this.getNoticeDetail(1);
          }
      },
      getActivityPage() {
          let activityPage = this.$route.query.activePage;
//          console.log(activityPage);
          if (activityPage == 2) {
            this.activeName = 'second';
            this.getNoticeDetail(1);
          } else {
            this.activeName = 'first';
            this.getMyDetail();
          }
      },
      getNoticeDetail(page=1){
        axios({
          url: '/notify?page=' + page + '&limit=20',
          method: 'get',
        }).then((res) => {
            this.notify_list = res.data.data;
            this.notifyPageTotal = res.data.pager.entities;
        })
      },

      /** 验证邮箱 */
      verifyEmail() {
          axios({
            method:'get',
            url:'/user/get/verify'
          }).then((res) => {
              if (res.data.code === 0) {
                this.$message.success('已成功发送,请检查邮箱邮件');
              } else {
                this.$message.error(res.data.message);
              }
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
          this.my_verified = res.data.data.verified  === 'false' ? false : true;
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
          console.log(this.my_verified,'MyDetail_getMyDetail');
        })
      },

      /** 全部标记已读 */
      clickUnRead() {
          axios({
            url: '/notify/set/allRead',
            method: 'post'
          }).then((res) => {
            if (res.data.code === 0) {
              this.$message.error('全部标记已读成功');
              setTimeout("location.reload();",3000)
            }
          })
      },

      signRead(id) {
        axios({
          url: '/notify/set/'+id+'/read',
          method: 'post'
        }).then((res) => {
        })
      },
      handleAvatarSuccess(res, file) {
        if (res.code === 0) {
            this.$message.success('上传成功');
          setTimeout("location.reload();",3000)
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG && !isPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M ;
      }


    }
  }
</script>

<style scoped>
  .setting_show_one > img {
    width: 30px;
    height: 30px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>
