<script setup lang="ts">
import { CustomNavbar } from "@/components"
</script>


<template>
  <view class="w-full h-screen flex flex-col gap-y-2 items-center justify-center">
    <CustomNavbar title="联系人信息" />
    <view class="w-full h-full flex flex-col justify-center items-center">
      联系人信息
    </view>
    <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2 shadow-[0_-2px_12px_0_rgba(0,0,0,0.1)]">
      <button class="text-white rounded-full w-[50%]" style="background-color: #EA6B0E;">
        <text class="text-sm text-white">确认</text>
      </button>
    </view>
  </view>
</template>