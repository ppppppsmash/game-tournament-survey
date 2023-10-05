<script setup>
const props = defineProps(['image'])

const isMuted = ref(true)

const mutedHandler = () => {
  isMuted.value = !isMuted.value
}
</script>

<template>
  <div class="absolute top-0 right-0">
    <div
      class="transition ease-in-out
        delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      :class="isMuted ? 'animate-none' : 'animate-jello-horizontal'"
      @click="mutedHandler"
      >
      <i
        class="nes-icon is-large star"
        :class="[isMuted ? 'is-transparent' : '']"
      />
    <p class="text-center">BGM</p>
    </div>

      <div v-if="isMuted">
        <audio preload="auto" autoplay loop muted>
          <source src="/audio/bgm.ogg">
        </audio>
      </div>
      <div v-else>
        <audio preload="auto" autoplay loop>
          <source src="/audio/bgm.ogg">
        </audio>
      </div>
    </div>
</template>