import $ from 'jquery'

export  default {
  navbar() {
  (function(){
    var navbarToggle = document.querySelector('.navbar-toggle'),
      navbarNav    = document.querySelector('.navbar'),
      hasClass = function( elem, className ) {
        return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
      },
      toggleClass = function( elem, className ) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if( hasClass(elem, className ) ) {
          while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
          }
          elem.className = newClass.replace( /^\s+|\s+$/g, '' );
        } else {
          elem.className += ' ' + className;
        }
      },
      navbarToggleNav =  function (){
        toggleClass(navbarToggle, "active");
        toggleClass(navbarNav, "collapse");
      }

    if (!navbarToggle.addEventListener) {
      navbarToggle.attachEvent("onclick", navbarToggleNav);
    }
    else {
      navbarToggle.addEventListener('click', navbarToggleNav);
    }
  })()
},
core()  {
  /**
   * Created by lizhenya on 2017/5/5.
   */
  var rootNodeRE = /^(?:body|html)$/i;
  var web = {
    extend: function(){
      // copy reference to target object
      var target = arguments[0] || {}, i = 1, length = arguments.length, options;
      // Handle a deep copy situation
      if (typeof target === "boolean") {

        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
      }
      // Handle case when target is a string or something (possible in deep copy)
      if (typeof target !== "object" && !jQuery.isFunction(target)) target = {};
      // extend jQuery itself if only one argument is passed
      if (length == i) {
        target = this;
        --i;
      }
      for (; i < length; i++)
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
          // Extend the base object
          for (var name in options) {
            var src = target[name], copy = options[name];
            // Prevent never-ending loop
            if (target === copy)
              continue;

            if (copy) target[name] = copy;
          }
        }

      // Return the modified object
      return target;
    },

    bind: function(elem, type, fn, data){
      if (elem.attachEvent) {
        elem.attachEvent('on'+type, function(event){
          if (fn.call(elem, event, data) == false) {
            event.stopPropagation();
            event.preventDefault();
          }
        });
      } else {
        elem.addEventListener(type, function(event){
          if (fn.call(elem, event, data) == false) {
            event.stopPropagation();
            event.preventDefault();
          }
        });
      }
    },
    contains: document.documentElement.contains ?
      function(parent, node) {
        return parent !== node && parent.contains(node)
      } :
      function(parent, node) {
        while (node && (node = node.parentNode))
          if (node === parent) return true
        return false
      },
    offset: function(elem){
      var obj = elem.getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    position: function(elem) {
      if (!elem) return;

      // Get *real* offsetParent
      var	offsetParent = web.offsetParent(elem),
        // Get correct offsets
        offset       = web.offset(elem),
        parentOffset = rootNodeRE.test(offsetParent.nodeName) ? { top: 0, left: 0 } : web.offset(offsetParent);

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( elem.style.marginTop) || 0;
      offset.left -= parseFloat( elem.style.marginLeft ) || 0;

      // Add offsetParent borders
      parentOffset.top  += parseFloat( offsetParent.style.borderTopWidth) || 0;
      parentOffset.left += parseFloat( offsetParent.style.borderLeftWidth ) || 0;

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function(elem) {
      var parent = elem.offsetParent || document.body;
      while (parent && !rootNodeRE.test(parent.nodeName) && parent.style.position == "static")
        parent = parent.offsetParent;
      return parent;
    },
    hasClass: function( elem, className ) {
      return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
    },
    addClass: function( elem, className ) {
      elem.className += ' ' + className;
    },
    removeClass: function( elem, className ) {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
      while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
        newClass = newClass.replace( ' ' + className + ' ' , ' ' );
      }
      elem.className = newClass.replace( /^\s+|\s+$/g, '' );
    },
    toggleClass: function( elem, className ) {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
      if( this.hasClass(elem, className ) ) {
        this.addClass(elem, className);
      } else {
        this.removeClass(elem, className);
      }
    }
  }

  /**
   * 扩展String方法
   */
  web.extend(String.prototype, {
    isPositiveInteger:function(){
      return (new RegExp(/^[1-9]\d*$/).test(this));
    },
    isInteger:function(){
      return (new RegExp(/^\d+$/).test(this));
    },
    isNumber: function(value, element) {
      return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this));
    },
    trim:function(){
      return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "");
    },
    startsWith:function (pattern){
      return this.indexOf(pattern) === 0;
    },
    endsWith:function(pattern) {
      var d = this.length - pattern.length;
      return d >= 0 && this.lastIndexOf(pattern) === d;
    },
    replaceSuffix:function(index){
      return this.replace(/\[[0-9]+\]/,'['+index+']').replace('#index#',index);
    },
    trans:function(){
      return this.replace(/&lt;/g, '<').replace(/&gt;/g,'>').replace(/&quot;/g, '"');
    },
    encodeTXT: function(){
      return (this).replaceAll('&', '&amp;').replaceAll("<","&lt;").replaceAll(">", "&gt;").replaceAll(" ", "&nbsp;");
    },
    replaceAll:function(os, ns){
      return this.replace(new RegExp(os,"gm"),ns);
    },
    replaceTm:function($data){
      if (!$data) return this;
      return this.replace(RegExp("({[A-Za-z_]+[A-Za-z0-9_]*})","g"), function($1){
        return $data[$1.replace(/[{}]+/g, "")];
      });
    },
    replaceTmById:function(_box){
      var $parent = _box || $(document);
      return this.replace(RegExp("({[A-Za-z_]+[A-Za-z0-9_]*})","g"), function($1){
        var $input = $parent.find("#"+$1.replace(/[{}]+/g, ""));
        return $input.val() ? $input.val() : $1;
      });
    },
    isFinishedTm:function(){
      return !(new RegExp("{[A-Za-z_]+[A-Za-z0-9_]*}").test(this));
    },
    skipChar:function(ch) {
      if (!this || this.length===0) {return '';}
      if (this.charAt(0)===ch) {return this.substring(1).skipChar(ch);}
      return this;
    },
    isValidPwd:function() {
      return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this));
    },
    isValidMail:function(){
      return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()));
    },
    isSpaces:function() {
      for(var i=0; i<this.length; i+=1) {
        var ch = this.charAt(i);
        if (ch!=' '&& ch!="\n" && ch!="\t" && ch!="\r") {return false;}
      }
      return true;
    },
    isPhone:function() {
      return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/).test(this));
    },
    isUrl:function(){
      return (new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this));
    },
    isExternalUrl:function(){
      return this.isUrl() && this.indexOf("://"+document.domain) == -1;
    }
  });

  /**
   *
   * web.ajax({method:'POST', url:'data.html', data: {name:'test', value:'aaa'}, callback:function(result){
 * 		console.log(this, result)
 * 	}
 * });
   *
   */
  web.ajax = function(options){

    var op = web.extend({method:'GET', url:'', data:{}, callback:function(){}}, options);

    function createXMLHttp() {
      var xmlHttp;
      if (window.ActiveXObject)
      {
        var arr=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"];
        for(var i=0;i<arr.length;i++) {
          try {
            xmlHttp = new ActiveXObject(arr[i]);
            return xmlHttp;
          }
          catch(error) { }
        }
      } else {
        try {
          xmlHttp = new XMLHttpRequest();
          return xmlHttp;
        }
        catch(otherError) { }
      }
    }

    var xmlHttp = createXMLHttp(),
      postData = '';

    xmlHttp.open(op.method,op.url+'?t=' + new Date().getTime(),true);
    if (op.method == "POST") {
      //xmlHttp.setRequestHeader("content-length",op.data.length);//post提交设置项
      xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");//post提交

      if (op.data) {
        for ( var key in op.data ){
          postData += (postData ? '&' : '')+key+'='+op.data[key];
        }
      }
    }
    xmlHttp.onreadystatechange = function() {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var result = xmlHttp.responseText;
        if (result && result.length > 0){
          if (op.callback) op.callback.call(xmlHttp, result);
        }
      }
    }

    xmlHttp.send(postData);
  }

  web.dialog = {
    open:function(options){
      var op = web.extend({url:''}, options);

      if (op.url) {
        web.ajax({url:op.url, callback:function(html){
          document.querySelector('.dialog-body').innerHTML = html;
        }});
      }
      web.addClass(document.body, 'modal-open');
    },
    close:function(){
      web.removeClass(document.body, 'modal-open');
    },
    init:function(parent) {

      var $p = parent || document.body,
        $dialogLinks = $p.querySelectorAll('a[target=dialog]');
      for (var i=0; i<$dialogLinks.length; i++) {
        web.bind($dialogLinks[i], 'click', function(event, data){
          var url = $dialogLinks[data].href;
          web.dialog.open({url: url});

          return false;
        }, i);
      }
    }
  }

// init dialog
  web.dialog.init();

  /**
   * Created by lizhenya on 2017/5/5.
   */

  web.bind(window, 'scroll', function(){

    // 向下滚动到当前窗口40%，header加样式hrink-nav
    var scrollTop  = window.pageYOffset || document.scrollTop,
      winH = window.innerHeight || document.body.clientHeight;
    var header = document.getElementById('header');

    if (scrollTop > winH * 0.4) {
      if (!web.hasClass(header, 'shrink-nav')) web.addClass(header, 'shrink-nav');
    } else {
      web.removeClass(header, 'shrink-nav');
    }

  });

  if (web.adtabs) web.adtabs({box$:'section.carousel'});
  if (web.subnav) web.subnav({box$:'nav.sub-nav'});

// 工作机会
  var $jts = document.querySelectorAll('.jobs-title'),
    $jcs = document.querySelectorAll('.jobs-content');
  for (var i=0; i<$jts.length; i++) {
    $jcs[i].style.display = 'block';

    web.bind($jts[i], 'click', function(event, data){
      if ($jcs[data].style.display == 'none') {

        for (var j=0;j<$jcs.length;j++) {
          if ($jcs[j].style.display != 'none' && j<data) { // 判断上一个显示内容是否在当前点击内容之前
            var scrollTop  = window.pageYOffset || document.scrollTop,
              offset = web.offset($jcs[j]);

            scrollTop -= offset.height;
            if (scrollTop > 0) scrollTo(0, scrollTop);
          }

          $jcs[j].style.display = data==j ? 'block' : 'none';
        }

      } else { //点击当前切换显示展开或收起
        $jcs[data].style.display = 'none';
      }
    }, i);
  }


}
}

