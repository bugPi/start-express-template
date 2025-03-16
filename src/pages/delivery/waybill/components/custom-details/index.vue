<script setup lang="ts">
import { formattedNumber } from "@/common/utils/index.utils"

const { initValues } = defineProps({
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
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.shippingFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">提货费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.pickupFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">送货费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.deliveryFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">包装费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.packagingFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">保价费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.insuranceFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">其它费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.otherFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">中转费(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.transferFee)) }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">件数(件):</text>
      <text class="text-[#333]">{{ initValues.goodsQuantity }}</text>
    </view>
    <view class="flex flex-col text-left">
      <text class="text-[#999]">付款方式:</text>
      <text class="text-[#333]">{{ initValues.paymentType || "到付" }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">货款金额(元):</text>
      <text class="text-[#333]">{{ formattedNumber(Number(initValues.goodsAmount)) }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">下单时间:</text>
      <text class="text-[#333]">{{ initValues.orderTime }}</text>
    </view>
    <view class="flex flex-col text-left col-span-3">
      <text class="text-[#999]">备注:</text>
      <text class="text-[#333]">{{ initValues.remarks || initValues.orderRemarks }}</text>
    </view>
  </view>
</template>