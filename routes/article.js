import Router from 'koa-router'
import { add, list, index, update } from '../controllers/article'
let router = new Router({
	prefix: '/article'
})


router
	.get('/index', index)
	.get('/list', list)
	.post('/add', add)
	.post('/update', update)
	// .post('/del', del)

export default router