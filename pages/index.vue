<script setup lang='ts'>
definePageMeta({
  pageTransition: {
    name: 'expand'
  }
})

const goToQuestion = () => {
  return navigateTo('/second')
}
</script>

<template>
  <div class="home">
    <div class="flex justify-end mb-1 gap-x-4">
      <DotCharacterA />
      <DotCharacterB />
      <DotCharacterC />
    </div>
    <div>
      <section class="nes-container with-title">
        <h2 class="title font-numochi font-semibold">はじめ</h2>

        <p class="typewritter font-numochi font-bold text-2xl leading-[3rem]">
          11月10日 or 17日に<br>開催予定であるデジタルゲーム会のためのアンケートとなります。<br>
          <br>
          日程の決定と参加意向アンケートにつきましては、<br>また後日ご用意いたします。
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
    background: #212529;
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