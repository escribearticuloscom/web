const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Home.vue") }],
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Blog.vue") }],
  },
  {
    path: "/aboutUs",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/AboutUs.vue") }],
  },
  {
    path: "/prices",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Prices.vue") }],
  },
  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Contact.vue") }],
  },
  {
    path: "/blogs/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Blogs.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
