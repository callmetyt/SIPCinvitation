import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "invitation",
    component: () => import("../views/invitation.vue"),
  },
  {
    path: "/arrange",
    name: "arrange",
    component: () => import("../views/arrange.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/info.vue"),
  },
  {
    path: "/end",
    name: "end",
    component: () => import("../views/end.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
