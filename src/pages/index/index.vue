<template>
	<view class="w-full h-screen flex flex-col items-center">
		<CustomNavbar title="订单列表" :back="false" background="#fff" />
		<view class="w-full bg-white py-1 px-2.5 box-border pb-2">
			<uni-easyinput prefixIcon="search" v-model="searchValeue" placeholder="输入订单号、商品名称查找" :style="searchStyle"
				:clearable="false" trim="all" />
		</view>
		<scroll-view class="flex flex-col items-center justify-center h-full flex-1 py-2">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="actionOptions" class="bg-white">
					<CustomCard />
				</uni-swipe-action-item>
			</uni-swipe-action>
		</scroll-view>
		<CustomBottom />
	</view>
</template>

<script setup lang="ts">
import { md5Hash } from '@/common/plugins/crypto';
import { CustomBottom, CustomEmpty, CustomNavbar } from "@/components"
import { CustomCard } from "./components"


console.log("[md5Hash]", md5Hash('123456'));


const searchValeue = ref('')
const searchStyle = {
	borderColor: '#e5e7eb'
}

const actionOptions = [{
	text: '详情',
	style: {
		backgroundColor: '#007aff'
	}
}, {
	text: '删除',
	style: {
		backgroundColor: '#dd524d'
	}
}]


const handleClick = () => {
	uni.navigateTo({
		url: '/pages/delivery/waybill/details'
	})
}

</script>


<style scoped lang="scss">
:deep(.uni-easyinput__content) {
	border-radius: 16px !important;
	padding: 0 6px;
}
</style>