import query from '../config/query.js'


// 添加文章
export async function list() {
	return await query('select * from b_article order by ctime desc')
}


// 添加文章
export async function add({id, title, content, tag=null}) {
	console.log(id, title, content, tag)
	await query('insert into b_article (id,title,content,tag) values ($1,$2,$3,$4);', [id, title, content, tag])
}