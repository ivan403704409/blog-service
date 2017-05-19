import query from '../config/query.js'

export async function getTagList(){
	let data = await query('select id,name from b_tag;')
	return data
}

