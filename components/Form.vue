<script setup lang="ts">

</script>

<template>
  <div>
    <div class="nes-field mt-10 mb-14">
      <label
        for="name_field"
        class="text-white font-numochi text-xl font-semibold mb-6"
      >
        お名前を教えてね
      </label>
      <input type="text" id="name_field" class="nes-input is-dark">
    </div>

    <div style="background-color:#212529; padding: 1rem 0;" class="mb-14">
      <div class="mb-4">
        <label
          for="check_field"
          class="text-white font-numochi text-xl font-semibold"
        >
          開催日程の希望を選んでね！
        </label>
      </div>

      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
        <span class="font-numochi font-semibold">11/10(金)希望</span>
      </label>

      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
        <span class="font-numochi font-semibold">11/17(金)希望</span>
      </label>

      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
        <span class="font-numochi font-semibold">どちらでもよい</span>
      </label>
    </div>

    <div style="background-color:#212529; padding: 1rem 0;">
      <div class="mb-4">
        <label
          for="check_field"
          class="text-white font-numochi text-xl font-semibold"
        >
          気になるゲームを選んでね！（開催候補として考えさせていただきます。）
        </label>
      </div>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">マリオカート８ デラックス(Nintendo Switch)</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">大乱闘スマッシュブラザーズ SPECIAL(Nintendo Switch)</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">ぷよぷよ/テトリス</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">マリオパーティ</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">Vampire Survivors</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">ボンバーマン</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">ガンダムバーサス</span>
      </label>
    </div>

    <div class="nes-field mt-10 mb-14">
      <label
        for="name_field"
        class="text-white font-numochi text-xl font-semibold mb-6"
      >
        選んだゲームで持っているものがあれば教えてね！
      </label>
      <input type="text" id="name_field" class="nes-input is-dark">
    </div>

    <div style="background-color:#212529; padding: 1rem 0;">
      <div class="mb-4">
        <label
          for="check_field"
          class="text-white font-numochi text-xl font-semibold"
        >
          持ってきても良いゲーム機を教えてね！（当日持ってきていただく可能性があります。）
        </label>
      </div>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">Nintendo Switch</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">PS5</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">PS4</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">Wii</span>
      </label>

      <label class="block">
        <input type="checkbox" class="nes-checkbox is-dark" />
        <span class="font-numochi font-semibold">その他:</span>
        <input type="text" id="name_field" class="nes-input is-dark">
      </label>
    </div>

    <div class="nes-field mt-10 mb-14">
      <label
        for="name_field"
        class="text-white font-numochi text-xl font-semibold mb-6"
      >
        他に遊んでみたいゲームがあれば教えてね！<br>
        ソフト所持の有無も教えてね。
      </label>
      <input type="text" id="name_field" class="nes-input is-dark">
    </div>
  </div>
</template>