<template>
	<view class="theme">
		<!-- 111 -->
		<common-title>
			<template #name>
				专题精选
			</template>
			<template #custom>
				<navigator url="" class="more">More+</navigator>
			</template>
		</common-title>
		<view class="content">
			<theme-item v-for="item in 8"></theme-item>
			<theme-item></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.theme{
		padding-top: 50rpx;
		.more{
			color: #888;
			font-size: 32rpx;
		}
		.content{
			margin-top: 30rpx;
			padding: 0 30rpx;
			display:grid;
			gap:15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
</style>