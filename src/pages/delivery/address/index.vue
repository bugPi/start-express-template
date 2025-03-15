<script setup lang="ts">
import { CustomBottom, CustomNavbar } from "@/components"
</script>

<template>
  <view class="w-full h-screen flex flex-col gap-y-2 items-center">
    <CustomNavbar title="地址薄" />
    <view class="w-full h-full flex flex-col justify-center items-center">
      地址薄
    </view>
    <CustomBottom text="新增地址" path="/pages/delivery/address/editor" />
  </view>
</template>
