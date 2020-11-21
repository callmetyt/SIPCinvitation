import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import animate from "animate.css";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";

BScroll.use(MouseWheel);
Vue.prototype.BScroll = BScroll;
Vue.use(ViewUI);
Vue.use(animate);
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
