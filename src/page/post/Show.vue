<template>
  <div id="my-all">
    <div class="app">
      <NewHeader></NewHeader>
      <HeaderNode></HeaderNode>
      <div class="r-content">
        <div>
          <!--<HeaderNode></HeaderNode>-->
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <PostDetail></PostDetail>
                <!--<PostList></PostList>-->
              </div>

              <div class="col-md-3">
                <Sidebar></Sidebar>
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
  export default {
    data () {
      return {
      }
    },
    components: {MyFooter,Sidebar,PostList,PostDetail,NewHeader,HeaderNode},
    methods: {

    }
  }
</script>

<style scoped>
  @import "../../../static/css/test1.css";

  .container{
    min-width: 70%;
  }
  .block-site-recommand{
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504704484511&di=a5a3ee8420b259dad96e33ce1e89cf87&imgtype=0&src=http%3A%2F%2Fimg.dwstatic.com%2Fow%2F1603%2F321664812092%2F1457711198415.jpg);
    background-size: cover;
  }
</style>
