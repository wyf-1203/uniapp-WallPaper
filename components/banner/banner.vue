<template>
<!-- 	<view class="layout">
		
	</view> -->
	<view class="banner">
		<swiper circular indicator-active-color="rgba(255,255,255)" indicator-color="rgba(255,255,255,0.5)"
		 :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in images">
				<image :src=item mode="aspectFill"></image>
			</swiper-item>
			
		</swiper>
	</view>
	<view class="notice">
		<view class="left">
			<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
			<text class="text">公告</text>
		</view>
		<view class="center">
			<swiper vertical autoplay :interval="3000" :duration="1000" circular> 
				<swiper-item >文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容1</swiper-item>
				<swiper-item >文字内容2</swiper-item>
				<swiper-item >文字内容3</swiper-item>
			</swiper>
		</view>
		<view class="right">
			<uni-icons type="right" size="20" color="#ccc"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	const images = ref([
		"../../common/images/banner1.jpg",
		"../../common/images/banner2.jpg",
		"../../common/images/banner3.jpg" 
	])
</script>

<style lang="scss" scoped>
.banner{
	padding: 30rpx 0;
	width: 750rpx;
	height:400rpx;
	swiper{
		width: 100%;
		height: 100%;
		swiper-item{
			// padding: 0 40rpx;
			width: 100%;
			height: 100%;
			padding: 0 20rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}
}
.notice{
	height: 80rpx;
	background-color: #f9f9f9;
	padding: 0 30rpx;
	display: flex;
	flex-direction: row;
	align-content: space-between;
	justify-content: left;
	line-height: 80rpx;
	margin: 0 auto;
	.left{
		display: flex;
		align-items: center;
		justify-content: center;
		.text{
			color: #28b389;
			font-weight: 600;
			font-size: 28rpx;
		}
	}
	.center{
		padding: 0 30rpx;
		flex: 1;
		swiper{
			height: 100%;
			&-item{
				height: 100%;
				font-size: 30rpx;
				color: #666;
				overflow: hidden;
				white-space:  nowrap;
				text-overflow: ellipsis;
			}
		}
	}
	.right{
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>