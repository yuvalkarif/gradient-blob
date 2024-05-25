<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  blur: string
  path: string
  opacity: string
}>()
type Code = keyof typeof codes

const active = ref<Code>('css')
const copied = ref(false)

const cssCode = computed(() => `<span class="text-warning">.blur {</span>
<span class="text-accent">opacity</span>: <span class="text-info">${props.opacity}</span>;
<span class="text-accent">filter</span>: <span class="text-info">blur(${props.blur})</span>;
<span class="text-warning">}</span>
<span class="text-warning">.blob {</span>
<span class="text-accent">clip-path</span>:<span class="text-info"> polygon(${props.path.trim()})</span>
<span class="text-warning">}</span>
`)

const htmlCode = computed(() => `&lt;<span class="text-info">div</span><span class="text-accent"> class</span><span class="text-warning">="blur"</span> &gt;
  &lt;<span class="text-info">div</span><span class="text-accent"> class</span><span class="text-warning">="blob"</span> /&gt;
&lt;/<span class="text-info">div</span>&gt;`)
const codes = { css: { activeClass: '!bg-warning', code: cssCode }, html: { activeClass: '!bg-info', code: htmlCode } }
const { copy } = useClipboard()

function handleCopy(text?: string | undefined) {
  if (!text)
    return
  copy(text)
  copied.value = true
}

watch(copied, () => {
  if (!copied.value)
    return
  setTimeout(() => {
    copied.value = false
  }, 1000)
})
</script>

<template>
  <div class="prose pb-8">
    <div role="tablist" class="w-1/2 tabs tabs-boxed bg-[var(--tw-prose-pre-bg)] rounded-b-none pb-0">
      <a v-for="(item, index) in (Object.keys(codes) as Code[])" :key="index" role="tab" class="transition-colors tab no-underline font-mono !rounded-b-none  " :class="{ [`tab-active  ${codes[item].activeClass}`]: item === active }" @click="active = item">{{ item }}</a>
    </div>
    <pre class="mt-0 flex h-full w-full overflow-auto overflow-y-scroll whitespace-pre-wrap break-words  rounded-tl-none">
      <div class="indicator w-auto">
        <Transition>
          <span v-show="copied" class=" right-11 top-4 indicator-end indicator-top indicator-item badge badge-success text-base rounded-btn">+copied</span>
        </Transition>
        <code class="break-words w-full h-full" v-html="codes[active].code.value" />
      </div>
      <button type="button" class="btn btn-sm px-1 fill-base-content ml-auto " @click="handleCopy(cssCode)">
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
</style>
