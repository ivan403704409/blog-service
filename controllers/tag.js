// 标签
import { getTagList } from '../models/tag'

// 获取标签列表
export async function list(ctx, next) {
	ctx.body = await getTagList()
}

// 添加标签
export async function add(ctx, next) {
	let {request} = ctx
	let { name } = request.body
	ctx.body = request.body
}

function fn(){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve()
		}, 1000)
	})
}

// 更新标签
export function update(ctx, next) {
	ctx.body = {
		code: 1,
		msg: '更新成功',
		data: null,
	}
}

// 删除标签
export function del(ctx, next) {
	ctx.body = {
		code: 1,
		msg: '删除成功',
		data: null,
	}
}

