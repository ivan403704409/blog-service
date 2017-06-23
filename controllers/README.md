> controllers文件夹的js文件只能是controller文件，在route.js会自动读取改文件夹的所有controller
  按照每个controller文件导出的路由规则来自动注册路由

### 编写规范
统一的导出格式 
```javascript
export default {
	'method /path/xxx': handler2,
	'method /path2/xxx': handler2,
	...
}
```
demo: 

```javascript
export default {
	'GET  /index': index,
	'GET  /list': list,
	'POST /add': add,
}

```
