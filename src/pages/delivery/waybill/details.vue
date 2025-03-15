<script setup lang="ts">
import { CustomNavbar } from "@/components"
import { CustomLeaflet, CustomOrder } from "./components"

const items = ['订单详情', '签收底单',]
const active = ref<0 | 1>(0)

const componentMap = {
  0: CustomOrder,
  1: CustomLeaflet
}
const handleClickItem = (event: { currentIndex: number }) => {
  active.value = event.currentIndex as 0 | 1
}


</script>

<template>
  <view class="w-full h-screen flex flex-col items-center">
    <CustomNavbar title="运单详情" />
    <view class="w-full py-2 bg-white">
      <uni-segmented-control :current="active" :values="items" @clickItem="handleClickItem" styleType="text"
        activeColor="#5372F6" />
    </view>
    <view class="w-full flex-1 h-full bg-[#F5F6FA]">
      <component :is="componentMap[active]" />
    </view>
  </view>
</template>