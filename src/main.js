  /* 默认配置 */
  let defaultArgs = {
    duration: 1.5,
    dataset: 'shadow',
    radius: 50,
    bgcolor: 'rgba(250, 250, 250, .5)'
  }
  /* 初始化样式 */
  let initStyle = `
    position: absolute;
    z-index: 1000;
    pointer-events: none;
    transform: translate3d(-50%, -50%, 0) scale(0);
    `
  let config = {}

  function init (args) {
    put(args)
    document.addEventListener('mousedown', mousedown.bind(null, config))
  }

  function destroy () {
    document.removeEventListener('mousedown', mousedown)
  }

  /* 修改配置 */
  function put (args) {
    for (let i in args) {
      config[i] = args[i]
    }
  }

  function reset () {
    for (let i in defaultArgs) {
      config[i] = defaultArgs[i]
    }
  }

  function mousedown (args, e) {
    initDOM(args || {}, e)
  }

  function getActiveStyle (args, event) {
    let target = event.target
    let duration = args.duration || defaultArgs.duration
    let radius = args.radius || defaultArgs.radius
    let bgcolor = args.bgcolor || defaultArgs.bgcolor
    return `
      position: absolute;
      z-index: 1000;
      pointer-events: none;
      top: ${event.y - target.offsetTop}px;
      left: ${event.x - target.offsetLeft}px;
      height: ${radius * 2}px;
      width: ${radius * 2}px;
      border-radius: 50%;
      background-color: ${bgcolor};
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale(1);
      transition: opacity ${args.duration}s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform ${args.duration}s cubic-bezier(0.23, 1, 0.32, 1) 0ms;`
  }

  function initDOM (args, event) {
    let dataset = args.dataset || defaultArgs.dataset
    let duration = args.duration || defaultArgs.duration
    let computedStyle = getComputedStyle(event.target)
    let position = computedStyle.position
    let overflow = computedStyle.overflow
    let target = event.target
    let datasetShadow = target.dataset[dataset]

    if (datasetShadow === '' || datasetShadow === 'true') {
      event.stopPropagation()
      target.style.position = 'relative'
      target.style.overflow = 'hidden'
      let shadow = getShadow(event.target)
      setTimeout(function () {
        let activeStyle = getActiveStyle(args, event)
        shadow.setAttribute('style', activeStyle)
        setTimeout(function () {
          initShadow(event, shadow, computedStyle, initStyle)
        }, duration * 1000)
      }, 20)
    }
  }

  function initShadow (event, shadow, computedStyle, initStyle) {
    shadow.setAttribute('style', initStyle)
    event.target.removeChild(shadow)
    if (computedStyle.position !== 'static') {
      event.target.style.position = computedStyle.position
    }
    if (computedStyle.overflow !== '') {
      event.target.style.overflow = computedStyle.overflow
    }
  }

  function getShadow (container) {
    let shadow = document.createElement('span')
    shadow.setAttribute('style', initStyle)
    container.appendChild(shadow)
    return shadow
  }

  export const lipper = {
    init: init,
    destroy: destroy,
    put: put,
    reset: reset
  } 
