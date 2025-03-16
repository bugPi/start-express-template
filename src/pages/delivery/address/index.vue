<script setup lang="ts">
import { CustomBottom, CustomNavbar, CustomEmpty } from "@/components"
import { CustomContacts } from "./components"
import { addressBook } from "@/mock/index"

const searchValue = ref('')
const handleSearch = (v: string) => {
  console.log(v, "search");
}

const handleOnDelete = (row: Object) => {
  console.log(row, "delete");
}

const handleOnEdit = (row: Object) => {
  console.log(row, "edit");
  uni.navigateTo({
    url: '/pages/delivery/address/editor'
  })
}

</script>

<template>
  <view class="w-full h-screen flex flex-col overflow-hidden">
    <CustomNavbar title="地址薄" />
    <view class="w-full bg-white py-1 box-border pb-2">
      <uni-search-bar :focus="true" v-model="searchValue" radius="100" @confirm="handleSearch" placeholder="输入姓名/电话/地址"
        clearButton="auto" cancelButton="none" />
    </view>
    <view class="flex flex-col flex-1 overflow-auto">
      <view class="h-full w-full flex flex-col gap-y-1 mt-1.5">
        <CustomContacts v-for="(item, index) in addressBook" :key="index" :initValues="item" @on-delete="handleOnDelete"
          @on-edit="handleOnEdit" />
      </view>
    </view>
    <CustomBottom text="新增地址" path="/pages/delivery/address/editor" />
  </view>
</template>
