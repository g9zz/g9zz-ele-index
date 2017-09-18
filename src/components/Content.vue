<template>
  <div class="r-content">
    <div>
      <div class="block-site-recommand">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>热门节点</h2>
              <div class="content">
                <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                  <div class="musk"></div>
                  <a href="#">
                    <div class="ctt">
                      <div class="name">全部分类</div>
                    </div>
                  </a>
                </div>
                <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                  <div class="musk"></div>
                  <a href="/site/591c22a9b29b6765c5499798">
                    <div class="ctt">
                      <div class="name">全部分类</div>
                    </div>
                  </a>
                </div>
                <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                  <div class="musk"></div>
                  <a href="/site/591c22a9b29b6765c5499798">
                    <div class="ctt">
                      <div class="name">全部分类</div>
                    </div>
                  </a>
                </div>
                <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                  <div class="musk"></div>
                  <a href="/site/591c22a9b29b6765c5499798">
                    <div class="ctt">
                      <div class="name">全部分类</div>
                    </div>
                  </a>
                </div>
                <div class="block-site-two has-theme" style="background-color: rgb(111, 169, 228); background-image: url(&quot;//cdn.static.jianda.com/upload/image/1f/5a/1f5a14193fa1beca74c04254adaca6aa7657cdc97d35cac8103bf02f376ad766.jpg&quot;);">
                  <div class="musk"></div>
                  <a href="/site/591c22a9b29b6765c5499798">
                    <div class="ctt">
                      <div class="name">全部分类</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <MyPostDetail></MyPostDetail>
            <!--<PostList></PostList>-->
          </div>

          <div class="col-md-3">
            <MySidebar></MySidebar>
          </div>

        </div>
      </div>

    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  import MySidebar from './Sidebar.vue'
  import MyFooter from './Footer.vue'
  import MyPostList from './PostList.vue'
  import MyPostDetail from './PostDetail.vue'
  export default {
    data () {
      return {
      }
    },
    components: {MyFooter,MySidebar,MyPostList,MyPostDetail},
    methods: {

    }
  }
</script>

<style scoped>

.container{
  max-width: 70%;
}
  .post-node {
    background-color: #e5e5e5;
    color: #999;
    padding: 1px 2px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 10px;
  }
  .post-author{
    color: #999;
  }
  .reply-count{
    color: #00a2ae;
    height:100%;
    vertical-align:middle;
    line-height:60px;
  }
  .block-site-recommand{
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504704484511&di=a5a3ee8420b259dad96e33ce1e89cf87&imgtype=0&src=http%3A%2F%2Fimg.dwstatic.com%2Fow%2F1603%2F321664812092%2F1457711198415.jpg);
    background-size: cover;
  }
</style>
