import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Wrapper from "@/components/Wrapper.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/start",
    name: "start",
    beforeEnter(to, _, next) {
      if (!to.params.grid) {
        return next({ name: "home" });
      }

      return next();
    },
    component: () =>
      import(/* webpackChunkName: "start" */ "@/views/Start.vue"),
  },
  {
    path: "/",
    component: Wrapper,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "failed",
        name: "failed",
        beforeEnter(to, _, next) {
          const { grid, eaten, seconds } = to.params;
          if (!(grid && eaten && seconds)) {
            return next({
              name: "home",
            });
          }

          return next();
        },
        component: () =>
          import(/* webpackChunkName: "failed" */ "@/views/Failed.vue"),
      },
      {
        path: "won",
        name: "won",
        beforeEnter(to, _, next) {
          const { grid, eaten, seconds } = to.params;
          if (!(grid && eaten && seconds)) {
            return next({ name: "home" });
          }

          return next();
        },
        component: () =>
          import(/* webpackChunkName: "won" */ "@/views/Won.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
