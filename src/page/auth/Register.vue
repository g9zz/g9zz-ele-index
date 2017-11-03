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
                <li> 这里应该放点不一样的东西!</li>
                <br>
                <li> 本站是  后端php提供的数据接口  + 前端vue的Element-ui渲染的页面 + Go的一个开源包提供的搜索 + 微信小程序提供的移动端</li>
                <br>
                <li>代码开源!随便玩...毕竟我有时间就写写,写完了,我也不知道有什么卵用.......</li>
                <br>
                <li>代码地址  <a href="https://github.com/g9zz" target="_blank">https://github.com/g9zz</a>  </li>
                <br>

              </div>
              <div class="col-md-4">
                <MyRegister></MyRegister>

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
  import MyRegister from '../../components/Register.vue'
  export default {
    data () {
      return {
      }
    },
    components: {MyFooter,Sidebar,PostList,PostDetail,NewHeader,HeaderNode,MyDetail,MyLogin,MyRegister},
    methods: {

    }
  }
</script>

<style scoped>
  @import "../../../static/css/test1.css";

  /*#my-all {*/
  /*!*background-image: url("http://www.jq22.com/demo/jquery-login-20150514/img/1.jpg");*!*/
  /*background-size:100% 100%;*/
  /*overflow:hidden;*/
  /*background-repeat:no-repeat;*/
  /*}*/

  .container{
    min-width: 70%;
    margin-top: 30px;
  }

</style>
