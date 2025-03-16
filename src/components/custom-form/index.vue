<script setup lang="ts">
const emit = defineEmits(["onFinish"])

defineProps({
  initValues: {
    type: Object,
    default: () => { }
  }
})
const handleFinish = () => {
  emit("onFinish")
}

</script>

<template>
  <view class="h-[320px] flex items-center justify-center">
    <text class="font-semibold text-lg">表单</text>
  </view>
</template>