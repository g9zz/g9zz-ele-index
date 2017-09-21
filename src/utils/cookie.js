/**
 * Created by zhu on 2017/9/21.
 */




export default {
  /*set cookie*/
  setCookie(name, value, Days){
    if (Days == null || Days == '') {
      Days = 1;
    }
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 11 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString();
    //document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  },

  /*get cookie*/
  getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  },

  /*get all cookie*/
  getAllCookie(){
    return document.cookie;
  },

  /* clear cookie*/
  clearCookie(name){
    setCookie(name, '', -1);
  },

  /* del cookie*/
  delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
  }
}
