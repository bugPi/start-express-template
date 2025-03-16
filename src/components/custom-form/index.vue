<script setup lang="ts">
const emit = defineEmits(["onFinish"])
const isDefault = ["true"]
const formRef = ref()
const formValues = reactive({
  name: "",
  phone: "",
  address: "",
  company: "",
  isDefault: false
})


defineProps({
  initValues: {
    type: Object,
    default: () => { }
  }
})
const handleFinish = () => {
  if (formRef.value.validate()) {
    emit("onFinish", formValues)
  }
}

const handlerClear = () => {
  formRef.value.resetFields()
}

/**
 * 暴露给外部调用的方法
 */
defineExpose({
  handleFinish
})

</script>

<template>
  <view class="py-2 flex flex-col px-1">
    <uv-form :model="formValues" ref="formRef">
      <view class="flex items-center gap-x-1.5 w-full" style="border-bottom:1px solid #eee;">
        <uv-form-item prop="name" class="w-[30%]">
          <uv-input v-model="formValues.name" placeholder="寄件人" border="none" />
        </uv-form-item>
        <uv-line direction="col" style="height: 24px;" />
        <uv-form-item prop="phone">
          <uv-input v-model="formValues.phone" placeholder="电话" type="number" border="none" />
        </uv-form-item>
      </view>
      <uv-form-item prop="address" style="border-bottom:1px solid #eee;">
        <uv-input v-model="formValues.address" placeholder="选择出发地(必填)" border="none" />
      </uv-form-item>
      <uv-form-item prop="company" style="border-bottom:1px solid #eee;">
        <uv-input v-model="formValues.company" placeholder="公司名称(非必填)" border="none" />
      </uv-form-item>
    </uv-form>
    <view class="my-2.5 flex items-end justify-between">
      <uv-checkbox-group v-model="isDefault" shape="circle" size="14" labelSize="12">
        <uv-checkbox :customStyle="{ marginBottom: '8px' }" label="保存到地址薄" :name="formValues.isDefault.toString()" />
      </uv-checkbox-group>
      <uv-text text="清空当前信息" @click="handlerClear" size="12" align="right" />
    </view>
  </view>
</template>


<style scoped lang="scss">
:deep(.uv-checkbox) {
  margin-bottom: 0 !important;
}

:deep(.input-placeholder) {
  font-size: 12px;
}
</style>