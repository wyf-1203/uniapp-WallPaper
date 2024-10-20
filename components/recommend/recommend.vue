<template>
	<view class="select">
		<common-title>
			<template #name>
				每日推荐
				<!-- <uni-icons type="calendar-filled" size="30"></uni-icons> -->
			</template> 
			<template #custom>
				<view class="date">
					<uni-icons type="calendar-filled" size="30" color="#28b389"></uni-icons>
					<view class="text">
						<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
					</view>
				</view>
			</template>
		</common-title>
		<view class="content">
			<scroll-view scroll-x="true" >
				<view v-for="item in 8" class="box">
					<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.select{
	padding-top:50rpx;
	.content{
		width: 720rpx;
		margin: 30rpx 0 0 30rpx;
		scroll-view{
			white-space: nowrap;
			.box{
				width: 200rpx;
				height: 430rpx;
				display: inline-block;
				padding-right: 15rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 12rpx
				};
			}
			.box:last-child{
				padding-right: 30rpx;
			}
		}
		
	}
	.date{
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		.text{
			color: #28b389;
			margin-left: 5rpx;
		}
	}
}
</style>