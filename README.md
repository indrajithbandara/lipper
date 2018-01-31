# lipper

轻量的涟漪效果库

演示示例 [demo](http://fe1024.com/demos/lipper/examples)

## 用法

- `script` 方式引入

```html
<!doctype html>
<html>
  <body>
    <button id='btn'>指定selector选择器，设置哪些容器需要涟漪效果</button>
    <scirpt src='./lipper.min.js'></scirpt>
    <scirpt>
      lipper.init({selector: ['button', '.container']})
    </scirpt>
  </body>
</html>
```

- `ES6` 方式引入

```javascript
import lipper from 'lipper'
lipper.init({selector: ['button', '.container']})
```

## 接口方法

- `lipper.init(option)`，初始化涟漪效果，参数见`option`说明
- `lipper.put(option)`，设置涟漪参数，参数与`init`方法一样
- `lipper.reset()`，重置为默认
- `lipper.destroy()`，取消涟漪效果


## `option`参数

|参数名|默认值|说明|
|-----|-----|---|
|duration|`1.5`|单位秒|
|selector| 无|必填项，可以为字符串或数组|
|radius|`50`|涟漪扩散半径|
|color|`rgba(250, 250, 250, .5)`|涟漪效果背景颜色|
|zindex|`1000`，|涟漪层的 `z-index`|

