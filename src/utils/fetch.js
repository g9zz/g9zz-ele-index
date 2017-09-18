/**
 * Created by zhu on 2017/9/18.
 */
import axios from 'axios';
import { Message } from 'element-ui';
// import store from '../store';
// import router from '../router';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
});


function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  config.params['limit'] = 4;
    config.headers['x-auth-token'] = '22222222'; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => response
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  // checkStatus(response);
  // checkCode(response)
  // const code = response.data.code;
  // console.log("响应:",response.data)
  // // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
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
  ,
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
