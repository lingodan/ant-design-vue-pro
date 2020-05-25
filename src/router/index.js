import Vue from "vue";
import VueRouter from "vue-router";
// import RenderRouterView from "../components/RenderRouterView"
import NotFound from "../views/404.vue";
import Forbidden from "../views/403.vue";
//加载动画 Nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import findLast from "lodash/findLast";
import { check, isLogin } from "./../utils/auth";

import { notification } from "ant-design-vue";

//vuex 提供路由守卫

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    // 设置标志位，然后在过滤生成菜单时处理
    // 约定按照是否存在name属性来确定，是否配置在Menu中
    hideInMenu: true,
    // component:RenderRouterView,
    // 使用render函数来渲染路由设计
    // component: {render: h => h("router-view")},
    // 使用异步加载，箭头函数
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Register")
      }
    ]
  },
  {
    path: "/",
    meta: { authority: ["user", "admin"] },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: { title: "分析页" },
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis"
              )
          }
        ]
      },
      {
        path: "/form",
        name: "form",
        meta: { icon: "form", title: "表单", authority: ["admin"] },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/form/basic-form",
            name: "basicForm",
            meta: { title: "基础表单" },
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/forms/BasicForm")
          },
          {
            path: "/form/step-form",
            name: "stepform",
            meta: { title: "分步表单" },
            hideChildrenInMenu: true,
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/forms/stepForm"),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info"
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/forms/stepForm/Step1"
                  )
              },
              {
                path: "/form/setp-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/forms/stepForm/Step2"
                  )
              },
              {
                path: "/form/setp-form/info",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "../views/forms/stepForm/Step3"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/403",
    name: "403",
    component: Forbidden,
    hideInMenu: true
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
    hideInMenu: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 配置只有当跳转前后的路径不同时，才会有NProgress效果
  if (to.path != from.path) {
    NProgress.start();
  }
  // to.matched
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有访问权限，请联系管理员"
      });
      next({
        path: "/403"
      });
    }
    NProgress.done();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
