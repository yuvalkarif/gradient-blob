<script setup lang="ts">
import { onClickOutside, useIntervalFn } from '@vueuse/core'
import { gbc } from '@yuvalkarif/gradient-blob'
import type { BlobFormSettings } from '~/components/types'

const settings = reactive<BlobFormSettings>({
  blur: 100,
  amount: 20,
  cacheChance: 50,
  interval: 2000,
  intervalActive: true,
  opacity: 80,

})
const path = ref('0% 0%')
const settingsRef = ref<HTMLDivElement>()
const settingsCheckboxRef = ref<HTMLInputElement>()

const { gb } = gbc({ cacheChance: 50 })

const { pause, resume } = useIntervalFn(handleClick, settings.interval, { immediate: true, immediateCallback: true })

const blurValue = computed(() => `${settings.blur}px`)
const opacityValue = computed(() => `${settings.opacity}%`)

function handleClick() {
  path.value = gb(settings.amount, { x: { min: 0, max: 100 }, y: { min: 0, max: 100 }, cacheChance: settings.cacheChance })
}
function handleBlobFromChange<Setting extends keyof BlobFormSettings>(key: Setting, value: BlobFormSettings[Setting]) {
  settings[key] = value
}

useAsyncData(async () => {
  handleClick()
})
onClickOutside(settingsRef, () => {
  if (settingsCheckboxRef.value?.checked)
    settingsCheckboxRef.value.checked = false
})
watch(() => settings.intervalActive, (value) => {
  value ? resume() : pause()
})
</script>

<template>
  <div class="flex flex-col h-full">
    <div data-testid="blob-blur" class="h-full w-full blurry cursor-pointer opacity" @click="handleClick">
      <div data-testid="blob" class="flex w-full h-full bg-primary transition-[clip-path] ease-in-out duration-[2.5s] blob" />
    </div>

    <div ref="settingsRef" class="justify-center lg:justify-normal  absolute z-10 top-0 collapse collapse-arrow bg-base-200  shadow-4xl shadow-accent rounded-t-none  max-w-screen-lg left-1/2 -translate-x-1/2">
      <input ref="settingsCheckboxRef" type="checkbox" checked>
      <div class="collapse-title ">
        <div class="flex gap-2 items-center">
          <BlobLogo class="w-7 h-7 mt-1" />
          <h1 class="text-2xl font-bold">
            Gradient Blob Generator
          </h1>
        </div>
      </div>
      <div data-testid="settings-menu" class="collapse-content flex flex-col gap-2">
        <div class="flex flex-col lg:flex-row justify-between gap-4 w-full  lg:h-96 ">
          <BlobForm v-if="settings" class="max-w-prose" :settings="settings" @change="handleBlobFromChange" />
          <div class="flex flex-col gap-2 basis-full">
            <BlobCode class="w-full h-full" :blur="blurValue" :path="path" :opacity="opacityValue" />
            <ThemeSelector class="self-center lg:self-end mt-2" />
          </div>
        </div>
        <pre class="p-1 w-full text-center text-sm p-content">made with ❤️ by <NuxtLink class="link" target="_blank" :external="true" href="https://yuvalkarif.com/">yuvalkarif.com</NuxtLink></pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .blob {
    clip-path: polygon(v-bind(path));
  }
  .blurry {
    filter: blur(v-bind(blurValue));
  }
  .opacity {
    opacity: v-bind(opacityValue);
  }
</style>
