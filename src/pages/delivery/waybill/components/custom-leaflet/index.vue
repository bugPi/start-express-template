<template>
  <view class="w-full h-full flex flex-col flex-1 gap-y-2">
    <view
      class="flex flex-col items-center gap-y-2.5 max-h-[420px] h-[420px] mx-2 bg-white py-2 box-border mt-2.5 rounded-lg">
      <uv-image src="https://img.picui.cn/free/2025/03/15/67d53bb549a6d.png" mode="widthFix" />
    </view>
    <view class="px-2">
      <uv-list class="!rounded-lg">
        <uv-list-item title="运单号" rightText="80000494873" />
        <uv-list-item title="签收时间" rightText="2023-04-10 14:25:30" />
        <uv-list-item title="签收方式" rightText="本人签收" />
      </uv-list>
    </view>
  </view>
</template>