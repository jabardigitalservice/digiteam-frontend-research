export default defineNuxtRouteMiddleware(async (to) => {
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !localStorage.getItem("token")) {
    return navigateTo("/", { replace: true });
  } else if (localStorage.getItem("token") && to.path === "/") {
    return navigateTo("/pilih-tenant", { replace: true });
  }
});
