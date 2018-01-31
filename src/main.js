/*
 * lipper
 */

/* 默认配置 */
let defaultArgs = {
  duration: 1.5,
  dataset: 'lipper',
  radius: 50,
  color: 'rgba(250, 250, 250, .5)',
  zindex: 1000
}

/* 缓存正在使用的配置 */
let config = {}

/* 基础样式 */
let baseStyle = `
  position: absolute;
  z-index: ${defaultArgs.zindex};
  pointer-events: none;
  border-radius: 50%;
  `

/* 初始化样式 */
let initStyle = `
  ${baseStyle}
  transform: translate3d(-50%, -50%, 0) scale(0);
  `

/* 是否初始化过 */
let inited = false

/* 缓存绑定的函数 */
function mousedown (e) {
  initDOM(config || {}, e)
}

/* 计算涟漪时的样式 */
function getActiveStyle (args, event) {
  let target = event.target
  let duration = args.duration || defaultArgs.duration
  let radius = args.radius || defaultArgs.radius
  let color = args.color || defaultArgs.color
  let rect = target.getBoundingClientRect()
  return `
    ${baseStyle}
    top: ${event.y - rect.top}px;
    left: ${event.x - rect.left}px;
    height: ${radius * 2}px;
    width: ${radius * 2}px;
    background-color: ${color};
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(1);
    transition: opacity ${args.duration}s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform ${args.duration}s cubic-bezier(0.23, 1, 0.32, 1) 0ms;`
}

/* 初始化DOM节点 */
function initDOM (args, event) {
  let dataset = args.dataset || defaultArgs.dataset
  let duration = args.duration || defaultArgs.duration
  let computedStyle = getComputedStyle(event.target)
  // TODO 记录原始位置信息，动画结束后需要清除
  // let cssText = event.target.style.cssText
  // let originPosition = 
  // let originOverflow = 
  let target = event.target
  let datasetLipper = target.dataset[dataset]
  if (datasetLipper === '' || datasetLipper === 'true') {
    event.stopPropagation()
    target.style.position = 'relative'
    target.style.overflow = 'hidden'
    let lipper = getLipperElement(event.target)
    setTimeout(function () {
      let activeStyle = getActiveStyle(args, event)
      lipper.setAttribute('style', activeStyle)
      setTimeout(function () {
        initLipper(event, lipper, computedStyle, initStyle)
      }, duration * 1000)
    }, 20)
  }
}

/* 重置配置 */
function initLipper (event, lipper, computedStyle, initStyle) {
  lipper.setAttribute('style', initStyle)
  event.target.removeChild(lipper)
  event.target.style.position = computedStyle.position || ''
  event.target.style.overflow = computedStyle.overflow || ''
}

/* 生成涟漪效果节点并返回 */
function getLipperElement (container) {
  let lipper = document.createElement('span')
  lipper.setAttribute('style', initStyle)
  container.appendChild(lipper)
  return lipper
}

/* 初始化，只应该初始化一次 */
export function init (args) {
  if (!inited) {
    setConfig(args)
    document.addEventListener('mousedown', mousedown)
    inited = true
  }
}

function setConfig (args) {
  for (let i in args) {
    config[i] = args[i]
  }
}

/* 主动销毁特效，全局生效 */
export function destroy () {
  document.removeEventListener('mousedown', mousedown)
  inited = false
}

/* 修改配置 */
export function put (args) {
  setConfig(args)
  destroy()
  init()
}

/* 重置配置 */
export function reset () {
  for (let i in defaultArgs) {
    config[i] = defaultArgs[i]
  }
}

export default {
  init,
  destroy,
  put,
  reset
}
