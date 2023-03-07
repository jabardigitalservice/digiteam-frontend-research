export const useMyFetch = (request: any, opts: any) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const requestOptions = {
    baseURL: config.public.baseURL1,
    ...opts,
  };
  if (localStorage.getItem("token")) {
    requestOptions.headers = { Authorization: `Bearer ${authStore.token}` };
  }
  return $fetch(request, requestOptions);
};
