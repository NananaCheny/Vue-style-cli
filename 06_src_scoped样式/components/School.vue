<template>
	<div class="demo">
		<h2 >学校名称：{{name | mySlice}}</h2>
		<h2>学校地址：{{address}}</h2>
		
	</div>
</template>

<script>
	
	export default{
		name:'School',
		data(){
			return{
				name:'he嘿嘿hhehdd',
				address:'北京'
			}
		},
		
		
		
	}
</script>
<style scoped>
	.demo{
	    background-color: blueviolet;
	    }

</style>

