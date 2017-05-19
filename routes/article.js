import Router from 'koa-router'
import { add, list } from '../controllers/article'
let router = new Router({
	prefix: '/article'
})


router
	.get('/list', list)
	.post('/add', add)
	// .post('/update', update)
	// .post('/del', del)

export default router