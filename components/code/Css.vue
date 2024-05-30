<script setup lang="ts">
import type { BlobCodeProps } from '../types'

defineProps<BlobCodeProps>()
</script>

<template>
  <div>
    <span class="text-warning">.blur {</span>
    <span class="text-accent">opacity</span>: <span class="text-info">{{ opacity }}</span>;
    <span class="text-accent">filter</span>: <span class="text-info">blur({{ blur }})</span>;
    <span class="text-warning">}</span>
    <span class="text-warning">.blob {</span>
    <span class="text-accent">clip-path</span>:<span class="text-info"> polygon({{ path.trim() }})</span>
    <span class="text-warning">}</span>
  </div>
</template>
