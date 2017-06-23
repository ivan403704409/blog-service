// 标签
import { getTagList } from 'models/tag'


// 获取标签列表
const list = async (ctx, next) => {
	ctx.body = await getTagList()
}

// 添加标签
const add = async (ctx, next) => {
	let {request} = ctx
	let { name } = request.body
	ctx.body = request.body
}


// 更新标签
const update = (ctx, next) => {
	ctx.body = {
		code: 1,
		msg: '更新成功',
		data: null,
	}
}

// 删除标签
const del = (ctx, next) => {
	ctx.body = {
		code: 1,
		msg: '删除成功',
		data: null,
	}
}


export default {
	'GET  /list': list,
	'GET  /list/:id': list,
	'POST /add': add,
	'POST /update': update,
	'POST /del': del,
}