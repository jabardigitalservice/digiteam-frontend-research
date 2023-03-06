<template>
  <div class="bg-white items-center">
    <BaseContainer>
      <LogoDigiteam class="mx-auto h-28 w-28 my-8" />
      <h1 class="text-base font-semibold text-center">Masuk ke Akun Anda</h1>
      <button
        class="flex space-x-2 items-center my-6 justify-center text-sm font-medium w-full rounded-lg px-6 py-2 bg-white text-gray-800 border border-gray-300"
      >
        <LogoGoogle />
        <span>Masuk dengan Google</span>
      </button>
      <div class="flex items-center justify-center space-x-2">
        <span class="h-[1px] w-full bg-gray-200"></span>
        <span class="text-sm font-normal text-gray-600">atau</span>
        <span class="h-[1px] w-full bg-gray-200"></span>
      </div>
      <FormLogin />
    </BaseContainer>
  </div>
</template>
