<template>
  <div class="main-editor">
    <mavonEditor :style="style" :class="" :toolbars="toolbars" @fullscreen="fullscreen" :default_open="default_open"  :value="value" @save="edited" @change="changes"></mavonEditor>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    data() {
      return {
        value: '',
        style: 'z-index:19',
        default_open: 'edit',
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          undo: true, // 上一步
          redo: true, // 下一步
          preview: true, // 预览
        }
      }
    },
    components: {mavonEditor},
    methods: {
      changes(rendor) {
        return rendor;
      },
      edited(val,rendor){
        this.content = rendor;
        console.log(this.article)
      },
      fullscreen(status){
          if (status) {
            this.style = 'z-index:22';
          } else {
            this.style = 'z-index:10';
          }
      }
    }
  }
</script>
<style scoped>
  .main-editor {
    width: 90%;
  }

</style>
