<script setup lang="ts">
useAsyncData(async () => {
  const isServer = process.server
  return isServer
})
useHead({
  title: 'Gradient Blob CSS Generator',

})
</script>

<template>
  <div class="h-screen w-screen">
    <NuxtPage />
  </div>
</template>
