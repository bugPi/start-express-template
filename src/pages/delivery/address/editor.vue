<script setup lang="ts">
import { CustomNavbar, CustomForm } from "@/components"
const handleOnFinish = (values: Record<string, string>) => {
  console.log(values);
}
</script>

<template>
  <view class="w-full h-screen flex flex-col">
    <CustomNavbar title="联系人信息" />
    <view class="flex flex-col py-2 bg-white">
      <view class="mx-2">
        <view class="flex items-center gap-x-1 text-sm">
          <view class="w-[4px] bg-[#517CFF] h-[16px] rounded" />
          <text class="font-medium">联系人信息</text>
        </view>
        <view class="w-full flex flex-col gap-y-2 my-1.5">
          <view class="bg-[#F2F2F2] p-2 py-2.5 box-border rounded flex items-center justify-between">
            <view class="text-xs w-[80%]">
              <text class="text-[#999]">会员号：</text>
              <text>8888888888888</text>
            </view>
          </view>
        </view>
        <CustomForm @onFinish="handleOnFinish" />
      </view>
    </view>
    <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2 shadow-[0_-2px_12px_0_rgba(0,0,0,0.1)]">
      <button class="text-white rounded-full w-[50%]" style="background-color: #EA6B0E;">
        <text class="text-sm text-white">确认</text>
      </button>
    </view>
  </view>
</template>