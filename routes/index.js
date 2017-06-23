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
		'GET  /index': index,
		'GET  /list': list,
		'POST /add': add,
	},
	tag: {
		'GET  /list': list,
		'GET  /list/:id': list,
		'POST /add': add,
		'POST /update': update,
		'POST /del': del,
	}
}
 */
let ctrlFiles = fs.readdirSync(resolve('./')).filter(name => name.endsWith('.js') )
let oCtrls = {}
ctrlFiles.forEach(file => oCtrls[file.slice(0, -3)] = require( resolve(file) ).default)


// 注册路由
Object.keys(oCtrls).forEach(ctrlName => {
	let oCtrl = oCtrls[ctrlName]
	let aMethodPath = Object.keys(oCtrl)
	aMethodPath.forEach(methodPath => {
		let handler = oCtrl[methodPath]
		methodPath = methodPath.trim()
		// 验证是否是合法的格式，'get /path/xxx'
		if(!/^(get|post|put|delete|options)\s+[^\s]+$/i.test(methodPath)){
			throw new Error(`路由格式不正确： ‘${methodPath}’`)
		}
		let [method, sPath] = methodPath.split(/\s+/)
		let mapPath = path.join(`/${ctrlName}`, sPath)
		router[method.toLowerCase()](mapPath, handler)
		console.log(mapPath)
	})
})

export default function initRoute(app){
	app.use(router.routes()).use(router.allowedMethods())
}

function resolve(dir){
	return path.resolve(__dirname, '../' ,'controllers', dir || '')
}

