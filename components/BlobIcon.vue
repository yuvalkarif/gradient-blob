<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { gbc } from '~/gradient-blob'

const path = ref('0% 0%')
const { gb } = gbc({ cacheChance: 50 })

useIntervalFn(handleClick, 2000, { immediate: true, immediateCallback: true })

function handleClick() {
  path.value = gb(8, { x: { min: 0, max: 100 }, y: { min: 0, max: 100 }, cacheChance: 70 })
}
</script>

<template>
  <div class="border-base-content/10 border rounded-full overflow-hidden">
    <div class="flex blurry-icon  h-full w-full">
      <div class="blob-icon w-full h-full bg-info transition-[clip-path] ease-in-out duration-[4s]" />
    </div>
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
