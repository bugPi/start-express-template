<script setup lang="ts">
import { TransferData } from "@icon-park/vue-next"

const copyText = ref("复制")

/**
 * 格式化数字 小数点后两位
 * @param v
 * @returns
 */
const formattedNumber = (v) => (v).toFixed(2);


const hanldeCopyOrderNo = (orderNo) => {
  uni.setClipboardData({
    data: orderNo,
    success: () => {
      copyText.value = "已复制";
      setTimeout(() => {
        copyText.value = "复制";
      }, 2000);
    },
  });
}


defineProps({
  item: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

</script>

<template>
  <view class="px-2 py-2.5 w-full flex flex-col">
    <view class="text-xs flex items-center justify-between">
      <view class="flex items-center gap-x-1">
        <view class="flex items-center gap-x-1 text-[#666666]">
          <text>订单号:</text>
          <text>{{ item.orderNo }}</text>
        </view>
        <uv-button :text="copyText" :plain="true" size="mini" shape="circle" type="info"
          @click="hanldeCopyOrderNo(item.orderNo)" />
      </view>
      <view>
        <text class="text-green-500 font-medium">{{ item.paymentType || '预付' }}</text>
      </view>
    </view>
    <view class="flex items-center justify-center py-3 pb-0 gap-x-2.5">
      <view class="flex flex-col gap-y-1 px-2 py-1.5 w-[40%] items-center">
        <view class="flex items-end gap-x-0.5">
          <text class="text-sm font-medium">{{ item.shippingProvince }}</text>
          <text class="text-[#666] text-xs">({{ item.shippingDistrict }})</text>
        </view>
        <view class="w-full text-center">
          <text class="text-[#666] text-xs">{{ item.shippingName }}</text>
        </view>
      </view>

      <view class="px-3 flex flex-col gap-y-1 items-center w-[20%]">
        <TransferData theme="outline" size="24" fill="#ea6b0e" />
        <text class="text-[#666] text-xs">{{ item.orderStatus }}</text>
      </view>

      <view class="flex flex-col gap-y-1 px-2 py-1.5 w-[40%] items-center">
        <view class="flex items-end gap-x-0.5">
          <text class="text-sm font-medium">{{ item.recipientProvince }}</text>
          <text class="text-[#666] text-xs">({{ item.recipientDistrict }})</text>
        </view>
        <view class="w-full text-center">
          <text class="text-[#666] text-xs">{{ item.recipientName }}</text>
        </view>
      </view>
    </view>
    <uv-divider />
    <view class="text-xs flex flex-col gap-y-1.5">
      <view class="flex justify-between items-center">
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">运费(元):</text>
          <text>{{ formattedNumber(Number(item.shippingFee)) }}</text>
        </view>
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">货款金额(元):</text>
          <text>{{ formattedNumber(Number(item.goodsAmount)) }}</text>
        </view>
        <view class="text-[#333] flex items-end gap-x-1.5">
          <text class="text-[#999]">件数(件):</text>
          <text>{{ item.goodsQuantity }}</text>
        </view>
      </view>
      <view class="text-[#333] flex items-end gap-x-1.5">
        <text class="text-[#999]">开单时间:</text>
        <text class="text-[#333]">{{ item.orderTime }}</text>
      </view>
    </view>
  </view>
</template>