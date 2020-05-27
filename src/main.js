import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
// 引入ant-design-vue样式
/*
 新项目直接引入报错：https://github.com/ant-design/ant-motion/issues/44
  1.降低less版本
  2.开启JavaScript使用（需要参考CLI的相关配置 ==》https://cli.vuejs.org/zh/config/#vue-config-js）
 */
import "ant-design-vue/dist/antd.less";

import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;
// 将ant-design-vue所有组件全局注入到Vue组件中
Vue.use(Antd);
Vue.use(Auth);
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
