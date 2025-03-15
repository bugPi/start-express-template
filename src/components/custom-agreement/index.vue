<script setup lang="ts">

const activated = ref(false)

const handleChange = () => {
  activated.value = !activated.value
}


</script>


<template>
  <view class="flex items-center w-full  mb-2">
    <radio style="transform:scale(0.6);" color="#EA6B0E" :checked="activated" @change="handleChange" />
    <view class="text-[12px] text-gray-400">
      <text>我已阅读并同意</text>
      <a class="text-blue-400">《托运凭证协议》</a>
      <text>和</text>
      <a class="text-blue-400">《隐私政策》</a>
      <text>条款</text>
    </view>
  </view>
</template>