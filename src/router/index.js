import Router from 'vue-router'
import Hello from '../components/my/Hello'
import Test from '../page/test/test.vue'
import Home from '../components/Home.vue'
import Test2 from '../page/test/Test2.vue'
import Index from '../page/post/Index.vue'
import Show from '../page/post/Show.vue'
import Create from '../page/post/Create.vue'
import My from '../page/my/index.vue'


const routes = [
  {
    path: '/',
    name: '首页',
    component: Index,
  },{
    path: '/post/:hid',
    name: '详情',
    component: Show
  },{
    path: '/post_create',
    name: '创建',
    component: Create
  },{
    path: '/my',
    name: '个人中心',
    component: My
  }
];
const router = new Router({
  mode: 'history',
  routes
});

export default router;
