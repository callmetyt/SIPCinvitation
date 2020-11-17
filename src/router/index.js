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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  let speed = 30;
  let timer = setInterval(() => {
    document.documentElement.scrollTo(
      0,
      (document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop) - speed
    );
    if (
      (document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop) === 0
    ) {
      clearInterval(timer);
    }
  }, 15);
});

export default router;
