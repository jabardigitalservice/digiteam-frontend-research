export const useMyFetch = (request: any, organizationSlug: any, opts: any) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const requestOptions = {
    baseURL: config.public.baseURL2,
    ...opts,
  };
  if (localStorage.getItem("token")) {
    requestOptions.headers = { Authorization: `Bearer ${authStore.token}`, organization: `${organizationSlug}` };
  }
  return $fetch(request, requestOptions);
};
