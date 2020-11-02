import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/less/reset.less";
import "@/less/_variable.less";
import "@/less/index.less";

// import less from "less";
// Vue.use(less);

// 挂载Echarts
Vue.prototype.$echarts = window.echarts;

// 配置请求基本路径
axios.defaults.baseURL = "http://127.0.0.1:9876/api";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
