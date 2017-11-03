<template>
  <div class="card block-setting-main block-profile-setting">

    <div v-for="(tag,index) in tags">
      <el-card class="box-card" v-if="tag.parentHid == 0">
        <div slot="header" class="clearfix">
          <router-link :to="'/node/' +  tag.hid  + '/post'">
            <span v-if="tag.level === 0">{{ tag.displayName }}</span>
          </router-link>
        </div>
        <span v-for="(tag1,index1) in tags" >
          <span v-if="tag1.parentHid === tag.hid ">
            <router-link :to="'/node/' +  tag1.hid  + '/post'">
            <span v-if="index%4 === 0">
              <el-tag style="margin: 4px" type="danger"> {{tag1.displayName}} </el-tag>
            </span>
            <span v-else-if="index%4 === 1">
              <el-tag style="margin: 4px" type="primary"> {{tag1.displayName}} </el-tag>
            </span>
            <span v-else-if="index%4 === 2">
              <el-tag style="margin: 4px" type="success"> {{tag1.displayName}} </el-tag>
            </span>
            <span v-else>
              <el-tag style="margin: 4px" type="warning"> {{tag1.displayName}} </el-tag>
            </span>
          </router-link>
          </span>
        </span>

      </el-card>
    </div>

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
