<template>
  <div class="block-user-view-info  block-right">
    <h2>注册</h2>
    <h3 class="note">所有授权登录都必须绑定邮箱!本站以邮箱账号为主</h3>
    <div class="block myLogin" style="margin-top: 20px">
      <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="login-form">
        <el-form-item label="账号" prop="name">
          <el-input v-model="registerForm.name" size="large" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerForm.email" size="large" placeholder="请输入注册邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" size="large" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="rePassword">
          <el-input v-model="registerForm.rePassword" size="large" type="password" placeholder="请再输入密码"></el-input>
        </el-form-item>
        <el-form-item label="邀请码" prop="invite_code">
          <el-input v-model="registerForm.invite_code" size="large" placeholder="请输入邀请码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" style="width: 100%" prop="captcha">
          <el-input style="width: 55%" v-model="registerForm.captcha" size="large" placeholder="请输入验证码"></el-input>
          <img :src="captchaSrc" style="width: 40%;height: 42px;border-radius: 4px" @click="getCaptcha()" alt="图形验证码">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
          <el-button type="primary"> <router-link to="/login">登录</router-link> </el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
  import axios from '../utils/fetch.js';
  import { Message } from 'element-ui';
  import { Loading } from 'element-ui';
  import cookie from '../utils/cookie.js';

  export default {
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        registerForm: {
          name: '',
          email: '',
          password: '',
          rePassword: '',
          invite_code: '',
          captcha: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
          ],
          rePassword: [
            {required: true, message: '请输入确认密码', trigger: 'blur'},
            { validator: validatePass2, trigger: 'blur' },
            {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
          ],
          captcha: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
          ]
        },
        captchaSrc: '', //验证码地址
        text: '',
      };
    },
    mounted(){
      this.makeId();
      this.initCaptcha();
    },
    methods: {
      initCaptcha() {
        this.captchaSrc = process.env.BASE_API + '/captcha?uuid=' + this.text;
      },

      getCaptcha(){
        this.makeId();
        this.captchaSrc = process.env.BASE_API + '/captcha?uuid=' + this.text;
      },

      submitForm(formName) {
          let that = this;
        this.$refs[formName].validate((valid) => {
          if (valid && that.registerForm.password === that.registerForm.rePassword) {
            Loading.service({ fullscreen: true });
            this.submitRegister();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      submitRegister() {
        let that = this;
        axios({
          url: '/register',
          method: 'POST',
          headers: {
            'x-auth-uuid': that.text
          },
          params: {
            name: that.registerForm.name,
            email: that.registerForm.email,
            password: that.registerForm.password,
            inviteCode: that.registerForm.invite_code,
            captcha: that.registerForm.captcha,
          }
        }).then((res) => {
          if (res.data.code === 200) {
            cookie.setCookie('token',res.data.data.token);
            cookie.setCookie('hid',res.data.data.hid);
            Message({
              message: '注册成功',
              type: 'success',
              duration: 5 * 1000
            });
            this.$router.push('/my');
          } else {
            Message({
              message: res.data.message,
              type: 'error',
              duration: 5 * 1000
            });
          }
          this.getCaptcha();
          let loadingInstance = Loading.service({ fullscreen: true });
          loadingInstance.close();
        })
      },


      makeId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.text = text;
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

  .authLogin {
    background-color: #ebeef1;
  }
</style>
