<template>
	<view>
		<iframe :src="url"></iframe>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		onLoad(options){
			console.log(options);
		
			window.location.href = options.url;
		},
		onShow(option){
			// this.url=option.url
		},
		methods: {
			
		}
	}
</script>

<style>
	view{
		width:100% ;
		height: 100%;
	}
iframe{
	width:100% ;
	height: 100%;
	border: none;
}

</style>
