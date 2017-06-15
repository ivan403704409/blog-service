import * as modelArticle from '../models/article'

export async function index(ctx, next){
	let { id } = ctx.request.query
	let data = await modelArticle.index(id)
	data = data[0] || null
	ctx.body = {
		code: 1,
		msg: 'success',
		data,
	}
}

// 添加标签
export async function add(ctx, next) {
	let { title, content, tag} = ctx.request.body
	let id = +new Date()
	let data = {
		id,
		title,
		content,
		tag: 'vue'
	}
	await modelArticle.add(data)
	ctx.body = {
		code: 1,
		msg: '添加成功',
	}
}


// 添加标签
export async function update(ctx, next) {
	let { id, title, content, tag } = ctx.request.body
	let data = {
		id,
		title,
		content,
		tag: 'vue'
	}
	await modelArticle.update(data)
	ctx.body = {
		code: 1,
		msg: '添加成功',
	}
}

export async function list(ctx, next) {
	let data = await modelArticle.list()
	ctx.body = {
		code: 1,
		msg: '添加成功',
		data,
	}
}
