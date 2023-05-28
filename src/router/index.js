import { createRouter, createWebHashHistory } from "vue-router";
import routerLogin from "@/views/login/router";
import routerCount from "@/views/count/router";

const routes = [routerLogin, routerCount];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
