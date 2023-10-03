<script setup lang='ts'>
definePageMeta({
  pageTransition: {
    name: 'expand'
  }
})
</script>

<template>
  <div class="second">
    <Header />
    <div>
      <section class="nes-container with-title is-dark">
        <h2 class="title font-numochi font-semibold">しつもん</h2>

        <p class="typewritter font-numochi font-bold text-2xl leading-[3rem]">
          Hello World
        </p>
      </section>
    </div>
  </div>

  <div class="layer bg-black absolute w-full h-full top-0 left-0 -z-10" />
</template>

<style scoped lang="scss">
.second {
  opacity: 0;
  animation: fadeInUp 0.8s 1s ease-in-out forwards;
}

.layer {
  opacity: 0;
  animation: bgcolor 0.1s 0.7s ease forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes bgcolor {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>