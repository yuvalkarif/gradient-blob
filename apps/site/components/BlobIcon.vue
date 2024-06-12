<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { gbc } from '@yuvalkarif/gradient-blob'

const path = ref('0% 0%')
const { gb } = gbc({ cacheChance: 50 })

useIntervalFn(handleClick, 2000, { immediate: true, immediateCallback: true })

function handleClick() {
  path.value = gb(8, { x: { min: -50, max: 150 }, y: { min: -50, max: 150 }, cacheChance: 70 })
}
</script>

<template>
  <div class="flex blurry-icon  h-full w-full">
    <div class="blob-icon w-full h-full bg-primary transition-[clip-path] ease-in-out duration-[4s]" />
  </div>
</template>

<style lang="postcss" scoped>
  .blob-icon {
    clip-path: polygon(v-bind(path));
  }
  .blurry-icon {
    filter: blur(3px);
  }
</style>
