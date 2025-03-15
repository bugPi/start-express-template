<template>
  <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2 shadow-[0_-2px_12px_0_rgba(0,0,0,0.1)]">
    <slot v-if="$slots.default"></slot>
    <button v-else class="text-white rounded-full w-[50%]" style="background-color: #EA6B0E;" @click="handleClickPath">
      <text class="text-sm text-white">{{ text }}</text>
    </button>
  </view>
</template>


<script setup lang="ts">
const { path } = defineProps({
  text: {
    type: String,
    default: '我要下单'
  },
  path: {
    type: String,
    default: '/pages/delivery/shipping/index'
  }
})


const handleClickPath = () => {
  uni.navigateTo({
    url: path
  })
}
</script>