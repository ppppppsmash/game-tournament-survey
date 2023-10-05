<script setup lang="ts">
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div class="my-6 relative mb-20">
    <NuxtLink to="/">
      <h1
        class="text-3xl text-center title-style"
        :class="addClass"
      >
        
        <i class="nes-jp-logo brand" />
        Webcrew's Gaming Tournament Survey
      </h1>
    </NuxtLink>
    <BgmCard />
  </div>
</template>

<style lang="scss">
.title-style {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
</style>