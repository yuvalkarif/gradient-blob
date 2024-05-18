<script setup lang="ts">
import { gbc } from '~/gradient-blob'

const path = ref('0% 0%')
const blur = ref(100)
const amount = ref(20)
const { gb } = gbc({ cachePercentage: 90 })
function handleClick() {
  path.value = gb(amount.value, { x: { min: 0, max: 100 }, y: { min: 0, max: 100 } })
}
onMounted(() => {
  handleClick()
  setInterval(handleClick, 2000)
})
</script>

<template>
  <div class="flex flex-[1] flex-col min-h-0 h-full w-full ">
    <div class="">
      Blob Maker
      <br>
      <input v-model="amount" min="0" max="100" type="range">
      amount {{ amount }}
      </input>
      <br>
      <input v-model="blur" min="0" max="200" type="range">
      blur {{ blur }}
      </input>
      <br>
      {{ path }}
    </div>
    <div class="h-screen w-full blurry cursor-pointer opacity-80 " @click="handleClick">
      <div class="flex w-full h-full bg-red-700 transition-all ease-in-out duration-[2.5s] blob" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .blob {
    clip-path: polygon(v-bind(path))
  }
  .blurry {
    filter: blur(calc(v-bind(blur) * 1px))
  }
</style>
