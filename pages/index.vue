<script setup lang='ts'>
const textArray: string[] = []
const topText = ref(textArray)

topText.value = [
  'ようこそ、本アンケートでみんなさんが好きなゲームに<br>「とうひょう」 してください。<br>ゲームにたのしんでね！<br>テキストテキストテキストテキスト<br>テキストテキストテキストテキスト'
]
</script>

<template>
  <div class="home">
    <section class="nes-container is-dark with-title">
      <h2 class="title font-numochi font-semibold">はじめ</h2>

      <p class="typewritter font-numochi font-bold text-2xl leading-[3rem]">
        ようこそ、本アンケートでみんなさんが好きなゲームに<br>「とうひょう」 してください。<br>ゲームにたのしんでね！<br>テキストテキストテキストテキスト<br>テキストテキストテキストテキスト
      </p>
    </section>

    <div class="w-full text-center mt-10">
      <button
        type="button"
        class="nes-btn is-success w-40 mx-auto font-numochi font-bold
          text-2xl"
      >
        つぎへ
      </button>
    </div>
  </div>
</template>