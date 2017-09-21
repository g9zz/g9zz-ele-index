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


const routes = [
  { path: '/', name: '首页', component: Index,},
  { path: '/post/:hid', name: '详情', component: Show},
  { path: '/post_create', name: '创建', meta: { auth:true }, component: Create},
  { path: '/my', name: '个人中心', meta: { auth:true }, component: My},
  { path: '/login', name: '登录', component: Login },
  { path: '/register', name: '注册', component: Register }
];
const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // Util.title(to.meta.title);

  if (to.matched.some(r => r.meta.auth)) {
    let token =  myCookie.getCookie('token')
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

router.afterEach(() => {

  // window.scrollTo(0, 0);
});


export default router;
