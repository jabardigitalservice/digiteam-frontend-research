<template>
  <div class="relative flex flex-wrap">
    <div class="w-full relative">
      <div class="mt-4">
        <VForm :validation-schema="schema" @submit="login" v-slot="{ validate }" >
          <div class="mx-auto max-w-lg">
            <div class="py-2">
              <label for="email" class="px-1 text-sm font-medium text-gray-800"
                >Username / email</label
              >
              <FormInputField
                v-model="loginForm.username"
                name="email"
                placeholder="Masukkan username atau email"
                type="email"
                label="Username/email"
              />
              <VErrorMessage
                class="text-sm font-normal text-red-700"
                name="email"
              />
            </div>
            <div class="py-2">
              <label
                for="password"
                class="px-1 text-sm font-medium text-gray-800"
                >Kata Sandi</label
              >
              <div class="relative">
                <FormInputField
                  v-model="loginForm.password"
                  name="password"
                  placeholder="Masukkan kata sandi"
                  :type="show ? 'password' : 'text'"
                  label="Kata sandi"
                />
                <div
                  class="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer bg-gray-100 rounded-r-lg border border-gray-300 border-l-0"
                >
                  <svg
                    v-if="show"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#9E9E9E"
                    class="w-6 h-6"
                    @click="show = !show"
                  >
                    <path
                      d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"
                    />
                    <path
                      d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"
                    />
                    <path
                      d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#212121"
                    class="w-6 h-6"
                    @click="show = !show"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <VErrorMessage
                class="text-sm font-normal text-red-700"
                name="password"
              />
            </div>
            <div class="flex items-center justify-between my-5">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-700"
                  />
                </div>
                <div class="ml-3 text-sm font-medium">
                  <label for="remember" class="text-gray-800">Ingat saya</label>
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-blue-700 hover:underline"
                >Lupa kata sandi</a
              >
            </div>
            <BaseButton :disabled="loading" @click="validate">
              <svg
                v-if="loading"
                aria-hidden="true"
                class="w-8 h-6 mx-auto text-white animate-spin fill-[#BAD5F1]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <NuxtLink v-else to="/"> Masuk </NuxtLink>
            </BaseButton>
          </div>
        </VForm>
      </div>
    </div>
    <dialog-error :open="isOpen" @setOpen="setIsOpen" />
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const schema = {
  email: "required",
  password: "required|min:8",
};

const authStore = useAuthStore();
const route = useRouter();

interface loginForm {
  username: string;
  password: string;
}

let loginForm: loginForm = {
  username: "",
  password: "",
};

const show = ref(true);
const isOpen = ref(false);
const loading = ref(false);

async function login() {
  try {
    loading.value = true;
    await authStore.login(loginForm);
    route.push("/pilih-tenant");
  } catch (error) {
    console.error(error);
    isOpen.value = true;
  } finally {
    loading.value = false;
  }
}

function setIsOpen(value: boolean) {
  isOpen.value = value;
}
</script>
