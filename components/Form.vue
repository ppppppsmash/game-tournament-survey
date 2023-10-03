<script setup lang="ts">
//https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNspdHb5MxhuJSv2DPuudEXfNbicrpKL6pdv8gP_IMOKId1A/formResponse
let form = ref({
  name: '',
  date: '',
})

const submitHandler = async () => {
  const formData = new FormData()
  formData.append('entry.1905285273', form.value.name)
  formData.append('entry.1233035774', form.value.date)

  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNspdHb5MxhuJSv2DPuudEXfNbicrpKL6pdv8gP_IMOKId1A/formResponse'

  await $fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    body: formData
  })
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <div>
      <div class="nes-field mt-10 mb-14">
        <label
          for="name_field"
          class="text-white font-numochi text-xl font-semibold mb-6"
        >
          ・お名前を教えてね
        </label>

        <input type="text" id="name_field" class="nes-input is-dark" name="entry.1905285273" v-model="form.name">
      </div>

      <div style="background-color:#212529; padding: 1rem 0;" class="mb-14">
        <div class="mb-4">
          <label
            for="check_field"
            class="text-white font-numochi text-xl font-semibold"
          >
            ・開催日程の希望を選んでね！
          </label>
        </div>

        <label>
          <input type="radio" class="nes-radio is-dark" name="entry.1233035774" value="11/10(金)希望" v-model="form.date" />
          <span class="font-numochi font-semibold">11/10(金)希望</span>
        </label>

        <label>
          <input type="radio" class="nes-radio is-dark" name="entry.1233035774" value="11/17(金)希望" v-model="form.date" />
          <span class="font-numochi font-semibold">11/17(金)希望</span>
        </label>

        <label>
          <input type="radio" class="nes-radio is-dark" name="entry.1233035774" value="どちらでもよい" v-model="form.date" />
          <span class="font-numochi font-semibold">どちらでもよい</span>
        </label>
      </div>

      <div style="background-color:#212529; padding: 1rem 0;">
        <div class="mb-4">
          <label
            for="check_field"
            class="text-white font-numochi text-xl font-semibold"
          >
            ・気になるゲームを選んでね！（開催候補として考えさせていただきます。）
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
          ・選んだゲームで持っているものがあれば教えてね！
        </label>
        <input type="text" id="name_field" class="nes-input is-dark">
      </div>

      <div style="background-color:#212529; padding: 1rem 0;">
        <div class="mb-4">
          <label
            for="check_field"
            class="text-white font-numochi text-xl font-semibold"
          >
            ・持ってきても良いゲーム機を教えてね！（当日持ってきていただく可能性があります。）
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
          ・他に遊んでみたいゲームがあれば教えてね！<br>
          ソフト所持の有無も教えてね。
        </label>
        <input type="text" id="name_field" class="nes-input is-dark">
      </div>

      <div class="w-full text-center mt-10">
        <button
          type="submit"
          class="nes-btn is-primary w-40 mx-auto font-numochi font-bold
            text-2xl expand-btn"
        >
          送信
        </button>
      </div>
    </div>
  </form>
</template>