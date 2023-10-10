<script setup>
definePageMeta({
  pageTransition: {
    name: 'expand'
  },
  //layout: "question"
})
</script>

<template>
  <div class="survey-form">
    <div class="h-[80vh] overflow-x-scroll">
      <section class="nes-container with-title is-dark">
        <h2 class="title font-numochi font-semibold">しつもん</h2>
        <Form />
      </section>
    </div>
  </div>

  <div class="layer bg-[#212529] absolute w-full h-full top-0 left-0 -z-50" />
</template>

<style scoped lang="scss">
.survey-form {
  position: relative;
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