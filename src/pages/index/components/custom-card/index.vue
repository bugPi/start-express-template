<script setup lang="ts">
import { TransferData } from "@icon-park/vue-next"

const copyText = ref("复制")

/**
 * 格式化数字 小数点后两位
 * @param v
 * @returns
 */
const formattedNumber = (v) => (v).toFixed(2);


const hanldeCopyOrderNo = () => {
  uni.setClipboardData({
    data: "80000494873",
    success: () => {
      copyText.value = "已复制";
      setTimeout(() => {
        copyText.value = "复制";
      }, 2000);
    },
  });
}

</script>

<template>
  <view class="px-2 py-2.5 w-full flex flex-col">
    <view class="text-xs flex items-center justify-between">
      <view class="flex items-center gap-x-1">
        <view class="flex items-center gap-x-1 text-[#666666]">
          <text>订单号:</text>
          <text>80000494873</text>
        </view>
        <uv-button :text="copyText" :plain="true" size="mini" shape="circle" type="info" @click="hanldeCopyOrderNo" />
      </view>
      <view>
        <text class="text-green-500 font-medium">月结</text>
      </view>
    </view>
    <view class="flex items-center justify-center py-2.5 gap-x-2.5">
      <view class="flex flex-col gap-y-1 px-2 py-1.5">
        <view class="flex items-end gap-x-0.5">
          <text class="text-sm font-medium">上海市</text>
          <text class="text-[#666] text-xs">(浦东新区)</text>
        </view>
        <view class="w-full text-center">
          <text class="text-[#666] text-xs">张梦月</text>
        </view>
      </view>

      <view class="px-3 flex flex-col gap-y-1 items-center">
        <TransferData theme="outline" size="24" fill="#ea6b0e" />
        <text class="text-[#666] text-xs">配送中</text>
      </view>

      <view class="flex flex-col gap-y-1 px-2 py-1.5">
        <view class="flex items-end gap-x-0.5">
          <text class="text-sm font-medium">重庆市</text>
          <text class="text-[#666] text-xs">(沙坪坝)</text>
        </view>
        <view class="w-full text-center">
          <text class="text-[#666] text-xs">张梦月</text>
        </view>
      </view>
    </view>
    <uv-divider />
    <view class="text-xs flex flex-col gap-y-1.5">
      <view class="flex justify-between items-center">
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">运费(元):</text>
          <text>{{ formattedNumber(20) }}</text>
        </view>
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">货款金额(元):</text>
          <text>{{ formattedNumber(8500) }}</text>
        </view>
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">件数(件):</text>
          <text>{{ formattedNumber(25.5) }}</text>
        </view>
      </view>
      <view class="text-[#333] flex items-end gap-x-1.5">
        <text class="text-[#999]">开单时间:</text>
        <text class="text-[#333]">2023-03-03 10:02:02</text>
      </view>
    </view>
  </view>
</template>