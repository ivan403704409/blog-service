import query from '../config/query.js'

// 获取某篇文章
export async function index(id) {
	return await query('select * from b_article where id=$1;', [id])
}

// 添加文章
export async function list(tag) {
	let where = ''
	if(tag)where = 'where tag=$1'
	return await query(`select * from b_article ${where} order by ctime desc`, tag ? [tag] : undefined)
}


// 添加文章
export async function add({id, title, content, tag=null}) {
	let data = await query('insert into b_article (id,title,content,tag) values ($1,$2,$3,$4);', [id, title, content, tag])
	console.log(data)
}

// 更新文章
export async function update({id, title, content, tag=null}) {
	return await query('update b_article set title=$1, content=$2 where id = $3;', [title, content, id])
}