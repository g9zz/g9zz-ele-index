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
                <li>本站是  后端php提供的数据接口  + 前端vue的Element-ui渲染的页面 + Go的一个开源包提供的搜索 + 微信小程序提供的移动端</li>
                <br>
                <li> 样式是参考了多方社区(我并不会设计,只会拼凑和修改)!</li>
                <br>
                <li> 本站以邮箱账号为主!任何三方登录必须先绑定邮箱账号,绑定成功后,点击授权登录即可登录!再也不担心一个网站多个账号了!</li>
                <br>
                <li> 如果有BUG等问题,请在站里留言!如果还有更多问题!可给我发邮件!或者QQ群里问也可以!</li>
                <br>
                <li>代码地址  <a href="https://github.com/g9zz" target="_blank">https://github.com/g9zz</a>  </li>
                <br>

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
  @import "../../../static/css/test1.css";

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
