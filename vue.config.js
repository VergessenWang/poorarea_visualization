const path = require("path");

module.exports = {
  devServer: {
    port: 9876, //端口号
    open: true // 自动打开
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/less/_varibles.less")]
    }
  }

  // css: {
  //   loaderOptions: {
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },
};
