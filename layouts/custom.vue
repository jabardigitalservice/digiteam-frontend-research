<template>
    <NuxtLayout :name="layout">
        <header class="bg-[#E5E5E5] sticky top-0">
            <nav class="mx-auto flex max-w-xl h-12 items-center justify-between p-4" aria-label="Global">
                <div class="flex">
                    <nuxt-link nuxt-link-go-back class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900" @click.prevent="$router.back()">
                    <ChevronLeftIcon class="h-6 w-6" aria-hidden="true" />
                    </nuxt-link>
                </div>
                <div class="flex">
                    <h1 class="text-base text-gray-900 font-semibold"></h1>
                </div>
                <div class="flex">
                    <button type="button" class="text-sm text-red-700" @click="logout()">Logout</button>
                </div>
            </nav>
        </header>
        <slot />
    </NuxtLayout>
</template>

<script setup>
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';

const layout = "default";
const authStore = useAuthStore();
const route = useRouter();

async function logout() {
  try {
    await authStore.logout();
    route.push("/");
  } catch (error) {
    console.error(error);
  }
}
</script>