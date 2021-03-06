import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "", component: () => import("pages/PageTodo.vue") },
      {
        path: "/settings",
        component: () => import("pages/PageSettings.vue")
        // children: [{ path: "help", component: () => import("pages/Help.vue") }]
      },
      { path: "/settings/help", component: () => import("pages/Help.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
