import * as modelArticle from '../models/article'

// 添加标签
export async function add(ctx, next) {
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

export async function list(ctx, next) {
	let data = await modelArticle.list()
	ctx.body = data
}
