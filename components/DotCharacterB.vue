<script setup>
const props = defineProps(['addClass'])
const { addClass } = toRefs(props)
</script>

<template>
  <div :class="addClass">
    <div class="dotB bound-fly"></div>
  </div>
</template>

<style lang="scss">
.dotB {
  position: relative;
  padding: 30px;
  width: 6%;

  &.bound-fly {
    animation-delay: 1.5s;
  }

  &:hover {
    &::before {
      animation: .8s boing-anim linear infinite
    }
  }
}

@keyframes boing-anim {
  10% { transform: scale(1.1, 0.9); } /*少し縮む*/
  40% { transform: scale(1.2, 0.80); } /*縮む*/
  50% { transform: scale(0.85, 1.15); } /*反動で縦長*/
  60%{ transform: scale(1.1, 0.9); } /*また反動で縮む*/
  70% { transform: scale(0.95, 1.08); } /*反動が小さく*/
  90%{ transform: scale(0.98, 1.02); } /*最後の震え*/
  100% { transform: scale(1,1); } /*元に戻る*/
}

.dotB::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 4px;
  height: 4px;
  background: transparent;
  box-shadow:4px 4px 0 rgb(254, 254, 254),
8px 4px 0 rgb(254, 254, 254),
12px 4px 0 rgb(254, 254, 254),
16px 4px 0 rgb(159, 158, 154),
20px 4px 0 rgb(255, 255, 255),
24px 4px 0 rgb(159, 158, 154),
28px 4px 0 rgb(254, 254, 254),
32px 4px 0 rgb(254, 254, 254),
36px 4px 0 rgb(254, 254, 254),
40px 4px 0 rgb(254, 254, 254),
44px 4px 0 rgb(254, 254, 254),
48px 4px 0 rgb(159, 158, 154),
52px 4px 0 rgb(159, 158, 154),
56px 4px 0 rgb(159, 158, 154),
60px 4px 0 rgb(254, 254, 254),
64px 4px 0 rgb(254, 254, 254),
4px 8px 0 rgb(254, 254, 254),
8px 8px 0 rgb(254, 254, 254),
12px 8px 0 rgb(254, 254, 254),
16px 8px 0 rgb(159, 158, 154),
20px 8px 0 rgb(255, 255, 255),
24px 8px 0 rgb(2, 2, 2),
28px 8px 0 rgb(2, 2, 2),
32px 8px 0 rgb(2, 2, 2),
36px 8px 0 rgb(2, 2, 2),
40px 8px 0 rgb(2, 2, 2),
44px 8px 0 rgb(2, 2, 2),
48px 8px 0 rgb(2, 2, 2),
52px 8px 0 rgb(255, 255, 255),
56px 8px 0 rgb(159, 158, 154),
60px 8px 0 rgb(254, 254, 254),
64px 8px 0 rgb(254, 254, 254),
4px 12px 0 rgb(254, 254, 254),
8px 12px 0 rgb(254, 254, 254),
12px 12px 0 rgb(159, 158, 154),
16px 12px 0 rgb(255, 255, 255),
20px 12px 0 rgb(2, 2, 2),
24px 12px 0 rgb(249, 234, 11),
28px 12px 0 rgb(249, 234, 11),
32px 12px 0 rgb(7, 86, 0),
36px 12px 0 rgb(249, 234, 11),
40px 12px 0 rgb(249, 234, 11),
44px 12px 0 rgb(249, 234, 11),
48px 12px 0 rgb(2, 2, 2),
52px 12px 0 rgb(2, 2, 2),
56px 12px 0 rgb(159, 158, 154),
60px 12px 0 rgb(254, 254, 254),
64px 12px 0 rgb(254, 254, 254),
4px 16px 0 rgb(254, 254, 254),
8px 16px 0 rgb(254, 254, 254),
12px 16px 0 rgb(159, 158, 154),
16px 16px 0 rgb(2, 2, 2),
20px 16px 0 rgb(249, 234, 11),
24px 16px 0 rgb(249, 234, 11),
28px 16px 0 rgb(7, 86, 0),
32px 16px 0 rgb(7, 86, 0),
36px 16px 0 rgb(7, 86, 0),
40px 16px 0 rgb(249, 234, 11),
44px 16px 0 rgb(249, 234, 11),
48px 16px 0 rgb(249, 234, 11),
52px 16px 0 rgb(2, 2, 2),
56px 16px 0 rgb(254, 254, 254),
60px 16px 0 rgb(254, 254, 254),
64px 16px 0 rgb(254, 254, 254),
4px 20px 0 rgb(254, 254, 254),
8px 20px 0 rgb(0, 0, 0),
12px 20px 0 rgb(2, 2, 2),
16px 20px 0 rgb(2, 2, 2),
20px 20px 0 rgb(2, 2, 2),
24px 20px 0 rgb(2, 2, 2),
28px 20px 0 rgb(2, 2, 2),
32px 20px 0 rgb(7, 86, 0),
36px 20px 0 rgb(2, 2, 2),
40px 20px 0 rgb(2, 2, 2),
44px 20px 0 rgb(2, 2, 2),
48px 20px 0 rgb(2, 2, 2),
52px 20px 0 rgb(2, 2, 2),
56px 20px 0 rgb(254, 254, 254),
60px 20px 0 rgb(254, 254, 254),
64px 20px 0 rgb(254, 254, 254),
4px 24px 0 rgb(254, 254, 254),
8px 24px 0 rgb(254, 254, 254),
12px 24px 0 rgb(2, 2, 2),
16px 24px 0 rgb(2, 2, 2),
20px 24px 0 rgb(160, 160, 160),
24px 24px 0 rgb(224, 233, 108),
28px 24px 0 rgb(2, 2, 2),
32px 24px 0 rgb(224, 233, 108),
36px 24px 0 rgb(254, 254, 254),
40px 24px 0 rgb(224, 233, 108),
44px 24px 0 rgb(2, 2, 2),
48px 24px 0 rgb(224, 233, 108),
52px 24px 0 rgb(2, 2, 2),
56px 24px 0 rgb(254, 254, 254),
60px 24px 0 rgb(254, 254, 254),
64px 24px 0 rgb(254, 254, 254),
4px 28px 0 rgb(254, 254, 254),
8px 28px 0 rgb(254, 254, 254),
12px 28px 0 rgb(2, 2, 2),
16px 28px 0 rgb(2, 2, 2),
20px 28px 0 rgb(160, 160, 160),
24px 28px 0 rgb(224, 233, 108),
28px 28px 0 rgb(2, 2, 2),
32px 28px 0 rgb(224, 233, 108),
36px 28px 0 rgb(254, 254, 254),
40px 28px 0 rgb(224, 233, 108),
44px 28px 0 rgb(2, 2, 2),
48px 28px 0 rgb(224, 233, 108),
52px 28px 0 rgb(2, 2, 2),
56px 28px 0 rgb(254, 254, 254),
60px 28px 0 rgb(254, 254, 254),
64px 28px 0 rgb(254, 254, 254),
4px 32px 0 rgb(254, 254, 254),
8px 32px 0 rgb(254, 254, 254),
12px 32px 0 rgb(2, 2, 2),
16px 32px 0 rgb(160, 160, 160),
20px 32px 0 rgb(160, 160, 160),
24px 32px 0 rgb(160, 160, 160),
28px 32px 0 rgb(160, 160, 160),
32px 32px 0 rgb(254, 254, 254),
36px 32px 0 rgb(250, 160, 149),
40px 32px 0 rgb(254, 254, 254),
44px 32px 0 rgb(160, 160, 160),
48px 32px 0 rgb(160, 160, 160),
52px 32px 0 rgb(2, 2, 2),
56px 32px 0 rgb(254, 254, 254),
60px 32px 0 rgb(2, 2, 2),
64px 32px 0 rgb(2, 2, 2),
4px 36px 0 rgb(254, 254, 254),
8px 36px 0 rgb(254, 254, 254),
12px 36px 0 rgb(254, 254, 254),
16px 36px 0 rgb(2, 2, 2),
20px 36px 0 rgb(160, 160, 160),
24px 36px 0 rgb(160, 160, 160),
28px 36px 0 rgb(160, 160, 160),
32px 36px 0 rgb(254, 254, 254),
36px 36px 0 rgb(250, 160, 149),
40px 36px 0 rgb(254, 254, 254),
44px 36px 0 rgb(160, 160, 160),
48px 36px 0 rgb(2, 2, 2),
52px 36px 0 rgb(2, 2, 2),
56px 36px 0 rgb(2, 2, 2),
60px 36px 0 rgb(254, 254, 254),
64px 36px 0 rgb(2, 2, 2),
4px 40px 0 rgb(2, 2, 2),
8px 40px 0 rgb(2, 2, 2),
12px 40px 0 rgb(2, 2, 2),
16px 40px 0 rgb(254, 254, 254),
20px 40px 0 rgb(2, 2, 2),
24px 40px 0 rgb(2, 2, 2),
28px 40px 0 rgb(2, 2, 2),
32px 40px 0 rgb(2, 2, 2),
36px 40px 0 rgb(2, 2, 2),
40px 40px 0 rgb(2, 2, 2),
44px 40px 0 rgb(2, 2, 2),
48px 40px 0 rgb(160, 160, 160),
52px 40px 0 rgb(2, 2, 2),
56px 40px 0 rgb(160, 160, 160),
60px 40px 0 rgb(254, 254, 254),
64px 40px 0 rgb(254, 254, 254),
4px 44px 0 rgb(254, 254, 254),
8px 44px 0 rgb(2, 2, 2),
12px 44px 0 rgb(254, 254, 254),
16px 44px 0 rgb(254, 254, 254),
20px 44px 0 rgb(160, 160, 160),
24px 44px 0 rgb(160, 160, 160),
28px 44px 0 rgb(160, 160, 160),
32px 44px 0 rgb(160, 160, 160),
36px 44px 0 rgb(160, 160, 160),
40px 44px 0 rgb(160, 160, 160),
44px 44px 0 rgb(160, 160, 160),
48px 44px 0 rgb(160, 160, 160),
52px 44px 0 rgb(160, 160, 160),
56px 44px 0 rgb(160, 160, 160),
60px 44px 0 rgb(2, 2, 2),
64px 44px 0 rgb(2, 2, 2),
4px 48px 0 rgb(254, 254, 254),
8px 48px 0 rgb(2, 2, 2),
12px 48px 0 rgb(254, 254, 254),
16px 48px 0 rgb(254, 254, 254),
20px 48px 0 rgb(160, 160, 160),
24px 48px 0 rgb(2, 2, 2),
28px 48px 0 rgb(160, 160, 160),
32px 48px 0 rgb(160, 160, 160),
36px 48px 0 rgb(160, 160, 160),
40px 48px 0 rgb(160, 160, 160),
44px 48px 0 rgb(254, 254, 254),
48px 48px 0 rgb(160, 160, 160),
52px 48px 0 rgb(2, 2, 2),
56px 48px 0 rgb(2, 2, 2),
60px 48px 0 rgb(2, 2, 2),
64px 48px 0 rgb(254, 254, 254),
4px 52px 0 rgb(254, 254, 254),
8px 52px 0 rgb(254, 254, 254),
12px 52px 0 rgb(2, 2, 2),
16px 52px 0 rgb(2, 2, 2),
20px 52px 0 rgb(2, 2, 2),
24px 52px 0 rgb(254, 254, 254),
28px 52px 0 rgb(2, 2, 2),
32px 52px 0 rgb(160, 160, 160),
36px 52px 0 rgb(254, 254, 254),
40px 52px 0 rgb(254, 254, 254),
44px 52px 0 rgb(254, 254, 254),
48px 52px 0 rgb(160, 160, 160),
52px 52px 0 rgb(2, 2, 2),
56px 52px 0 rgb(254, 254, 254),
60px 52px 0 rgb(254, 254, 254),
64px 52px 0 rgb(254, 254, 254),
4px 56px 0 rgb(254, 254, 254),
8px 56px 0 rgb(254, 254, 254),
12px 56px 0 rgb(254, 254, 254),
16px 56px 0 rgb(254, 254, 254),
20px 56px 0 rgb(254, 254, 254),
24px 56px 0 rgb(254, 254, 254),
28px 56px 0 rgb(2, 2, 2),
32px 56px 0 rgb(160, 160, 160),
36px 56px 0 rgb(254, 254, 254),
40px 56px 0 rgb(254, 254, 254),
44px 56px 0 rgb(254, 254, 254),
48px 56px 0 rgb(160, 160, 160),
52px 56px 0 rgb(2, 2, 2),
56px 56px 0 rgb(254, 254, 254),
60px 56px 0 rgb(254, 254, 254),
64px 56px 0 rgb(254, 254, 254),
4px 60px 0 rgb(254, 254, 254),
8px 60px 0 rgb(254, 254, 254),
12px 60px 0 rgb(254, 254, 254),
16px 60px 0 rgb(254, 254, 254),
20px 60px 0 rgb(254, 254, 254),
24px 60px 0 rgb(2, 2, 2),
28px 60px 0 rgb(2, 2, 2),
32px 60px 0 rgb(160, 160, 160),
36px 60px 0 rgb(254, 254, 254),
40px 60px 0 rgb(254, 254, 254),
44px 60px 0 rgb(254, 254, 254),
48px 60px 0 rgb(160, 160, 160),
52px 60px 0 rgb(2, 2, 2),
56px 60px 0 rgb(254, 254, 254),
60px 60px 0 rgb(254, 254, 254),
64px 60px 0 rgb(254, 254, 254),
4px 64px 0 rgb(254, 254, 254),
8px 64px 0 rgb(254, 254, 254),
12px 64px 0 rgb(254, 254, 254),
16px 64px 0 rgb(2, 2, 2),
20px 64px 0 rgb(2, 2, 2),
24px 64px 0 rgb(160, 160, 160),
28px 64px 0 rgb(160, 160, 160),
32px 64px 0 rgb(160, 160, 160),
36px 64px 0 rgb(254, 254, 254),
40px 64px 0 rgb(254, 254, 254),
44px 64px 0 rgb(254, 254, 254),
48px 64px 0 rgb(160, 160, 160),
52px 64px 0 rgb(2, 2, 2),
56px 64px 0 rgb(254, 254, 254),
60px 64px 0 rgb(254, 254, 254),
64px 64px 0 rgb(254, 254, 254);
}
</style>