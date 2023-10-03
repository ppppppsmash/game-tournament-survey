<script setup lang="ts">
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div class="my-6">
    <h1 class="text-2xl text-center" :class="addClass">
      <i class="nes-jp-logo brand" />
      Webcrew's Gaming Tournament Survey</h1>
  </div>
</template>