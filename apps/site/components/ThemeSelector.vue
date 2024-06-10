<script setup lang="ts">
import { themes } from '~/globals/themes'

const localStorageValue = '__theme__' as const
type ThemeOption = typeof themes[number]
const selectedTheme = ref<ThemeOption>('dark')

onMounted(() => {
  let cached: string | undefined
  try {
    cached = JSON.parse(localStorage.getItem(localStorageValue)!)
  }
  catch (error) {}

  if (cached && themes.includes(cached as ThemeOption))
    selectedTheme.value = cached as ThemeOption
})
watch(selectedTheme, () => {
  localStorage.setItem(localStorageValue, JSON.stringify(selectedTheme.value))
})
const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>
const options = computed(() => themes.map((theme) => {
  return {
    'aria-label': capitalize(theme),
    'value': theme,
    'checked': selectedTheme.value === theme,
  }
}))
</script>

<template>
  <div class="flex gap-1">
    <div v-for="option, index in options" :key="index" class="form-control">
      <label class="label cursor-pointer gap-1">
        <span class=" label-text-alt ">{{ option['aria-label'] }}</span>
        <input type="radio" name="theme-radios" class="radio radio-xs checked:bg-primary theme-controller" :value="option.value" :checked="option.checked" @change="selectedTheme = option.value">
      </label>
    </div>
  </div>
</template>
