import Router from 'vue-router'
import Hello from '../components/my/Hello'
import Test from '../page/test/test.vue'
import Home from '../components/Home.vue'
import Test2 from '../page/test/Test2.vue'
import Index from '../page/post/Index.vue'
import Show from '../page/post/Show.vue'
import Create from '../page/post/Create.vue'
import My from '../page/my/index.vue'
import Login from '../page/auth/Login.vue'
import Register from '../page/auth/Register.vue'
import myCookie from '../utils/cookie.js'
import AuthLogin from '../page/auth/AuthLogin.vue'
import NodeIndex from '../page/node/Index.vue'
import PostListWithNode from '../page/node/Post.vue'

const routes = [
  { path: '/', name: '首页', component: Index,},
  { path: '/post/:hid', name: '详情', component: Show},
  { path: '/post_create', name: '创建', meta: { auth:true }, component: Create},
  { path: '/my', name: '个人中心', meta: { auth:true }, component: My},
  { path: '/node', name: '节点列表', component: NodeIndex },
  { path: '/node/:hid/post', name: '节点列表', component: PostListWithNode },
  { path: '/login', name: '登录', component: Login },
  { path: '/register', name: '注册', component: Register },
  { path: '/authLogin', name: '注册', component: AuthLogin }
];
const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  let token =  myCookie.getCookie('token')
  if (to.matched.some(r => r.meta.auth)) {
    if (token) {
      next();
    } else {
      next();

      // next({
      //   path: '/login',
      //   query: {redirect: to.fullPath}
      // })
    }
  } else {
    // if (token) {
    //   if (to.path == '/login') {
    //     router.go(-1);
    //   }
    // }
      next();
  }
});

router.afterEach(() => {

  // window.scrollTo(0, 0);
});


export default router;
