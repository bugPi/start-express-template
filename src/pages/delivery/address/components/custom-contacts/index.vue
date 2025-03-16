<script setup lang="ts">
import { maskPhoneNumber } from "@/common/utils/index.utils"

const emit = defineEmits(["onEdit", 'onDelete'])

const contentText = {
  contentDefault: '默认',
  contentFav: '默认'
}

const { initValues } = defineProps({
  initValues: {
    type: Object,
    default: () => { }
  }
})

const isDefault = ["true"]
</script>

<template>
  <view class="w-full p-2 bg-white">
    <view class="flex gap-x-1.5 text-xs items-center">
      <uni-fav :checked="true" :content-text="contentText" bgColorChecked="#5372F6" v-if="initValues.isDefault" />
      <text class="font-semibold">{{ initValues.name }}</text>
      <text class="font-semibold">{{ maskPhoneNumber(initValues.phone) }}</text>
    </view>
    <view class="py-2 pb-0 flex flex-col text-[#999] gap-y-1.5">
      <text class="text-[12px]" v-for="(item, index) in initValues.address" :key="index">{{ item.address }}</text>
    </view>
    <uv-divider />
    <view class="flex items-center justify-between text-xs">
      <uv-checkbox-group v-model="isDefault" shape="circle" size="14" labelSize="12">
        <uv-checkbox :customStyle="{ marginBottom: '8px' }" label="默认收货地址" :name="initValues.isDefault.toString()" />
      </uv-checkbox-group>
      <view class="flex items-center gap-x-1.5">
        <uv-text prefixIcon="edit-pen" text="编辑" size="12" @click="emit('onEdit', initValues)" />
        <uv-text prefixIcon="trash" text="删除" size="12" @click="emit('onDelete', initValues)" />
      </view>
    </view>
  </view>
</template>


<style scoped lang="scss">
:deep(.uni-fav) {
  font-size: 12px;
}
</style>