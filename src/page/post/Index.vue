<template>
  <div id="my-all">
    <div class="app">
      <NewHeader></NewHeader>
      <HeaderNode></HeaderNode>
      <div class="r-content">
        <div>

          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <PostList></PostList>
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

</style>
