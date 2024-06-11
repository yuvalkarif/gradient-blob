<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import type { BlobCodeProps } from './types'
import { css, html } from '~/helpers'

const props = defineProps<BlobCodeProps>()
type Code = keyof typeof codes

const { copy } = useClipboard()

const active = ref<Code>('css')
const copied = ref(false)
const codeBlockRef = ref<HTMLDivElement>()

const cssCode = computed(() => css(props))
const htmlCode = computed(() => html())

const codes = { css: { activeClass: '!bg-warning', code: cssCode }, html: { activeClass: '!bg-info', code: htmlCode } }

function handleCopy() {
  const text = codeBlockRef.value?.textContent
  if (!text)
    return
  copy(text)
  copied.value = true
}

watch(copied, () => {
  if (!copied.value)
    return
  // fade away animation
  setTimeout(() => {
    copied.value = false
  }, 1000)
})
</script>

<template>
  <div class="prose pb-8">
    <div role="tablist" class="w-1/2 tabs tabs-boxed bg-[var(--tw-prose-pre-bg)] rounded-b-none pb-0">
      <a v-for="(item, index) in (Object.keys(codes) as Code[])" :key="index" role="tab" class="transition-colors tab no-underline font-mono !rounded-b-none text-neutral-content  " :class="{ [`tab-active  ${codes[item].activeClass}`]: item === active }" @click="active = item">{{ item }}</a>
    </div>
    <pre class="mt-0 flex h-full w-full overflow-auto overflow-y-scroll whitespace-pre-wrap break-words  rounded-tl-none">
      <div class="indicator w-auto">
        <ClientOnly>
          <Transition>
            <div v-show="copied" class=" right-11 top-4 indicator-end indicator-top indicator-item badge badge-success text-base rounded-btn">+copied</div>
          </Transition>
        </ClientOnly>
        <code ref="codeBlockRef" class="break-words w-full h-full" v-html="codes[active].code.value" />
      </div>
      <button type="button" class="btn btn-sm px-1 fill-base-content ml-auto " @click="handleCopy()">
          <IconCopy />
      </button>
    </pre>
  </div>
</template>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-500;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>import { css, html } from '~/helpers';
import type { BlobCodeProps } from './types';
import { css, html } from '~/helpers';
import type { BlobCodeProps } from './types';
