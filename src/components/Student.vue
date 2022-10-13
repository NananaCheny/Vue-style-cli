<template>
	<div>
		<h2 class="demo">姓名：{{name}}</h2>
		<h2>性别：{{sex}}</h2>
		
	</div>
</template>

<script>	
	export default{
		name:'Student',
		data(){
			return{
				name:'hehe',
				sex:'男',
			}
		},	
	}
</script>
<!-- <style lang="less">
	.demo{
		background-color: pink;
	}
</style> -->
