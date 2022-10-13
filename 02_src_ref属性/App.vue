<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button @click="showDOM" ref="btn">点我出现上面的DOM元素</button>
		<School ref="scho" />
		<School id="scho" />
	</div>
</template>
<script>
	// 引入组件id
	import School from './components/School'
	
	export default{
		name:'App',
		components:{School},
		data(){
			return{
				msg:'欢迎'
			}
		},
		methods:{
			showDOM(){
				console.log(this.$refs.scho)
				// console.log(this) 输出 VueComponent 这是App的实例对象vc
				// console.log(this.$refs.title)输出 <h1>欢迎</h1>
				// console.log(this.$refs) 输出 {title: h1, btn: button}
				// console.log(this.$refs.scho) 输出 VueComponent  这是 组件School的实例对象vc
				// console.log(document.getElementById('scho'))  输出的是<div>。。。。</div>
			}
		}
	}
</script>