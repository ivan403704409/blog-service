import Ajv from 'ajv'
const ajv = new Ajv()
let schema = {
  required: ['id'],
  properties: {
    id: { type: 'string', pattern: '^\\d+$'  }
  }
};

export default (ctx) => {
	let valid = ajv.validate(schema, ctx.request.query)
	return {
		valid,
		code: 'article.index.id.null',
		msg: valid ? '' : ajv.errors[0].keyword==='required' ? '请输入文章id' : '没有此文章'
	}
}


