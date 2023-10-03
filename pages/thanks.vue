<script setup>
definePageMeta({
  pageTransition: {
    name: 'reduction'
  }
})
</script>

<template>
  <div class="thanks">
    <div class="nes-container is-rounded !h-[95vh]">
      <p class="font-numochi nes-balloon from-left nes-pointer">
        ご送信いただきありがとうございました！
      </p>
      <DotCharacterA />
    </div>
  </div>

  <div class="layer bg-white absolute w-full h-full top-0 left-0 -z-10" />
  
</template>

<style lang="scss">
.thanks {
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