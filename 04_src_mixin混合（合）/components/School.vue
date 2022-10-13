<template>
	<div class="school">
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	// 引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'
	
	export default{
		name:'School',
		data(){
			return{
				name:'hehe',
				address:'北京'
			}
		},
		/* methods:{
			showName(){
				alert(this.name)
			}
		}, */
		// 使用hunhe将上面的methods代替
		// mixins:[hunhe,hunhe2]
		
	}
</script>

<style>
	.school{
		background-color: azure;
	}
</style>