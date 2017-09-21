<template>
  <div id="my-all">
    <div class="app">
      <NewHeader></NewHeader>
      <div class="r-content" style="margin-top: 160px">
        <div>
          <!--<HeaderNode></HeaderNode>-->
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                叶落山城
              </div>
              <div class="col-md-4">
                <MyLogin></MyLogin>

              </div>
              </div>
          </div>

        </div>
        <MyFooter></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import NewHeader from '../../components/NewHeader.vue'
  import Sidebar from '../../components/Sidebar.vue'
  import MyFooter from '../../components/Footer.vue'
  import PostList from '../../components/PostList.vue'
  import PostDetail from '../../components/PostDetail.vue'
  import HeaderNode from '../../components/HeaderNode.vue'
  import MyDetail from '../../components/MyDetail.vue'
  import MyLogin from '../../components/Login.vue'
  export default {
    data () {
      return {
      }
    },
    components: {MyFooter,Sidebar,PostList,PostDetail,NewHeader,HeaderNode,MyDetail,MyLogin},
    methods: {

    }
  }
</script>

<style scoped>
  @import "../../assets/css/test1.css";

  /*#my-all {*/
    /*!*background-image: url("http://www.jq22.com/demo/jquery-login-20150514/img/1.jpg");*!*/
    /*background-size:100% 100%;*/
    /*overflow:hidden;*/
    /*background-repeat:no-repeat;*/
  /*}*/
  .col-md-4 {
    max-width: 420px;
    min-width: 300px;
  }
  .container{
    min-width: 70%;
    margin-top: 30px;
  }

</style>
