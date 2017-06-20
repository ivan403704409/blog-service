// 路由，路由分配到具体的 controller
// 自动注册routes目录下所有路由
import fs from 'fs'
import path from 'path'
import Router from 'koa-router'
let router = new Router()

/**
获取所有控制器
oCtrls = {
	article: {
		get: [fn1, fn2, fn3],
		post: [fn4, fn5]
	},
	tag: {
		get: [fn1, fn2, fn3],
		post: [fn4, fn5]
	}
}
 */
let ctrlFiles = fs.readdirSync(resolve('./')).filter(name => name.endsWith('.js') )
let oCtrls = {}
ctrlFiles.forEach(file => oCtrls[file.slice(0, -3)] = require( resolve(file) ).default)


// 注册路由
Object.keys(oCtrls).forEach(ctrlName => {
	// 当前路由有哪些方法['get', 'post', ...]
	let methods = Object.keys(oCtrls[ctrlName])
	methods.forEach(method => {
		// 当前路由当前方法的所有处理函数
		let ctrlHandlers = oCtrls[ctrlName][method]
		ctrlHandlers.forEach(fn => {
			// router[method](path, fn)
			let path = Object.keys(fn)[0]
			let handler = fn[path]
			router[method](`/${ctrlName}/${path}`, handler)
		})
	})
})

console.log(router)

export default function initRoute(app){
	app.use(router.routes()).use(router.allowedMethods())
}

function resolve(dir){
	return path.resolve(__dirname, '../' ,'controllers', dir || '')
}

