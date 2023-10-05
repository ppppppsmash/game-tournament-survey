<script setup>
const props = defineProps(['image'])
const { image } = toRefs(props)
</script>

<template>
  <div class="absolute z-50 left-0 bottom-8 rounded-md overflow-hidden">
    <div class="w-[180px]">
      <img
        class="w-full"
        :src="image"
      />
    </div>
  </div>
</template>