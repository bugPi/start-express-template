<script setup lang="ts">
import { CustomEmpty } from "@/components"
import { ControlEnum } from "@/common/enum/system.enum"

const emit = defineEmits(["onClick", 'onAddress'])

/**
 * 点击地址薄
 * @param key 0 寄送 1 收货
 */
const handleClick = (key: number) => {
  emit("onClick", key)
}

/**
 * 点击点击寄送人
 * @param key 0 寄送 1 收货
 */
const handleSenderClick = () => {
  emit("onAddress")
}


defineProps({
  type: {
    type: Number,
    values: [ControlEnum.CREATE, ControlEnum.UPDATE],
    default: ControlEnum.CREATE
  },
  initValues: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <view class="py-2 box-border">
    <view class="flex items-center justify-between">
      <view class="flex items-start gap-x-1.5 w-[80%]">
        <view class="w-6 h-6 bg-blue-500 flex items-center justify-center text-white  rounded-full">
          <text class="text-xs">寄</text>
        </view>
        <view class="flex flex-col gap-y-1">
          <template v-if="type === ControlEnum.CREATE">
            <view class="text-base font-medium" @click="handleSenderClick">寄送人信息</view>
            <view class="text-xs text-[#999999]">请输入真实姓名与地址</view>
          </template>
          <template v-else>
            <view class="text-base font-medium">{{ initValues.shippingName }}</view>
            <view class="text-xs text-[#999999]">{{ initValues.shippingAddress }}</view>
          </template>
        </view>
      </view>
      <view class="w-[20%] text-center" v-if="type === ControlEnum.CREATE">
        <text class="text-xs" @click="handleClick(0)">地址薄</text>
      </view>
    </view>
    <view class="w-[92%] ml-auto">
      <uv-divider />
    </view>
    <view class="flex items-center justify-between">
      <view class="flex items-start gap-x-1.5">
        <view class="w-6 h-6 bg-red-500 flex items-center justify-center text-white  rounded-full">
          <text class="text-xs">收</text>
        </view>
        <view class="flex flex-col gap-y-1">
          <template v-if="type === ControlEnum.CREATE">
            <view class="text-base font-medium">收件人信息</view>
            <view class="text-xs text-[#999999]">请输入真实姓名与地址</view>
          </template>
          <template v-else>
            <view class="text-base font-medium">{{ initValues.recipientName }}</view>
            <view class="text-xs text-[#999999]">{{ initValues.recipientAddress }}</view>
          </template>
        </view>
      </view>
      <view class="w-[20%] text-center" v-if="type === ControlEnum.CREATE">
        <text class="text-xs" @click="handleClick(1)">地址薄</text>
      </view>
    </view>
  </view>
</template>