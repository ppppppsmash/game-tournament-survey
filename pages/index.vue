<script setup lang='ts'>
definePageMeta({
  pageTransition: {
    name: 'expand'
  }
})

const textArray: string[] = []
const topText = ref(textArray)

topText.value = [
  'ようこそ、本アンケートでみんなさんが好きなゲームに<br>「とうひょう」 してください。<br>ゲームにたのしんでね！<br>テキストテキストテキストテキスト<br>テキストテキストテキストテキスト'
]

const goToQuestion = () => {
  return navigateTo('/second')
}
</script>

<template>
  <div class="home">
    <Header />
    <div>
      <section class="nes-container with-title">
        <h2 class="title font-numochi font-semibold">はじめ</h2>

        <p class="typewritter font-numochi font-bold text-2xl leading-[3rem]">
          ようこそ、本アンケートでみんなさんが好きなゲームに<br>「とうひょう」 してください。<br>ゲームにたのしんでね！<br>テキストテキストテキストテキスト<br>テキストテキストテキストテキスト
        </p>
      </section>

      <div class="w-full text-center mt-10">
        <button
          @click="goToQuestion"
          type="button"
          class="nes-btn is-success w-40 mx-auto font-numochi font-bold
            text-2xl expand-btn"
        >
          つぎへ
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  // width: 100vw;
  // height: 100vh;
  position: relative;
}

@keyframes expand {
  0% {
  }
  100% {
    width: 100vw;
    height: 100vh;
  }
}

.expand-btn {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    z-index: -1;
  }
}

.expand-leave-active {
  transition: 0.8s;

  .expand-btn {
    &::before {
      z-index: 9999;
      animation: expand 0.8s 0s ease-in-out forwards;
    }
  }
}

</style>