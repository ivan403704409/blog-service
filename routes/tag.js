import Router from 'koa-router'
import { list, add, update, del } from '../controllers/tag'
let router = new Router({
	prefix: '/tag'
})


router
	.get('/list', list)
	.post('/add', add)
	.post('/update', update)
	.post('/del', del)

export default router