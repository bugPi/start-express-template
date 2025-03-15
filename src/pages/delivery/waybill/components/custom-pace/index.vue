<script setup lang="ts">

interface StepProps {
  title: string
  desc: string
}

const { steps } = defineProps<{
  steps: StepProps[]
}>()
</script>


<template>
  <view class="flex flex-col gap-y-2 px-2 py-2.5 bg-white">
    <view class="flex items-center gap-x-1 text-sm">
      <view class="w-[4px] bg-[#517CFF] h-[16px] rounded" />
      <text class="font-medium">物流详情</text>
    </view>
    <view class="w-full">
      <uv-steps current="0" dot direction="column" active-color="#517CFF">
        <uv-steps-item v-for="(step, index) in steps" :key="index" :title="step.title" :desc="step.desc" />
      </uv-steps>
    </view>
  </view>
</template>


<style scoped lang="scss">
:deep(.uv-steps--column) {
  row-gap: 6px;

  .uv-steps-item__content--column {
    row-gap: 4px;
  }

  .uv-text__value--main {
    color: #333;
    font-weight: 600 !important;
  }

  .uv-text__value--tips {
    font-size: 12px;
    color: #999;
  }
}
</style>