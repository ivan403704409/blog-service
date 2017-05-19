// 标签
import Ajv from 'ajv'
const ajv = new Ajv()

// 获取标签列表
export function list(ctx, next) {
	ctx.body = [
		{id: 1, name: 'js'},
		{id: 1, name: 'linux'},
		{id: 1, name: 'python'},
		{id: 1, name: 'kali'},
	]
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

