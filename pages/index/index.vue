<template>
	<view class="content">		
		<banner></banner>
		<recommend></recommend>
		<theme></theme>
	</view>
</template>

<script setup>
	// import bannerVue from '../../components/banner/banner.vue';
	import {test_1} from '@/api/api.js/api.js'
	onLoad(()=>{
		test_1().then((res)=>{
			console.log(res);
		})
	})
</script>

<style lang="scss" >
	// .content{
	// 	width: 750rpx;
	// 	padding: 0 30rpx;
	// 	box-sizing: border-box;
	// }
</style>
