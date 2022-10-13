/* 
	该文件是整个项目的入口
 */
// 引入Vue
import Vue from 'vue'
// 引入App组件 他是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app') */
// $mount(’#app’) ：手动挂载到id为app的dom中的意思

// 创建Vue实例对象 ---vm
new Vue({
	el:'#app',
	// 下面这行代码  完成的功能：将App组件放入容器中
	render: h => h(App),
})