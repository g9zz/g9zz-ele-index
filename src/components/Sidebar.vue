<template>
  <div class="sidebar">
    <div class="login-auth">
      <router-link to="/post_create">
        <el-button :plain="true" type="success" icon="edit">创建新主题</el-button>
      </router-link>
    </div>
    <div class="search">
      <el-input
        placeholder="搜索.."
        size="large"
        icon="search"
        v-model="postSearch"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
    <div class="ad">
      <div class="f-g-f"><span>ad</span></div>
      <div class="ad-img">
        <a href="#" ><img class="ad-1" src="../assets/ad-test.jpg" alt=""></a>
        <a href="#" ><img class="ad-1" src="../assets/ad-test.jpg" alt=""></a>
      </div>

    </div>
    <div class="hot">
      <div class="f-g-f"><span>hot topics</span></div>

      <el-table
        :data="hotData"
        class="hotTable"
        :show-header="false"
        :border="false"
        >
        <el-table-column
          prop="hotTitle"
          header-align="center"
          show-overflow-tooltip
          >
        </el-table-column>
      </el-table>
    </div>
    <div class="note">
      <div class="f-g-f"><span>note</span></div>
      <div class="n-note">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        postSearch:'',
        hotData: [{
          hotTitle: '2016-05-02',
      }, {
          hotTitle: '2016-05-04',
      }, {
          hotTitle: 'hotTitlehotTitlehhotTitlehotTitlehotTitleotTitlehotTitlehotTitlehotTitlehotTitlehotTitlehotTitle',
      }, {
          hotTitle: 'hotTitle',
      }],
        activeNames:['1']
      }
    },
    methods: {
      handleIconClick () {
          console.log('帖子搜索',this.postSearch);
      },

    }
  }
</script>

<style scoped>
  .sidebar {
    /*min-height:300px;*/
    /*background-color: cornflowerblue;*/
    /*margin-left: 20px;*/
    /*border: 1px solid #d1dbe5;*/
    /*border-radius: 4px;*/
  }
  .sidebar > div {
    border: 0 solid #d1dbe5;
    border-radius: 4px;
    box-shadow: 0 6px 11px #dad3d2;
  }
  .login-auth {
    /*min-height: 100px;*/
    background-color: #fff;

  }
  .search {
    margin-top: 15px;
    min-height: 20px;
    background-color: #fff;
    padding: 10px;
  }
  .ad {
    margin-top: 15px;
    min-height: 100px;
    background-color: #fff;
  }
  .ad-img {
    padding: 10px;
    background-color: #fff;
  }
  .ad-1 {
    height:50px;
    width:100%;
    overflow: hidden;
    background-size:cover;
    margin-top: 5px;

  }
  .hot {
    margin-top: 15px;
    min-height: 100px;
    background-color: #fff;
  }
  .hotTable {
    width: 100%;
    padding: 10px;
  }
  .note {
    margin-top: 15px;
    min-height: 100px;
    background-color:#fff;
  }

  .f-g-f {
    padding: 10px;
    letter-spacing: -1px;
    color: #b59797;
    border-bottom: 1px solid #ddd;
  }
  .f-g-f span{
    letter-spacing: 0;
    line-height:8px;
    text-align:center;
    display:block;
  }
</style>
