<script lang="tsx" setup>
import { CustomAgreement } from "@/components"

const loading = ref(false); // 登录加载状态

const handleSysSingin = async () => {
  loading.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    uni.redirectTo({
      url: "/pages/index/index",
    });
  } catch (error) {
    console.error("登录失败", error);
    uni.showToast({
      title: "登录失败，请重试",
      icon: "none",
    });
  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <view class="h-screen flex flex-col items-center justify-evenly bg-white">
    <view class="py-2 box-border">
      <image src="@/static/cover.png" mode="widthFix" class="w-56" />
    </view>
    <view class="w-[88%] flex flex-col gap-y-1.5 py-2 box-border pt-3">
      <button @click="handleSysSingin" :loading="loading" class="text-white rounded-full w-full" type="primary"
        style="background-color: #07c160;">
        <text class="text-sm">微信一键登录</text>
      </button>
      <CustomAgreement />
    </view>
  </view>
</template>
