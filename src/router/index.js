import Vue from "vue";
import VueRouter from "vue-router";

// const Home = () => import('../views/home/Home')

const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");

const Detail = () => import("../views/detail/detail");

Vue.use(VueRouter);

//解决路由重复点击报红
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/home/Home"),
  },

  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
