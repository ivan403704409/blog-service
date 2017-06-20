> controllers文件夹的js文件只能是controller文件，在route.js会自动读取改文件夹的所有controller
  按照每个controller文件导出的路由规则来自动注册路由

### 编写规范
统一的导出格式 
export default {
	[method]: [
		{ [path] : handler },
		{ [path2] : handler2 },
		...
	],
	[method2]: [
		{ [path3] : handler3 },
		{ [path4] : handler4 },
		...
	],
	...
}

demo: 
export default {
	get: [{list}, { 'list/:id': list }],
	post: [{add}, {update}, {del}],
}