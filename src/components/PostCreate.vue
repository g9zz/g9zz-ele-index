<template>
  <div class="card block-form block-question-add">
    <div class="reply-note l2 form-one">
      <span style="display: block; text-align:center; ">好好说话,放下你的键盘</span>
    </div>
    <div class="form-one">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
      <el-form-item label="标题"  prop="title">
        <el-input v-model="ruleForm.title" style="width: 70%"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="region">
          <el-select v-model="ruleForm.node" filterable placeholder="请选择" style="width: 70%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="内容" prop="desc">
        <Editor></Editor>
      </el-form-item>

    </el-form>
    </div>
    <div class="form-submit">
      <el-button>提交</el-button>
    </div>
  </div>
</template>

<script>
  import Editor from './Editor.vue'
  export default {
      data () {
          return {
            ruleForm:{
              title:'',
              node:''
            },
            options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value8: ''
          }
      },
    components:{Editor}
  }
</script>

<style>
#editor-md {
  margin-left: 0;
  border-radius: 4px;
  border-color: #bfcbd9;
}
  .ruleForm {
    margin-top: 20px;
  }
  .reply-note {
    margin: 0 auto 15px;
    background-color: antiquewhite;
    border-bottom: 1px solid lightsteelblue;
  }
</style>
