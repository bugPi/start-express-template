<template>
	<view class="w-full h-screen flex flex-col items-center overflow-hidden">
		<CustomNavbar title="订单列表" :back="false" background="#fff" />
		<view class="w-full bg-white py-1 box-border pb-2">
			<uni-search-bar :focus="true" v-model="searchValue" radius="100" @confirm="hanldeSearch"
				placeholder="输入订单号、商品名称查找" clearButton="auto" cancelButton="none" />
		</view>
		<view class="flex-1 w-full overflow-hidden">
			<scroll-view class="w-full h-full flex flex-col items-center py-2 pb-0" :scroll-y="true">
				<uni-swipe-action>
					<uni-swipe-action-item :right-options="actionOptions" class="bg-white mt-2.5"
						v-for="(item, index) in orderList" @click="handleClickItem">
						<CustomCard :item="item" />
					</uni-swipe-action-item>
				</uni-swipe-action>
			</scroll-view>

		</view>

		<CustomBottom />
	</view>
</template>

<script setup lang="ts">
import { md5Hash } from '@/common/plugins/crypto';
import { CustomBottom, CustomEmpty, CustomNavbar } from "@/components"
import { CustomCard } from "./components"
import { orderList } from "@/mock/index"


console.log(orderList);


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

const hanldeSearch = (v) => {
	console.log(v, "search");

}

const handleClickItem = (item) => {
	console.log(item, "item");
}

</script>


<style scoped lang="scss">
:deep(.uni-easyinput__content) {
	border-radius: 16px !important;
	padding: 0 6px;
}
</style>