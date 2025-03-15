<script setup lang="ts">
import { CustomAgreement, CustomNavbar, CustomAddress } from "@/components"

const modalRef = ref()
const memberFormRef = ref()
/**
 * 下单
 */
const forms = ref({
  orderRemarks: '', // 订单备注信息
  paymentType: '', // 付款类型（如：月结、预付、到付等）
  goodsAmount: null, // 货款金额（单位：元）
  goodsQuantity: 0, // 货物数量（单位：件）
})

/**
 * 绑定会员号
 */
const memberForms = ref({
  member_number: '',
  member_password: ''
})

/**
 * 绑定会员号校验规则
 */
const memberRules = {
  'member_number': {
    type: 'string',
    required: true,
    message: '必填项',
    trigger: ['blur', 'change']
  },
  'member_password': {
    type: 'string',
    required: true,
    message: '必填项',
    trigger: ['blur', 'change']
  },
}

const customStyle = computed(() => {
  return {
    background: '#4E341B',
    fontSize: '16px',
    padding: '14px 12px',
    color: "#F3E7B8"
  }
})

const buttonOptions = [
  { text: "带纸箱" },
  { text: "带防撞泡沫" },
  { text: "带防水带" },
  { text: "上门请提前联系" },
  { text: "要爬楼" },
  { text: "带文件封" }
]

const actions = [
  "到付", "寄付", "月结"
]
const actionsIndex = ref(0)

const handleOnSelect = (event: { detail: { value: number } }) => {
  actionsIndex.value = event.detail.value
  forms.value.paymentType = actions[actionsIndex.value]
  console.log(forms.value.paymentType, "paymentType");
}

/**
 * 绑定会员号
 */
const handleMember = () => {
  modalRef.value.open()
}

const handleConfirm = () => {
  console.log(memberFormRef.value, "respone");
  memberFormRef.value.validate().then(() => {
    uni.showToast({
      icon: 'success',
      title: '校验通过'
    })
  }).catch((errors: any) => {
    console.log(errors);
    uni.showToast({
      icon: 'error',
      title: '校验失败'
    })
  })
}
</script>


<template>
  <view class="w-full h-screen flex flex-col items-center overflow-auto">
    <view class="w-full flex flex-col">
      <CustomNavbar title="客户下单" back />
      <view class="w-full flex flex-col px-2 gap-y-2 my-1.5">
        <view class="bg-[#DDDDDD] p-2 py-2.5 box-border rounded flex items-center justify-between">
          <view class="text-xs w-[80%]">
            <text>会员卡：</text>
            <text>8888888888888</text>
          </view>
          <uv-button text="绑定会员号" size="mini" shape="circle" :custom-style="customStyle" @click="handleMember" />
        </view>
      </view>
    </view>

    <view class="w-full flex flex-1  flex-col px-2 gap-y-2 overflow-y-auto">
      <view class="h-full flex flex-col gap-y-2 overflow-auto">
        <view class="p-2 box-border bg-white rounded">
          <CustomAddress />
        </view>
        <view class="p-2 box-border bg-white rounded">
          <view class="py-1">
            <uv-list>
              <uv-list-item title="预估件数">
                <template #footer>
                  <uv-number-box integer :min="1" :max="100" v-model="forms.goodsQuantity" />
                </template>
              </uv-list-item>
              <uv-list-item title="货款金额" :border="true">
                <template #footer>
                  <uv-input placeholder="请输入货款金额" v-model="forms.goodsAmount" border="bottom" />
                </template>
              </uv-list-item>
              <uv-list-item title="付款方式" :border="true">
                <template #footer>
                  <picker @change="handleOnSelect" :value="actionsIndex" :range="actions">
                    <view class="flex items-center gap-x-1 text-xs">
                      <text>{{ actions[actionsIndex] }}</text>
                      <uv-icon name="arrow-right" />
                    </view>
                  </picker>
                </template>
              </uv-list-item>
            </uv-list>
          </view>
        </view>
        <view class="p-2 box-border bg-white rounded">
          <view class="py-1">
            <text class="text-xs font-medium">备注</text>
          </view>
          <uv-textarea placeholder="请输入备注信息" count :height="120" v-model="forms.orderRemarks" />
          <view class="flex flex-wrap gap-1 mt-2">
            <uv-button v-for="(button, index) in buttonOptions" :key="index" :text="button.text" :plain="true"
              :hairline="true" />
          </view>
        </view>
      </view>
    </view>

    <view class="mt-auto w-full flex-shrink-0">
      <CustomAgreement />
      <view class="mt-auto w-full flex-shrink-0 py-3 bg-[#fff] px-2">
        <view class="flex items-center justify-between w-full">
          <view class="w-[70%]">
            <view class="flex items-end text-[14px]">
              <text>预估:</text>
              <view class="text-orange-500 flex items-end font-medium">
                <text class="text-[14px]">￥</text>
                <text class="text-[18px]">100</text>
              </view>
            </view>
            <text class="text-[12px] text-gray-400">最终费用以网点揽收员核实为准</text>
          </view>
          <view class="ml-auto">
            <button style="background-color: #EA6B0E;" class="rounded-full">
              <text class="text-white rounded-full w-[50%] text-sm">确认下单</text>
            </button>
          </view>
        </view>
      </view>
    </view>

    <uv-modal ref="modalRef" @confirm="handleConfirm" :showCancelButton="true" :buttonReverse="true" confirmText="绑定">
      <view class="flex flex-col items-start p-2 box-border w-full">
        <view class="py-1">
          <image src="@/static/cover.png" mode="heightFix" class="h-[32px]" />
        </view>
        <view class="w-full">
          <uv-form labelPosition="left" :model="memberForms" :rules="memberRules" ref="memberFormRef" labelWidth="auto">
            <uv-form-item label="会员账号" prop="member_number">
              <uv-input border="bottom" v-model="memberForms.member_number" />
            </uv-form-item>
            <uv-form-item label="会员密码" prop="member_password">
              <uv-input border="bottom" v-model="memberForms.member_password" />
            </uv-form-item>
          </uv-form>
        </view>
      </view>
    </uv-modal>
  </view>
</template>


<style scoped lang="scss">
$textarea: #f7f7f7;

:deep(.uv-textarea) {
  background-color: $textarea;

  .uv-textarea__count {
    background-color: $textarea !important;
  }
}

:deep(.uv-modal__content) {
  justify-content: flex-start;
  padding: 10px;
  padding-top: 10px !important;
}
</style>