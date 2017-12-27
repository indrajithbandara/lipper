# lipper

轻量的涟漪效果库


## 用法

- `script` 方式引入

```html
<!doctype html>
<html>
  <body>
    <button data-lipper>给需要涟漪的元素添加 data-lipper 属性试试</button>
    <scirpt src='./lipper.min.js'></scirpt>
    <scirpt>
      lipper.init()
    </scirpt>
  </body>
</html>
```

- `ES6` 方式引入

```javascript
import lipper from 'lipper'
lipper.init()
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
|dataset| `lipper`|给需要添加涟漪效果的节点属性 `data-lipper`|
|radius|`50`|涟漪扩散半径|
|bgcolor|`rgba(250, 250, 250, .5)`|涟漪效果背景颜色|
|zindex|`1000`，|涟漪层的 `z-index`|

