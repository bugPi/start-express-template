<script setup lang="ts">
import { CustomAgreement, CustomNavbar } from "@/components"

const handleClick = (path: string) => {
  uni.navigateTo({
    url: path
  })
}


const customStyle = computed(() => {
  return {
    background: '#4E341B',
    fontSize: '16px',
    padding: '14px 12px',
    color: "#F3E7B8"
  }
})
</script>


<template>
  <view class="w-full h-screen flex flex-col items-center">
    <CustomNavbar title="客户下单" back />
    <view class="flex-1 w-full flex flex-col px-2">
      <!-- <view class="flex flex-1 flex-col gap-y-2 justify-center items-center">
        <text @click="handleClick('/pages/delivery/address/index')">地址薄</text>
        <text @click="handleClick('/pages/delivery/waybill/index')">收寄信息填写页/运单信息</text>
      </view> -->

      <view class="bg-[#DDDDDD] p-2 py-2.5 box-border rounded mt-1.5 flex items-center justify-between">
        <view class="text-xs w-[80%]">
          <text>会员卡：</text>
          <text>8888888888888</text>
        </view>
        <uv-button text="绑定会员号" size="mini" shape="circle" :custom-style="customStyle" />
      </view>







    </view>
    <view class="mt-auto w-full flex-shrink-0">
      <CustomAgreement />
      <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2">
        <view class="flex items-center justify-between w-full">
          <view class="w-[70%]">
            <view class="flex items-end text-[14px]">
              <text>预估:</text>
              <view class="text-orange-500 flex items-end font-medium">
                <text class="text-[14px]">￥</text>
                <text class="text-[18px]">100</text>
              </view>
            </view>
            <text class="text-[12px] text-gray-400">最终费用以网点揽收员核实为准</text>
          </view>
          <view class="ml-auto">
            <button style="background-color: #EA6B0E;" class="rounded-full">
              <text class="text-white rounded-full w-[50%] text-sm">确认下单</text>
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>