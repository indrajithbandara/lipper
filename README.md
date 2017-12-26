# lipper

轻量的涟漪效果库


## 用法

- `script` 方式引入

```html
<scirpt src='./lipper.min.js'></scirpt>
<scirpt>
  // 或者
  lipper.init()
</scirpt>
```

- `ES6` 方式引入

```javascript
import { lipper } from 'lipper'
lipper.init()
```

## `option`参数

|参数名|默认值|说明|
|-----|-----|---|
|duration|`1.5`，单位秒|无|
|dataset|给需要添加涟漪效果的节点属性 默认 data-lipper|无|
|radius|涟漪扩散半径|无|
|bgcolor|涟漪效果背景颜色|无|


## 接口方法

- `lipper.put(option)`，设置涟漪参数，参数与`init`方法一样
- `lipper.reset()`，重置为默认
- `lipper.destroy()`，取消涟漪效果

