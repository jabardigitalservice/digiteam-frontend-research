<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white items-center h-screen">
    <BaseContainer>
      <h3 v-if="tenants.length === 0" class="text-md text-center font-semibold mb-2">Kamu belum bergabung ke dalam organisasi apapun</h3>
      <h3 v-else class="text-md text-center font-semibold mb-2">Pilih Organisasi</h3>
      <TenantList :tenants="tenants" />
    </BaseContainer>
  </div>
</template>

<script setup>
const user = JSON.parse(localStorage.getItem("user"));
const tenants = ref("");
const organizationStore = useOrganizationStore();

onMounted(() => {
  getTenant();
});

const getTenant = async () => {
  await useMyFetch("/me", {
    method: "GET",
  }).then((response) => {
    tenants.value = response.data.user.organizations;
  });
  organizationStore.toOrganization(tenants);
};
</script>
