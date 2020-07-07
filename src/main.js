import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

FastClick.attach(document.body);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: "dist/error.png",
  loading: require("./assets/img/common/placeholder.png"),
  attempt: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
