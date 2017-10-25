<template>
  <div class="card block-list block-feed-list">
    <div class="list-one block-question-two clearfix" style="min-height: 100px">
      <div class="l1 up-count">
        <a href="#">
          <img class="avatar" style="width: 80px;height: 80px;border: 1px solid #85eaa9; border-radius: 50%"
               :src="nodeAvatar" alt="节点图">
        </a>
      </div>
      <div class="l2">
        <h1 style="margin-top: 10px">
          <a href="#">{{nodeName}}</a>
        </h1>
        <div class="ct">
          <span class="d update-time">{{nodeDescription}}</span>
        </div>
      </div>
    </div>
    <div class="content">

      <div v-for="item in post_list"  class="list-one block-question-two clearfix">
        <div class="l1 up-count" >
          <a href="#" >
            <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px"  :src="item.user.avatar"   alt="头像">
          </a>
        </div>
        <div class="l2">
          <h3 style="margin-top: 10px">
            <router-link  :to="'/post/'+item.hid">{{ item.title }}</router-link>
          </h3>
          <div class="ct">
            <router-link :to="'/node/'+item.node.hid+'/post'">
              <span class="d post-node">
                {{ item.node.displayName }}
              </span>
            </router-link>
            <i>•</i>
            <span class="d post-author">
                            {{ item.user.name }}
                          </span>
            <span class="d update-time"><i>•</i>
                            最后回答
                          在 {{ item.lastReplyActivated }}
                          </span>
          </div>
        </div>
        <div class="l3">
          <span class="reply-count"><a href="">{{ item.replyCount}}</a> </span>
        </div>
      </div>



    </div>
    <div class="ft">
      <el-pagination
        :page-size="50"
        layout="prev, pager, next"
        @current-change="changePage"
        :total="pageTotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from '../utils/fetch.js';
  export default {
    data() {
      return {
        post_list:[],//帖子数据列表
        nodeHid:'',
        pageTotal:0,//总页数,
        nodeAvatar:'',
        nodeName: '',
        nodeDescription: '',
      }
    },
    mounted() {
      this.getNodeHid();
//      this.getPostList(1);
//      this.getNodeDetail();
    },
    watch:{
      "$route": "getNodeHid"
    },
    methods: {
      getNodeHid() {
        this.nodeHid = this.$route.params.hid;
        this.getPostList(1)
        this.getNodeDetail();
      },
      /**
       * 点击分页
       */
      changePage(val){
        this.getPostList(val);
      },
      /**
       * 帖子列表
       * @param page
       */
      getPostList(page=1){

        axios({
          method:'get',
          url:'/post?node='+this.nodeHid,
          params:{
            page:page,
          }
        }).then((res) => {
          this.post_list = res.data.data;
          this.pageTotal = res.data.pager.entities;
        })
      },

      getNodeDetail() {
          axios({
            url: '/node/'+ this.nodeHid,
            methos: 'get'
          }).then((res) => {
              this.nodeAvatar = res.data.data.avatar;
              this.nodeName = res.data.data.displayName;
              this.nodeDescription = res.data.data.description;
          })
      }
    }
  }
</script>

<style scoped>


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

</style>

