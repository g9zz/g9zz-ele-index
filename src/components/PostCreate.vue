<template>
  <div class="card block-form block-question-add">
    <div class="reply-note l2 form-one">
      <span style="display: block; text-align:center; ">好好说话,放下你的键盘</span>
    </div>
    <div class="form-one">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" @submit.prevent="submit" label-width="100px" class="ruleForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title" style="width: 70%"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="node">
          <el-select v-model="ruleForm.node" filterable placeholder="请选择" style="width: 70%">
            <el-option
              v-for="item in options"
              :key="item.hid"
              :label="item.html.newHtml"
              :value="item.hid">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内容" prop="content">
          <mavonEditor :style="style" :class="" :toolbars="toolbars" @fullscreen="fullscreen" :default_open="default_open"   @change="changes"></mavonEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from '../utils/fetch.js'
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    data () {
      return {
        ruleForm: {
          title: '',
          node: '',
          content:''
        },
        options: [],
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
            {max: 120, message: "标题长度过长", trigger: 'blur'}
          ],
          node: [
            { required: true, message: '请选择一个分类', trigger: 'change' }
          ],
          content:  [
            { required: true, message: '请输入内容', trigger: 'change' }
          ]
        },
        style: 'z-index:19;width:90%;min-width:0;margin-right: 20px;',
        default_open: 'edit',
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          strikethrough: true, // 中划线
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          undo: true, // 上一步
          redo: true, // 下一步
          preview: true, // 预览
        }
      }
    },
    components: {mavonEditor},
    mounted() {
      this.getNodeList();
    },
    methods: {
      getNodeList() {
        axios({
          method: 'get',
          url: 'node',
        }).then((res) => {
          console.log(res.data);
          this.options = res.data.data;
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.submitPost();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      submitPost() {
          let title = this.ruleForm.title;
          let nodeHid = this.ruleForm.node;
          let content = this.ruleForm.content;
          axios({
            url:'/post',
            method:'post',
            params: {
              title: title,
              nodeHid:nodeHid,
              content:content
            }
          }).then((res)=> {
            if (res.data.code === 411000000) {
                this.$router.push('/login')
            }
//            console.log(res.data.data.hid)
            this.$router.push('/post/'+res.data.data.hid);
          })
      },
      fullscreen(status){
        if (status) {
          this.style = 'z-index:22;width:100%;min-width:0;margin-right: 20px;';
        } else {
          this.style = 'z-index:10;width:90%;min-width:0;margin-right: 20px;';
        }
      },
      changes(rendor) {
        this.ruleForm.content = rendor;
      },
    }

  }
</script>

<style>

  .ruleForm {
    margin-top: 20px;
  }

  .reply-note {
    margin: 0 auto 15px;
    background-color: antiquewhite;
    border-bottom: 1px solid lightsteelblue;
  }
</style>
