<script setup lang="ts">
import { CustomEmpty } from "@/components"

const emit = defineEmits(["onClick"])

/**
 * 点击地址薄
 * @param key 0 寄送 1 收货
 */
const handleClick = (key: number) => {
  emit("onClick", key)
}

</script>

<template>
  <view class="py-2 box-border">
    <view class="flex items-center justify-between">
      <view class="flex items-start gap-x-1.5 w-[80%]">
        <view class="w-6 h-6 bg-blue-500 flex items-center justify-center text-white  rounded-full">
          <text class="text-xs">寄</text>
        </view>
        <view class="flex flex-col gap-y-1">
          <view class="text-base font-medium">寄送人信息</view>
          <view class="text-xs text-[#999999]">请输入真实姓名与地址</view>
        </view>
      </view>
      <view class="w-[20%] text-center">
        <text class="text-xs" @click="handleClick(0)">地址薄</text>
      </view>
    </view>
    <uv-divider />
    <view class="flex items-center justify-between">
      <view class="flex items-start gap-x-1.5">
        <view class="w-6 h-6 bg-red-500 flex items-center justify-center text-white  rounded-full">
          <text class="text-xs">收</text>
        </view>
        <view class="flex flex-col gap-y-1">
          <view class="text-base font-medium">寄送人信息</view>
          <view class="text-xs text-[#999999]">复制完整信息，自动智能识别</view>
        </view>
      </view>
      <view class="w-[20%] text-center">
        <text class="text-xs" @click="handleClick(1)">地址薄</text>
      </view>
    </view>
  </view>
</template>