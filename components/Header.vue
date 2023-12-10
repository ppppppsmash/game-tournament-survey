<script setup lang="ts">
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div class="py-6 relative mb-10">
    <NuxtLink to="/">
      <h1
        class="text-xl sm:text-3xl sm:text-center title-style"
        :class="addClass"
      >
        
        <i class="nes-jp-logo brand" />
        My Gaming Survey
      </h1>
    </NuxtLink>
    <BgmCard />
  </div>
</template>

<style lang="scss">
.title-style {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #212529;
}
</style>