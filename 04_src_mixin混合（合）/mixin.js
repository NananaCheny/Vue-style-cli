export const hunhe = {
	methods:{
		showName(){
			alert(this.name)
		}
	},
	//mounted生命周期加上以后，不管原本组件里有没有都会再执行一边 
	mounted(){
		console.log('你好啊');
	},
	
}

export const hunhe2 ={
	data() {
		return {
			x:100,
			y:200
		}
	},
}