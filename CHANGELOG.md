
## 0.4.1

2018-02-01

- 兼容字符串模板，尤其IE


## 0.4.0

2018-01-31

- 增加是否在容器外继续涟漪（`overflow`字段，为布尔值），默认 `false`


## 0.3.0

2018-01-31

- 增加是否允许从中心点涟漪（`center`字段，为布尔值），默认 `false`

## 0.2.1

2018-01-31

- 优化涟漪的容器行内样式计算，若已经有`position` 或 `overflow` 样式，则不添加行内样式


## 0.2.0

2018-01-31

- 修改接口`dataset` 为 `selector`，支持 `querySelector` 选择器，除字符串还支持数组，如`['button', '.container']`


## 0.1.4

2018-01-31

- 修改接口`bgcolor` 为 `color`
- 修复`put` 设置接口不生效问题
- 修复 `destroy` 接口不生效问题

