<script setup lang="ts">
import { formattedNumber } from "@/common/utils/index.utils"

defineProps({
  initValues: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <view class="text-xs grid grid-cols-3 gap-x-4 gap-y-2">
    <view class="flex flex-col text-left">
      <text class="text-[#999]">运费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('14')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">提货费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('0')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">送货费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('0')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">包装费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('0')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">保价费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('1')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">其它费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('0')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">中转费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('0')) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">件数(件):</text>
      <text class="text-[#333]">{{ 25 }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">付款方式:</text>
      <text class="text-[#333]">{{ "到付" }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">货款金额(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number('6500')) }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">下单时间:</text>
      <text class="text-[#333]">{{ '2025-03-04 12:30:30' }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">备注:</text>
      <text class="text-[#333]">{{ '' }}</text>
    </view>
  </view>
</template>