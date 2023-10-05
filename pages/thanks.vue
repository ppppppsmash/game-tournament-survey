<script setup>

definePageMeta({
  pageTransition: {
    name: 'reduction'
  }
})

</script>

<template>
  <div class="thanks">
    <Cracker />
    <div class="flex justify-center mb-2 ml-2 gap-x-6">
      <DotCharacterB
        addClass="block w-20 vertical-action mr-14"
        style="animationDelay: 1s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 1.4s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 1.6s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 1.8s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 2s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 2.2s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 2.4s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 2.6s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 2.8s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 3s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 3.2s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 3.4s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 3.6s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 3.8s"
      />
      <DotCharacterB
        addClass="block w-20 character-action"
        style="animationDelay: 4.0s"
      />
      <DotCharacterC
        addClass="block w-20 character-action"
        style="animationDelay: 4.2s"
      />
    </div>

    <div class="nes-container is-rounded !h-[90vh]">
      <div class="h-full w-full flex flex-col justify-center items-center">
        <p class="font-numochi nes-balloon from-left nes-pointer w-1/4">
          ご回答いただきありがとうございます！<br>
          参加希望については、後日案内いたします。
        </p>
        <DotCharacterA
          addClass="block w-20 mr-[520px]"
        />
      </div>
    </div>
  </div>

  <div class="layer bg-white absolute w-full h-full top-0 left-0 -z-10" />

</template>

<style lang="scss">
.thanks {
  opacity: 0;
  animation: fadeInUp 1s 1s ease-in-out forwards;
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


.character-action {
  animation: come-down-anim 1s 2s linear 1;
  z-index: 9999;
}

@keyframes come-down-anim {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(1400px);
  }
}

@keyframes yoko {
  to {
    transform: translateX(100%);
  }
}
.vertical-action {
  z-index: 30000;
  animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  animation: yoko 0.8s linear alternate infinite;
}
</style>