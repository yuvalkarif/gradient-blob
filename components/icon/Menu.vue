<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
}>(), { size: 24 })
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
</template>

<style scoped>

</style>
