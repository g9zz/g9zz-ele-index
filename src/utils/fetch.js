/**
 * Created by zhu on 2017/9/18.
 */
import axios from 'axios';
import { Message } from 'element-ui';
import cookie from '../utils/cookie.js';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,                  // 请求超时时间
  params:{}
});

// request拦截器
service.interceptors.request.use(config => {
// console.log('请求前');
  if (config.method === 'get') {
    config.params['limit'] = 50;
  }

  if (cookie.getCookie('token') ) {
    config.headers['x-auth-token'] = cookie.getCookie('token'); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }

  return config;
}, error => {
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(function (response) {
    // console.log('请求后',this.$route.params);

    // console.log(response.data);
    const code = response.data.code;
    const message = response.data.message;
    if (code === 411000000) {
      location.href = '/login'
    }
    if (code !== 0 && code !== 200 ) {
        Message({
          message: message,
          type: 'error',
          duration: 5 * 1000
        });
    }
    return response;
},
  // response => {
  //   const code = this.data.code;
  //   console.log('code=',code);
  // },
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  // checkStatus(response);
  // checkCode(response)
  // const code = response.data.code;
  // console.log("响应:",response.data)
  // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
  // if (code === 50008 || code === 50014 || code === 50012) {
  //   Message({
  //     message: res.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   });
  //   // 登出
  //   store.dispatch('FedLogOut').then(() => {
  //     router.push({ path: '/login' })
  //   });
  // } else {
  //   return response
  // }
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
