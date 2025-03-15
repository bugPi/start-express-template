<template>
	<view class="w-full h-screen flex flex-col items-center overflow-hidden">
		<CustomNavbar title="订单列表" :back="false" background="#fff" />
		<view class="w-full bg-white py-1 box-border pb-2">
			<uni-search-bar :focus="true" v-model="searchValue" radius="100" @confirm="handleSearch"
				placeholder="输入订单号、商品名称查找" clearButton="auto" cancelButton="none" />
		</view>
		<view class="flex-1 w-full overflow-hidden">
			<scroll-view class="w-full h-full flex flex-col items-center py-2 pb-0" :scroll-y="true">
				<uni-swipe-action ref="swipeAction">
					<uni-swipe-action-item :right-options="actionOptions" class="bg-white mt-2.5"
						v-for="(item, index) in orderList" @click="handleActionClickItem($event, item)" autoClose
						@change="handleActionChange">
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
import { Control_TYPE } from "@/common/enum/system.enum"


console.log("[md5Hash]", md5Hash('123456'));


const swipeActionRef = ref()

const searchValue = ref('')

const actionOptions = [{
	text: Control_TYPE.DETAILS,
	style: {
		backgroundColor: '#007aff'
	}
}, {
	text: Control_TYPE.DELETE,
	style: {
		backgroundColor: '#dd524d'
	}
}]


const handleSearch = (v) => {
	console.log(v, "search");
}

const handleActionClickItem = (event, item) => {
	const { content } = event;
	if (content.text === Control_TYPE.DETAILS) {
		uni.navigateTo({
			url: `/pages/delivery/waybill/details?id=${item.id}`,
			success: () => {
				console.log("[navigateTo]", item.id);
				swipeActionRef.value.closeAll() // 关闭所有已经打开的组件
			}
		})
	} else {
		uni.showModal({
			title: '提示',
			content: '确定删除该订单吗？',
			confirmColor: '#ea6b0e',
			success: (res) => {
				if (res.confirm) {
					console.log('用户点击确定');
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}
}

const handleActionChange = (event) => {
	console.log("change", event);
}


onMounted(() => {
	swipeActionRef.value && swipeActionRef.value.resize(); // 动态添加数据后，如不能正常滑动，需要主动调用此方法，微信小程序、h5、app-vue 不生效
})
</script>


<style scoped lang="scss">
:deep(.uni-easyinput__content) {
	border-radius: 16px !important;
	padding: 0 6px;
}
</style>