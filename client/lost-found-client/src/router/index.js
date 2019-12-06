import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Container from "../views/frame/Container.vue";
import Login from "../views/frame/Login.vue";
import Dashboard from "../views/frame/Dashboard";
import Article from "../views/frame/Article";
import Table from "../views/frame/Table";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    redirect: "/dashboard",
    name: "Container",
    component: Container,
    children: [
      { path: "dashboard", name: "首页", component: Dashboard },
      { path: "article", name: "文章", component: Article },
      { path: "table", name: "列表", component: Table }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
