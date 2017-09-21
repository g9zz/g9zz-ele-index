<template>
  <div class="block-user-view-info  block-right">
    <h2>注册</h2>
    <h3 class="note">所有授权登录都必须绑定邮箱!本站以邮箱账号为主</h3>
    <div class="block myLogin" style="margin-top: 20px">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form">
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.email" size="large" placeholder="请输入登录邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" size="large" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="rePassword">
          <el-input v-model="loginForm.rePassword" size="large" type="password" placeholder="请再输入密码"></el-input>
        </el-form-item>
        <el-form-item label="邀请码" prop="invite_code">
          <el-input v-model="loginForm.invite_code" size="large" type="password" placeholder="请输入邀请码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" style="width: 100%" prop="verify_code">
          <el-input style="width: 55%" v-model="loginForm.invite_code" size="large" type="password" placeholder="请输入验证码">
          </el-input>
          <img :src="captchaSrc" style="width: 40%;height: 42px;border-radius: 4px" @click="getCaptcha()" alt="图形验证码">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">注册</el-button>
          <!--<el-button @click="resetForm('loginForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>

  </div>

</template>

<script>
  import axios from '../utils/fetch.js';
  export default {
    data() {
      return {
        loginForm: {
          email: '',
          password: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],

        },
        captchaSrc:'', //验证码地址
        text:'',
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
