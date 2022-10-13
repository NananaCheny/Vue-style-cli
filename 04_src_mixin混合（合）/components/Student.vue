<template>
	<div>
		<h2 @click="showName">姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	// 引入一个hunhe
	// import {hunhe,hunhe2} from '../mixin'
	
	export default{
		name:'Student',
		data(){
			return{
				name:'hehe',
				sex:'男',
				x:666 //比mixin里的x优先
			}
		},
		/* methods:{
			showName(){
				alert(this.name)
			}
		}, */
		// 使用hunhe将上面的methods代替
		// 局部混入
		// mixins:[hunhe,hunhe2],
		/* mounted(){
			console.log('你好啊！！！！！！！');
		}, */
	}
</script>
