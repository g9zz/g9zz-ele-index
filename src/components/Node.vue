<template>
  <div class="card block-setting-main block-profile-setting">

    <div v-for="tag in tags">
      <el-card class="box-card" v-if="tag.parentHid == 0">
        <div slot="header" class="clearfix">
          <span v-if="tag.level === 0">{{ tag.displayName }}</span>
        </div>
          <el-tag v-for="tag1 in tags" v-if="tag1.parentHid == tag.hid"  type="gray" :key="tag1.name">
            {{tag1.displayName}}
          </el-tag>
      </el-card>
    </div>


    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-tag>标签一</el-tag>
      <el-tag type="gray">标签二</el-tag>
      <el-tag type="primary">标签三</el-tag>
      <el-tag type="success">标签四</el-tag>
      <el-tag type="warning">标签五</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
      <el-tag type="danger">标签六</el-tag>
    </el-card>
  </div>

</template>

<script>
  import axios from '../utils/fetch.js'
  import cookie from '../utils/cookie.js'
  import {Message} from 'element-ui';

  export default {
    data () {
      return {
        tags: {},
      }
    },
    mounted() {
      this.getNodeList();
    },
    methods: {
      getNodeList() {
        axios({
          url: '/node',
          method: 'get',

        }).then((res) => {
          this.tags = res.data.data;
        })
      }
    }
  }
</script>

<style scoped>
  .el-tag {
    margin-right: 5px;
    margin-bottom: 20px;
  }

  .card {
    border: 0;
    background: 0;
    box-shadow: none;
  }

  .el-card {
    margin-bottom: 20px;
    box-shadow: 8px 19px 40px rgba(0, 37, 55, .05);
  }
</style>
