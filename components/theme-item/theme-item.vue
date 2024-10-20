<template>
	<view  class="theme-item" >
	<!-- 	<navigator url="" class="box">
			<image class="pic" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			<view class="mask">
				明星
			</view>
			<view class="tag">
				三天前更新
			</view>
		</navigator> -->
		<navigator url="" class="box more">
			<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons color="#fff" type="more-filled" size="30"></uni-icons>
				<view class="text">更多</view>
			</view>
			
		</navigator>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.theme-item{
		.box{
			height: 340rpx;
			border-radius: 12rpx;
			overflow: hidden;
			position: relative;
			.mask{
				width: 100%;
				position: absolute;
				bottom: 0;
				height: 70rpx;
				// text-align: center;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				background-color: rgba(0,0,0,0.2);
				backdrop-filter: blur(20rpx);
				font-weight: 900;
				color: white;
			}
			.tag{
				position: absolute;
				left: 0;
				top: 0;
				background-color: rgba(250,129,90,0.7);
				backdrop-filter: blur(20rpx);
				color: #fff;
				font-size: 22rpx;
				padding: 6rpx 14rpx;
				border-radius: 0 0 20rpx 0;
			}
			.pic{
				width: 100%;
				height: 100%;
			}
		}
	}
	.box.more{

		.mask{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-self: center;
			width: 100%;
			height: 100%;
			
		}
		.text{
			font-size: 28rpx;
		}
	}
</style>