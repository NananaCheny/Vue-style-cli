<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>姓名：{{name}}</h2>
		<h2>性别：{{sex}}</h2>
		<!-- <h2>年龄：{{age+1}}</h2> -->
		<!--想要实现年龄显示为实际+1 原先是字符串要强制转换为数字来计算   或者用v-bind在传进来的那里用-->
		<!-- <h2>年龄：{{age*1+1}}</h2> -->
		
		<h2>年龄：{{myAge+1}}</h2>	
		<button @click="updataAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>	
	export default{
		name:'Student',
		data(){
			console.log(this);
			return{
				msg:'我是一个',
				// name:'hehe',
				// sex:'男',
				// age:19,
				myAge:this.age,
			}
		},
		methods:{
				updataAge(){
					this.myAge++
				}
		},
		// 简单声明接收
		props:['name','age','sex'],
		
		// 接收得同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */
		
		// 接收的同时对数据：进行类型的限制+默认值的指定+必要性的限制
		/* props:{
			name:{
				type:String, //name的类型是字符串
				required:true //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		} */

	}
</script>
