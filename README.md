## 使用说明


### 1.0.1

+ ADD：support for typescript

```js
	import chalk from 'chalk-web'
	chalk('red','测试');
	chalk({
		'background-color':'blue',
		'color':'yellow',
		'font-size':'56px',
	},'必填-需要渲染样式的字符串','选填-需要展示的数据');
```
![示例图片](./test.png)