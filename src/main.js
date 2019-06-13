import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import BaseIcon from "@/components/BaseIcon";
//import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

// Vue.component("BaseIcon", BaseIcon);
//Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
