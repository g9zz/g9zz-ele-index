<template>
  <div class="sidebar">
    <div class="note">
      <el-alert
        title="Markdown"
        type="info"
        :closable="false"
        description="推荐使用Markdown语法来写,如果您不会,请网上搜索一下,很简单,五分钟基本用法肯定能学会!">
      </el-alert>
    </div>

    <div class="note">
      <el-alert
        title="上传图片"
        type="warning"
        :closable="false"
        description="本站不提供上传图片功能(头像除外),请使用图床!比如微博的图床">
      </el-alert>
    </div>

    <div class="note">
      <el-alert
        title="请文明发言"
        type="success"
        :closable="false"
        description="这社会,键盘比较便宜,但也请不要随意甩键盘,比较键盘侠不是真正的大侠!">
      </el-alert>
    </div>
    <div class="note">
      <el-alert
        title="本站不支持删帖"
        type="error"
        :closable="false"
        description="本周不支持删帖功能,所以,您发表的任何内容,请慎重,且您的言论,本站并不维护您的权利">
      </el-alert>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .sidebar {
    min-height:300px;
    /*background-color: #fff;*/
    /*padding-top: 20px;*/
    /*margin-left: 20px;*/
    /*border: 1px solid #d1dbe5;*/
    /*border-radius: 4px;*/
  }
  .note {
    background-color: #fff;
    margin: 0 0 20px 0;
  }
  .sidebar > div {
    border: 0 solid #d1dbe5;
    border-radius: 4px;
    box-shadow: 0 6px 11px #dad3d2;
  }
</style>
