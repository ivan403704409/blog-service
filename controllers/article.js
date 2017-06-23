// 文章
import * as modelArticle from 'models/article'
import getById from 'validators/article/getById.js'

export async function index(ctx, next){
	let { valid, msg } = getById(ctx)
	if(!valid){
		ctx.body = msg
		return
	}

	let { id } = ctx.request.query
	let data = await modelArticle.index(id)
	data = data[0] || null
	ctx.body = {
		code: 'msg.success',
		stat: 1,
		msg: 'success',
		data,
	}
}



// 添加标签
const add = async (ctx, next) => {
	let { title, content, tag} = ctx.request.body
	let id = 2
	let data = {
		id,
		title,
		content,
		tag: tag || null
	}
	console.log(data)
	await modelArticle.add(data)
	ctx.body = {
		code: 1,
		msg: '添加成功'
	}
}

const list = async (ctx, next) => {
	let data = await modelArticle.list()
	data.forEach(val => {
		val.content = val.content.substr(0, 255) + '...'
	})
	ctx.body = data
}

export default {
	'GET  /index': index,
	'GET  /list': list,
	'POST /add': add,
}