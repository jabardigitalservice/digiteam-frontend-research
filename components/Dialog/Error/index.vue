<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10">
      <div class="fixed inset-0 z-10 overflow-y-auto sm:-ml-3">
        <div class="flex min-h-full items-start justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4"
            enter-to="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0"
            leave-to="opacity-0 translate-y-4"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg text-left transition-all"
            >
              <div class="bg-red-400 px-4 pt-4 pb-4 w-full">
                <div class="flex justify-start items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-white mt-1">
                    Username/email atau kata sandi salah. mohon coba lagi!
                  </span>
                  <button
                    ref="cancelButtonRef"
                    type="button"
                    class="ml-2"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#B71B1C"
                      class="w-6 h-6"
                      @click="handlerOpen"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineComponent({
  name: "DialogError",
});

const emit = defineEmits(["setOpen"]);
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

function handlerOpen(n) {
  emit("setOpen", false);
}
</script>
