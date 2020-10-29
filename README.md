# poorarea_visualization

一个从 0 开始的可视化项目，正在开发中...

### 开发日记

#### 2020.10.29

项目基本框架的搭建。

基于 Vue-cli,引入 Babel Router Vuex Less ESLint + Prettier

在 vue.config.js 中自定义端口并在启动项目时自动打开浏览器

**引入 Echarts**

index.html 文件中通过 script 标签引入 echarts, 此时用 window.echarts 为全局的 echarts 对象. 我用的是[字节的 CDN](https://cdn.jsdelivr.net/npm/echarts@4.9.0/dist/echarts.min.js)
然后全局的 echarts 对象挂载到 vue 的原型对象上：在 main.js 中挂载

**引入 Axios**

配置基本路径 `axios.defaults.baseURL = "http://127.0.0.1:xxx/api"` 并挂载

另外，完成了一些基本组件的引入以及全局样式的简单配置。

今日 bug

> Prettier 总是提示 warning 强迫症很难受，下次我一定不用它来格式化了

解决方法：

1. `npm run lint --fix` 可以每次 commit 之前用一下
