<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <BaseContainer>
    <UserProfile
      v-if="dataOrganization"
      :name="user.name"
      :organization="dataOrganization.name"
    />
    <h3 class="text-md font-semibold mt-3 mb-2">Artikel</h3>
    <Article v-if="articles" :articles="articles" />
  </BaseContainer>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const articles = ref("");
const user = JSON.parse(localStorage.getItem("user"));
const organization = JSON.parse(localStorage.getItem("organization"));
const dataOrganization = organization.find(
  (item) => item.slug === route.params.tenant
);

onMounted(() => {
  getValidate();
});

function getValidate() {
  if (organization.some((item) => item.slug === route.params.tenant)) {
    getArticle();
  } else {
    router.push({ path: "/organization" });
  }
}

const getArticle = async () => {
  await useMyFetch(`/article?organization=${dataOrganization.slug}`, {
    method: "GET",
  }).then((response) => {
    articles.value = response.data;
  });
};
</script>
