#笔记
# vue_test

## vue. config . js配置文件
	>使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
	>使用vue. config. js可以对脚手架进行个性化定制，详情见: https://cli.vuejs.org/zh

## ref属性
	1.被用来给元素或子组件注册引用信息(id的替代者)
	2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
	3.使用方式:
		打标识: <h1 ref="xxx">.....</h1> 或<School ref="xxx" ></School>
		获取: this.$refs.xxx
		
## 配置项props	
	功能：让组件接收外部传过来的数据
	传递数据：<Demo name="xxx"/>
	接收数据：	
		第一种方式（只接收）：
			props:['name']	
		第二种方式（限制数据类型）：
			props:{name:String}	
		第三种方式（限制类型、限制必要性、指定默认值）：
			props:{
			    name:{
			    	type:String, //类型
			        required:true, //必要性
			        default:'JOJO' //默认值
			    }
			}	
	备注：
		props是只读的，Vue底层会监测你对props的修改，如果进行了修改，
		就会发出警告，若业务需求确实需要修改，
		那么请复制props的内容到data中一份，然后去修改data中的数据。
		
## mixin(混入)
	功能:可以把多个组件共用的配置提取成一个 混入对象
	使用方式:
		第一步定义混合， 例如:
			{
				data(){....}, 
				methods:{...}
				...
			}
		第二步使用混入，例如: 
		(1).全局混入: Vue.mixin(xxx) 
		(2).局部混入: mixins:['xxx']
	备注：
		1.组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，在发生冲突时以组件优先
		2.同名生命周期钩子将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。


## 插件
	1.功能：用于增强Vue	
	2.本质：包含install方法的一个对象，install的第一个参数是Vue，
		  第二个以后的参数是插件使用者传递的数据
	3.定义插件：
		plugin.install = function (Vue, options) {
				// 1. 添加全局过滤器
				Vue.filter(....)
			
				// 2. 添加全局指令
				Vue.directive(....)
			
				// 3. 配置全局混入
				Vue.mixin(....)
			
				// 4. 添加实例方法
				Vue.prototype.$myMethod = function () {...}
				Vue.prototype.$myProperty = xxxx
			}		
	4.使用插件：Vue.use(plugin)
		