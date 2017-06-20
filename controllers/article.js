import * as modelArticle from '../models/article'

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
	ctx.body = data
}

export default {
	get: [{list}],
	post: [{add}],
}