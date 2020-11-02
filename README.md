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

#### 2020.11.02

重新配置全局样式。 引入 reset 对样式进行重置，在 index.less 中定义一些常用的样式类， 添加颜色变量以便全局引用

初步构思了一下几个模块的大致布局比例和内容。

另外感觉这方面的数据不是很容易得到，先用静态数据

今日 bug

> Module build failed (from ./node_modules/less-loader/dist/cjs.js)

首先检查 package.json 查看版本：
`"less": "^3.0.4"` `"less-loader": "^5.0.0"`

试了[好几个解决方案](https://www.cnblogs.com/ajaemp/p/12024106.html)，都不行，算了先不用全局变量，之后换 sass 吧
