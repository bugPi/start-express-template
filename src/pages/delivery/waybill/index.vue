<script setup lang="ts">
import { CustomNavbar } from "@/components"
import { maskPhoneNumber } from "@/common/utils/index.utils"
import { historicalAddress } from "@/mock/index"

const title = ref('寄件人信息填写')
const type = ref(true)

onLoad((options?: { key?: string }) => {
  if (Number(options?.key) === 1) {
    title.value = '收件人信息填写'
    type.value = false
  } else {
    title.value = '寄件人信息填写'
    type.value = true
  }
  uni.setNavigationBarTitle({
    title: title.value
  })
})

const handleClickItem = (item: Record<string, string | number>) => {
  console.log(item);
}
</script>


<template>
  <view class="w-full h-screen flex flex-col">
    <CustomNavbar :title="title" />
    <div class="flex-1 flex flex-col gap-y-2">
      <view class="flex flex-col px-2 bg-white py-2">
        <view class="bg-white py-1 flex items-center gap-x-1.5">
          <view class="w-6 h-6 flex items-center justify-center text-white rounded-full"
            :class="type ? 'bg-blue-500' : 'bg-red-500'">
            <text class="text-xs">{{ type ? '寄' : '收' }}</text>
          </view>
          <text class="text-sm font-medium">{{ type ? '寄' : '收' }}件人</text>
        </view>

        <view class="w-full flex flex-col gap-y-2 my-1.5">
          <view class="bg-[#F2F2F2] p-2 py-2.5 box-border rounded flex items-center justify-between">
            <view class="text-xs w-[80%]">
              <text class="text-[#999]">会员号：</text>
              <text>8888888888888</text>
            </view>
          </view>
        </view>

        <view class="h-[320px] flex items-center justify-center">
          表单
        </view>
      </view>

      <view class="px-2 bg-white py-1 flex flex-col">
        <view class="flex items-center gap-x-1 text-sm">
          <view class="w-[4px] bg-[#517CFF] h-[16px] rounded" />
          <text class="font-medium">历史地址</text>
        </view>
        <uv-list>
          <uv-list-item :title="`${item.name} ${maskPhoneNumber(item.phone)}`" :note="item.address"
            v-for="(item, index) in historicalAddress" :key="index" @click="handleClickItem(item)"
            :border="index !== 0" />
        </uv-list>
      </view>
    </div>

    <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2 shadow-[0_-2px_12px_0_rgba(0,0,0,0.1)]">
      <button class="text-white rounded-full w-[50%]" style="background-color: #EA6B0E;">
        <text class="text-sm text-white">确认</text>
      </button>
    </view>
  </view>
</template>