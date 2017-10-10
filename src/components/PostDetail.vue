<template>
  <div>
    <div class="card block-list block-feed-list">
      <div class="header">
        <div class="list-one block-question-two clearfix">
          <div class="l1 up-count">
            <a href="#">
              <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px" :src="author_avatar" alt="作者头像">
            </a>
          </div>
          <div class="l2">
            <h1 style="margin-top: 10px">
              <a href="#">{{post_title}}</a>
            </h1>
            <div class="ct">
            <span class="d post-node">
              {{post_node}}
            </span>
              <i>•</i>
              <span class="d post-author">
                            {{ post_author}}
                          </span>
              <span class="d update-time"><i>•</i>
                            创建于
                           {{ post_created }}
                          </span>
            </div>
          </div>
        </div>
        <div class="reply-content" v-html="post_content">
          <!--{{ post_content }}-->
        </div>
        <div class="post-append">
          <div v-for="item in post_script" v-html="item.content" class="list-one append-list clearfix">
          </div>
        </div>
      </div>
    </div>
    <div class="card block-list2 block-answer-list">
      <div class="reply-list">
        <div v-if="post_reply_num > 0">
          <div v-for="item in post_reply_list" class="list-one block-question-two clearfix">
            <div class="l1 up-count">
              <a href="#">
                <img class="avatar" style="width: 40px;height: 40px;border: 1px solid #85eaa9; border-radius: 4px" :src="item.user.avatar" alt="头像">
              </a>
            </div>
            <div class="l2">
              <div class="ct" style="margin-top: 10px">
            <span class="d post-node">
              默认分类
            </span>
                <i>•</i>
                <span class="d post-author">
                            {{ item.user.name }}
                          </span>
                <span class="d update-time"><i>•</i>
                            回答
                          于 {{ item.created }}
                          </span>
                <span class="d" style="float: right">{{ item.floor }}</span>
              </div>
              <div class="line"></div>
              <div v-html="item.content" class="reply-detail">
              </div>

            </div>
          </div>
        </div>
        <div v-else>
          <div class="list-one  clearfix" style="text-align: center">
            <span >评论空空如也~</span>
          </div>
        </div>

      </div>
    </div>

    <div class="card block-form block-answer-add">

      <div class="reply-note l2">
        <span>好好说话,放下你的键盘</span>
      </div>
      <div  class="form-one">
      </div>
      <div class="form-submit">
        <el-button type="success">提交</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from '../utils/fetch.js';
  export default {
      data () {
          return {
            author_avatar:'',
            post_title:'',
            post_node:'',
            post_author:'',
            post_created:'',
            post_content:'',
            post_script:[],

            post_reply_list:[],
            post_reply_num:0,
          }
      },
    mounted(){
      this.getPostDetail();
      this.getPostReplyList();
    },
    methods:{

      /**
       * 帖子详情
       */
      getPostDetail() {
        axios({
          method:'get',
          url:'/post/'+this.$route.params.hid
        }).then((res) => {
          let result = res.data.data;
          this.author_avatar = result.user.avatar;
          this.post_title = result.title;
          this.post_node = result.node.displayName;
          this.post_author = result.user.name;
          this.post_created = result.createdAt;
          this.post_content = result.content;
          this.post_script = result.postscript;
        })
      },
      getPostReplyList() {
          axios({
            method: 'get',
            url:'/post/' + this.$route.params.hid + '/reply'
          }).then((res) => {
//              let result = res.data.data;
              this.post_reply_list = res.data.data;
              this.post_reply_num = res.data.pager.entities;
          })
      }
    }
  };
</script>

<style>
  .reply-content {
    min-height: 200px;
    padding: 20px;
  }
  .post-append {
    height: auto;
  }
  .append-list {
    background-color: #EFF2F7;
    margin-top: 2px;
  }
  .reply-detail {
    margin-top: 5px;
  }
  .reply-list {
    /*margin-top: 30px;*/
  }
  .line {
    height: 1px;
    background-color: rgba(239, 242, 245, 0.52);
  }
  .block-form {
    padding-top: 20px;
  }
  .reply-note {
    margin: 0 auto 15px;
    background-color: antiquewhite;
  }
</style>

