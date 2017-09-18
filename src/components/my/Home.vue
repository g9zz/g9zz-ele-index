<template>
  <div class="home">
    <MyHeader></MyHeader>
    <el-row class="page-middle" type="flex" justify="center">
      <el-col :span="15">
        <MyContent></MyContent>
      </el-col>
      <el-col :span="4" >
        <MySidebar></MySidebar>
      </el-col>
    </el-row>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  import MyHeader from './Header.vue'
  import MyContent from './Content.vue'
  import MySidebar from './Sidebar.vue'
  import MyFooter from './Footer.vue'
  export default {
    data () {
      return {
      }
    },
    components: {MyHeader,MyContent,MySidebar,MyFooter},
    methods: {

    }
  }
</script>

<style scoped>

  .page-middle {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
  }

</style>
