<script setup lang="ts">
import type { BlobFormSettings } from './types'

const props = defineProps<{
  settings: BlobFormSettings
}>()

const emit = defineEmits<{
  <Setting extends keyof BlobFormSettings>(e: 'change', key: Setting, value: BlobFormSettings[Setting]): void
}>()

const inputs = computed(() => {
  return [
    {
      label: `Points <b>${props.settings.amount}</b>`,
      modelValue: props.settings.amount,
      update: (event: Event) => emit('change', 'amount', Number((event.target as HTMLInputElement).value)),
      attrs: {
        type: 'range',
        min: '0',
        max: '100',
        class: 'range range-xs',
      },
    },
    {
      label: `Blur <b>${props.settings.blur}</b>`,
      modelValue: props.settings.blur,
      update: (event: Event) => emit('change', 'blur', Number((event.target as HTMLInputElement).value)),
      attrs: {
        type: 'range',
        min: '0',
        max: '100',
        class: 'range range-xs',
      },
    },
    {
      label: `Opacity <b>${props.settings.opacity}%</b>`,
      modelValue: props.settings.opacity,
      update: (event: Event) => emit('change', 'opacity', Number((event.target as HTMLInputElement).value)),
      attrs: {
        type: 'range',
        min: '0',
        max: '100',
        class: 'range range-xs',
      },
    },
    {
      label: `Change on Interval`,
      modelValue: props.settings.intervalActive,
      update: (event: Event) => emit('change', 'intervalActive', Boolean(((event.target as HTMLInputElement)).checked)),
      attrs: {
        type: 'checkbox',
        class: 'toggle toggle-sm',
        checked: props.settings.intervalActive,
      },
    },
    {
      label: `Interval Timeout <b>${props.settings.interval}ms</b>`,
      modelValue: props.settings.interval,
      update: (event: Event) => emit('change', 'interval', Number((event.target as HTMLInputElement).value)),
      attrs: {
        type: 'text',
        class: 'input input-xs input-bordered',
        disabled: !props.settings.intervalActive,
      },
    },
    {
      label: `Cache Chance <b>${props.settings.cacheChance}%</b> <span class="tooltip fill-info" data-tip="Chance of each point to get its value replaced."><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: inherit;transform: ;msFilter:;"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg></span>`,
      modelValue: props.settings.cacheChance,
      update: (event: Event) => emit('change', 'cacheChance', Number((event.target as HTMLInputElement).value)),
      attrs: {
        type: 'range',
        min: '0',
        max: '100',
        class: 'range range-xs',
      },

    },
  ]
})
</script>

<template>
  <div v-if="inputs && inputs?.length" class="grid grid-cols-1 gap-x-4 gap-y-1 w-full">
    <label v-for="input, idx in inputs" :key="idx" class="form-control flex flex-col">
      <div class="label">
        <span class="label-text" v-html="input.label" />
      </div>
      <input v-bind="input.attrs" :value="input.modelValue" @input="input.update" @change="input.update">
    </label>
  </div>
</template>
