<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body{
		width: 100%;
		height: 100%;
	}
		
	page{
		width: 100%;
		height: 100%;
	}
	.content {
		width: 100%;
		height: 100%;
		background: #fff;
		/* overflow: hidden; */
		position: relative;
		background: rgb(242,242,242);
	}
</style>
