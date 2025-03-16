<script setup lang="ts">
import { CustomPace, CustomDetails } from "@/pages/delivery/waybill/components"
import { CustomAddress } from "@/components"
import { ControlEnum } from "@/common/enum/system.enum"

const { initValues } = defineProps({
  initValues: {
    type: Object,
    default: () => { }
  }
})

const copyText = ref("复制")
const active = ref(0);


const opentis = [
  {
    title: "待揽收",
  },
  {
    title: "配送中",
  },
  {
    title: "已签收",
  },
];


const steps = [
  { title: "已签收", desc: "2025-03-08 14:49" },
  { title: "目的地到达", desc: "2025-03-08 08:49" },
  { title: "出发发运", desc: "2025-03-07 14:49" },
  { title: "出发装车", desc: "2025-03-07 09:49" },
  { title: "揽收取件", desc: "2025-03-06 13:49" },
  { title: "待揽收", desc: "2025-03-06 10:49" }
]

const hanldeCopyOrderNo = (orderNo: string) => {
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
</script>

<template>
  <view class="w-full h-full flex flex-col flex-1 gap-y-2">
    <view class="py-5 box-border bg-[#5372F6] flex flex-col gap-y-2.5 items-center">
      <uni-steps :options="opentis" :active="active" active-color="#fff" />
      <view class="flex items-center gap-x-1 w-[80%]">
        <view class="flex items-center gap-x-1 text-white text-xs px-2">
          <text>运单编号:</text>
          <text>{{ initValues.orderNo }}</text>
        </view>
        <uv-button :text="copyText" :plain="true" size="mini" shape="circle" type="info"
          @click="hanldeCopyOrderNo(initValues.orderNo)" />
      </view>
    </view>
    <view class="p-2 box-border py-2.5 bg-white">
      <CustomAddress :type="ControlEnum.UPDATE" :initValues="initValues" />
      <uv-divider />
      <CustomDetails :initValues="initValues" />
    </view>
    <CustomPace :steps="steps" />
  </view>
</template>


<style scoped lang="scss">
:deep(.uni-steps__row-title) {
  color: #fff !important;
  font-size: 12px;
}
</style>