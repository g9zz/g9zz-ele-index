<template>
  <div id="editor-md" class="main-editor">
    <textarea></textarea>
  </div>
</template>

<script>
  import $script from 'scriptjs';

  export default {
    name: 'EditDocMainEditor',
    props: {
      editorPath: {
        type: String,
        default: '/static/plugins/',
      },
      editorConfig: {
        type: Object,
        default() {
          return {
            width: '88%',
            height: 300,
            path: '/static/plugins/lib/', // Autoload modules mode, codemirror, marked... dependents libs path
            codeFold: true,
            saveHTMLToTextarea: true,
            searchReplace: true,
            htmlDecode: 'style,script,iframe|on*',
            emoji: true,
            taskList: true,
            tocm: true,                  // Using [TOCM]
            tex: true,                   // 开启科学公式TeX语言支持，默认关闭
            flowChart: true,             // 开启流程图支持，默认关闭
            sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
            atLink    : true,    // disable @link
            emailLink : true,
            watch: false,
            toolbarIcons : function() {
              return ["watch", "fullscreen", "preview",]
            },
            onload: () => {
              // eslint-disable-next-line
              console.log('onload', this);
            },
          };
        },
      },
    },
    data() {
      return {
        instance: null,
      };
    },
    created() {
    },
    mounted() {

      $script([
        `https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js`,
        `https://cdn.bootcss.com/zepto/1.2.0/zepto.js`,
      ], () => {
        $script(`https://odu38kv7q.qnssl.com/editormd.min.js`, () => {
          this.initEditor();
        });
      });
    },
    beforeDestroy() {
    },
    methods: {
      initEditor() {
        // eslint-disable-next-line
        this.$nextTick((editorMD = window.editormd) => {
          if (editorMD) {
            // Vue 异步执行 DOM 更新，template 里面的 script 标签异步创建
            // 所以，只能在 nextTick 里面初始化 editor.md
            this.instance = editorMD('editor-md', this.editorConfig);
          }
        });
      },

    },
  };
</script>

<style>
  @import "../../static/plugins/css/editormd.min.css";

</style>
