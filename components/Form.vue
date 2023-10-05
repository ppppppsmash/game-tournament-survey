<script setup>
const isChange = ref(false)
const isEnabled = ref(true)
const isChecked = ref(false) 

const form = ref({
  name: '',
  date: '',
  game_like: [],
  game_have: '',
  game_support: [],
  game_support_other: '',
  game_hope_have: ''
})

const submitHandler = async () => {
  isChange.value = true

  const formData = new FormData()

  formData.append('entry.1905285273', form.value.name) //entry.1180101259
  formData.append('entry.1233035774', form.value.date) //entry.1484807676
  form.value.game_like.forEach((val) => {
    formData.append('entry.767589273', val) //entry.204047520
  })
  formData.append('entry.686286271', form.value.game_have) //entry.1395366799
  form.value.game_support.forEach((val) => {
    formData.append('entry.1613505963', val) //entry.1944240471
  })
  formData.append('entry.95722905', form.value.game_support_other) //entry.1149156305
  formData.append('entry.342755913', form.value.game_hope_have) //entry.50802869


  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNspdHb5MxhuJSv2DPuudEXfNbicrpKL6pdv8gP_IMOKId1A/formResponse'

  const { data, pending, error, refresh } = await useAsyncData(
    'formData',
    () => $fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      body: formData
    })
  )

  return navigateTo('/thanks')
}

watchEffect(() => {
  isEnabled.value = form.value.name === '' ? true : false
  
  if (!isChecked.value) {
    form.value.game_support_other = ''
  }
})
</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <div>
      <div class="nes-field mt-10 mb-14">
        <label
          for="name_field"
          class="text-white font-numochi text-xl font-semibold mb-6"
        >
          ・お名前を教えてね
          <span class="text-red-500">(必須)</span>
        </label>

        <input
          type="text"
          id="name_field"
          class="nes-input is-dark font-numochi"
          :class="[isEnabled ? 'is-error' : '']"
          name="entry.1905285273"
          v-model="form.name"
        />
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

        <label class="ml-6">
          <input type="radio" class="nes-radio is-dark" name="entry.1233035774" value="11/17(金)希望" v-model="form.date" />
          <span class="font-numochi font-semibold">11/17(金)希望</span>
        </label>

        <label class="ml-6">
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

        <label class="block relative">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="マリオカート８ デラックス(Nintendo Switch)"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">マリオカート８ デラックス(Nintendo Switch)
            <div class="hidden group-hover:block">
              <HoverCard image="/images/mariocart8.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="大乱闘スマッシュブラザーズ SPECIAL(Nintendo Switch)"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">大乱闘スマッシュブラザーズ SPECIAL(Nintendo Switch)
            <div class="hidden group-hover:block">
              <HoverCard image="/images/smbro.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="ぷよぷよ/テトリス"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">ぷよぷよ/テトリス
            <div class="hidden group-hover:block">
              <HoverCard image="/images/puyoteto.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="マリオパーティ"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">マリオパーティ
            <div class="hidden group-hover:block">
              <HoverCard image="/images/marioparty.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="GIGA BASH"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">GIGA BASH
            <div class="hidden group-hover:block">
              <HoverCard image="/images/gigabash.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="ボンバーマン"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">ボンバーマン
            <div class="hidden group-hover:block">
              <HoverCard image="/images/bomberman.png" />
            </div>
          </span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.767589273"
            value="ガンダムバーサス"
            v-model="form.game_like"
          />
          <span class="group font-numochi font-semibold">ガンダムバーサス
            <div class="hidden group-hover:block">
              <HoverCard image="/images/gundam.png" />
            </div>
          </span>
        </label>
      </div>

      <div class="nes-field mt-10 mb-14">
        <label
          for="name_field"
          class="text-white font-numochi text-xl font-semibold mb-6"
        >
          ・選んだゲームで持っているものがあれば教えてね！
        </label>
        <input
          type="text"
          id="name_field"
          class="nes-input is-dark font-numochi"
          name="entry.686286271"
          v-model="form.game_have"
        />
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
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.1613505963"
            v-model="form.game_support"
            value="Nintendo Switch"
          />
          <span class="font-numochi font-semibold">Nintendo Switch</span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.1613505963"
            v-model="form.game_support"
            value="PS5"
          />
          <span class="font-numochi font-semibold">PS5</span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.1613505963"
            v-model="form.game_support"
            value="PS4"
          />
          <span class="font-numochi font-semibold">PS4</span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            name="entry.1613505963"
            v-model="form.game_support"
            value="Wii"
          />
          <span class="font-numochi font-semibold">Wii</span>
        </label>

        <label class="block">
          <input
            type="checkbox"
            class="nes-checkbox is-dark"
            v-model="isChecked"
          />
          <span class="font-numochi font-semibold">その他:</span>
          <input
            type="text"
            id="game_support_other_field"
            class="nes-input is-dark font-numochi transition duration-750"
            :style="[isChecked ? '' : 'border: 4px gray dashed']"
            name="entry.95722905"
            v-model="form.game_support_other"
            :disabled="!isChecked"
          />
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
        <input
          type="text"
          id="name_field"
          class="nes-input is-dark font-numochi"
          name="entry.342755913"
          v-model="form.game_hope_have"
        />
      </div>

      <div class="w-full text-center mt-10">
        <button
          type="submit"
          class="nes-btn w-40 mx-auto font-numochi font-bold
            text-2xl reduction-btn"
          :class="[isChange ? 'reduction-effect' : ''], [isEnabled ? 'is-disabled' : 'is-primary']"
          :disabled="isEnabled"
        >
          送信
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@keyframes reduction {
  0% {
  }
  100% {
    top: 0;
    left: 0;
    width: 300vw;
    height: 300vh;
  }
}

.reduction-effect {
  &:hover {
    &::before {
      z-index: 1;
      animation: reduction 0.8s 0s ease-in-out forwards;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: -1;
  }
}

</style>