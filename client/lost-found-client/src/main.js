import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import "font-awesome/scss/font-awesome.scss";
import "./directive";

Vue.config.productionTip = false;
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    sessionStorage.removeItem("user");
  }
  const user = sessionStorage.getItem("user");
  if (!user && to.path !== "/login") {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
