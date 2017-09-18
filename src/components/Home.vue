<template>
  <div id="my-all">
    <div class="app">
      <MyHeader></MyHeader>
      <MyContent></MyContent>
    </div>
  </div>
</template>

<script>
  import MyHeader from './Header.vue'
  import MyContent from './Content.vue'

  export default {
    data () {
      return {
      }
    },
    components: {MyHeader,MyContent},
    methods: {

    }
  }
</script>

<style scoped>
  @import "../assets/css/test1.css";
  .el-dropdown-link {
    color: #fff;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
