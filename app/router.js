import $ from 'zepto'

export default function (router) {
  router.map({
    '/wanglihong': {
      component (resolve) {
        require(['./components/wanglihong'], resolve)
      }
    },
    '/lizhongshuo': {
      component (resolve) {
        require(['./components/lizhongshuo'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      let depath = toPath === '/' || toPath === '/wanglihong' || toPath === '/lizhongshuo'
      router.app.isIndex = depath ? 0 : 1
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
  })
}