<script setup lang="ts">
import { Tooltip } from 'floating-vue'
import 'floating-vue/dist/style.css'
</script>

<template>
  <div class="h-screen w-full bg-slate-900 font relative flex justify-center items-center">
    <div class="z-50">
      <Tooltip>
        <a class="text-white text-6xl font-medium z-50">
          Typescript
        </a>
        <template #popper>
          <div class="w-20">
            baba
          </div>
        </template>
      </Tooltip>
    </div>
    <div class="z-10 absolute w-full h-full blur [--tw-blur:blur(50px)] opacity-30">
      <div class="mask w-full h-4/5 bg-yellow-300 " />
    </div>
    <div class="absolute w-full h-1/2 blur [--tw-blur:blur(70px)] opacity-50">
      <div class="mask2 w-full h-4/5 bg-blue-500 " />
    </div>
  </div>
</template>

<style>
.mask {
  clip-path: polygon(26.01% 0.81%, 42.94% 34.21%, 64.89% 34.21%, 97.3% 17.46%, 97.3% 41.04%, 73.33% 68.24%, 92.39% 79.82%, 92.39% 94.78%, 73.92% 99.43%, 60.58% 88.49%, 51.73% 68.24%, 30.48% 62.19%, 20.92% 42.27%, 0.94% 20.73%, 20.92% 24.94%);
}
.mask2 {
  transform: rotate(180deg);
  clip-path: polygon(34% 25%, 63% 39%, 100% 20%, 91% 39%, 86% 65%, 37% 64%, 2% 79%, 7% 49%);
}
</style>
