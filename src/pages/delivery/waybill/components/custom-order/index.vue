<script setup lang="ts">
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
  <view class="w-full h-full flex flex-col flex-1">
    <view class="py-5 box-border bg-[#5372F6] flex flex-col gap-y-2.5 items-center">
      <uni-steps :options="opentis" :active="active" active-color="#fff" />
      <view class="flex items-center gap-x-1 w-[80%]">
        <view class="flex items-center gap-x-1 text-white text-xs px-2">
          <text>运单编号:</text>
          <text>{{ 80000494873 }}</text>
        </view>
        <uv-button :text="copyText" :plain="true" size="mini" shape="circle" type="info"
          @click="hanldeCopyOrderNo('80000494873')" />
      </view>
    </view>
  </view>
</template>


<style scoped lang="scss">
:deep(.uni-steps__row-title) {
  color: #fff !important;
  font-size: 12px;
}
</style>