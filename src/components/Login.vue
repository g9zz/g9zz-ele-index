<template>
  <div>
    <div :style="loginStyle" class="block-user-view-info  block-right">
      <h2>登录</h2>
      <h3 class="note">所有授权登录都必须绑定邮箱!本站以邮箱账号为主</h3>
      <div class="block myLogin" style="margin-top: 20px">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
          <el-form-item label="账号" prop="email">
            <el-input v-model="loginForm.email" size="large" placeholder="请输入登录邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" size="large" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <!--<el-form-item label="邀请码" prop="invite_code">-->
          <!--<el-input v-model="loginForm.invite_code" size="large" type="password" placeholder="请输入邀请码"></el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="验证码" style="width: 100%" prop="captcha">
            <el-input style="width: 55%" v-model="loginForm.captcha" size="large"  placeholder="请输入验证码">
            </el-input>
            <img :src="captchaSrc" style="width: 40%;height: 42px;border-radius: 4px" @click="getCaptcha()" alt="图形验证码">
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button type="primary"> <router-link to="/register">注册</router-link> </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="authLogin">
        <!--<div class="block " >-->
        <!--<router-link to="#">-->
        <!--<el-button type="success" class="login email_login">邮箱登录</el-button>-->
        <!--</router-link>-->
        <!--</div>-->
        <div class="block ">
          <a href="https://demo.g9zz.com/auth/github">
            <el-button type="success" class="login github_login">Github登录</el-button>
          </a>
        </div>
        <div class="block ">
          <el-button type="success" :disabled="true" class="login qq_login">QQ登录</el-button>
        </div>
        <div class="block ">
          <router-link to="#">
            <el-button type="success" :disabled="true" class="login weibo_login">微博登录</el-button>
          </router-link>
        </div>
        <div class="block " style="margin-bottom: 20px">
          <router-link to="#">
            <el-button type="success" :disabled="true" class="login weixin_login">微信登录</el-button>
          </router-link>
        </div>

      </div>
    </div>
    <div :style="infoStyle" class="block-user-view-info  block-right">
      <h2>{{ name }}</h2>
      <div class="content clearfix">
        <div class="l1">
          <div class="user-avatar">
            <!--<img src="//cdn.static.jianda.com/upload/avatar/2b/78/2b7837aded7367d78b39d4f1db382cef3c5416255181603c4d5f8ec5339cafed.jpg" class="avatar">-->
            <img :src="avatarSrc" class="avatar">
          </div>
        </div>
        <h2 style="background-color: #fff"></h2>
        <h2 style="background-color: #fff">
          <router-link to="/my">
            个人中心
          </router-link>
        </h2>
        <h2 style="background-color: #fff" @click="logout">
          <a href="#">点击退出</a>
        </h2>
      </div>
    </div>
  </div>


</template>

<script>
  import axios from '../utils/fetch.js';
  import cookie from '../utils/cookie.js';
  import { Message } from 'element-ui';
  import { Loading } from 'element-ui';

  export default {
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
          captcha: '',
        },
        rules: {
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ],
          captcha: [
            { required: true, message: '请填写验证码', trigger: 'blur' },
          ]

        },
        captchaSrc:'', //验证码地址
        text:'',
        name: 'G9ZZ',
        avatarSrc: '//cdn.static.jianda.com/upload/avatar/2b/78/2b7837aded7367d78b39d4f1db382cef3c5416255181603c4d5f8ec5339cafed.jpg',
        loginStyle: 'display:block',
        infoStyle: 'display:none',
      };
    },
    mounted(){
      this.makeId();
      this.initCaptcha();
      this.initStyle();
    },
    methods: {
      /** 初始化验证码 */
      initCaptcha() {
          this.captchaSrc = process.env.BASE_API + '/captcha?uuid=' + this.text;
      },

      /** 点击获取新的验证码 */
      getCaptcha(){
        this.makeId();
        this.captchaSrc = process.env.BASE_API + '/captcha?uuid=' + this.text;
      },

      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Loading.service({ fullscreen: true });
            var email = that.loginForm.email;
            var password = that.loginForm.password;
            var captcha = that.loginForm.captcha;
            var auth = that.$route.query.auth ? that.$route.query.auth : '';
            axios({
              method: 'POST',
              url: '/login' ,
              headers: {
                'x-auth-uuid': that.text
              },
              data: {
                email: email,
                password: password,
                captcha: captcha,
                auth: auth
              }
          }).then((res) => {
              if (res.data.code == 200) {
                cookie.setCookie('token',res.data.data.token);
                cookie.setCookie('hid',res.data.data.hid);
                Message({
                  message: '登录成功',
                  type: 'success',
                  duration: 5 * 1000
                });
                this.$router.push(this.$route.query.redirect || '/')
              }
              let loadingInstance = Loading.service({ fullscreen: true });
              loadingInstance.close();
            })
        } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      makeId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.text = text;
      },
      initStyle() {
        if (cookie.getCookie('token')) {
          //校验下token  如果失效了,要不重新生成一个新的!
          axios({
            url: 'updateToken',
            method: 'get',
            headers: {
              'x-auth-token': cookie.getCookie('token')
            }
          }).then((res) => {
            if (res.data.code === 200) {
              cookie.setCookie('token',res.data.data.token);
              cookie.setCookie('hid',res.data.data.hid);
            }
          }),
            this.loginStyle = 'display:none';
          this.infoStyle = 'display:block';
          this.getUserInfo(cookie.getCookie('hid'))
        } else {
          this.loginStyle = 'display:block';
          this.infoStyle = 'display:none';
        }
      },
      getUserInfo(hid) {
        axios({
          url: '/user/' + hid,
          method: 'get',
        }).then((res) => {
          this.avatarSrc = res.data.data.avatar;
          this.name = res.data.data.name;
        })
      },
      logout() {
        cookie.clearCookie('token');
        cookie.clearCookie('hid');
        location.reload();
      }
    }
  }
</script>

<style scoped>
  .note {
    color: #e0efc6;
  }
  .block-right > h3 {
    font-size: 16px;
    padding: 4px 0;
    margin: 0;
    text-align: center;
    border-bottom: 1px solid #EFF2F7;
    /*background-color: rgba(241, 250, 255, 0.81);*/
  }
  .myLogin {
    /*margin-bottom: 20px;*/
    border-bottom: 1px dashed lightblue;
    padding-right: 20px;

  }


  .block-user-view-info {
    background-color: #fff;
    margin-bottom: 15px;
    border: 0 solid #d1dbe5;
    border-radius: 4px;
    box-shadow: 0 6px 11px #dad3d2;
  }

  .block-user-view-info .block {
    text-align: center;
  }

  .login {
    margin: 5px;
    width: 50%;
  }

  .github_login {
    border-color: black;
    color: black;
    background: url('../assets/images/github_login.png') no-repeat 20px 9px #fff;
  }

  .email_login {
    border-color: #acacac;
    color: #acacac;
    background: url('../assets/images/email_login.jpg') no-repeat 20px 9px #fff;
  }

  .qq_login {
    border-color: #37b5f9;
    color: #37b5f9;
    background: url('../assets/images/qq_login_03.jpg') no-repeat 20px 8px #fff;
  }

  .weibo_login {
    border-color: #f26d7e;
    color: #f26d7e;
    background: url('../assets/images/weibo_login_10.jpg') no-repeat 20px 8px #fff;
  }

  .weixin_login {
    border-color: #13ce66;
    color: #13ce66;
    background: url('../assets/images/weixin_login_15.jpg') no-repeat 20px 8px #fff;
  }

  .authLogin {
    background-color: #ebeef1;
  }
</style>
